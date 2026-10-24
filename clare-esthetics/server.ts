import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json({ limit: '2mb' }));

// Initialize Gemini API client with required header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

import { lookupIngredient, INGREDIENT_DICTIONARY, IngredientProfile } from './src/services/ingredientDatabase.js';

// Build structured clinical audit using peer-reviewed rules
function buildRuleBasedAudit(ingredientsText: string) {
  const cleanedText = ingredientsText
    .replace(/\bactive ingredients?:\s*/gi, '')
    .replace(/[\.\s]*\binactive ingredients?:\s*/gi, ', ')
    .replace(/\(.*?\)/g, (match) => match.replace(/,/g, ';'));

  const rawTokens = cleanedText
    .split(/[,;\n•·]+|\.\s+(?=[A-Za-z])/)
    .map((t) => t.trim().replace(/\s*\d+(\.\d+)?%\s*/g, '').replace(/^[0-9\.\-\*\s]+/, ''))
    .filter((t) => t.length > 1);

  const evaluatedIngredients: any[] = [];
  let highComedogenicCount = 0;
  let moderateComedogenicCount = 0;
  let highIrritantCount = 0;
  let fragranceCount = 0;

  for (const token of rawTokens) {
    const profile = lookupIngredient(token);
    if (profile) {
      if (profile.comedogenicRating >= 4) highComedogenicCount++;
      else if (profile.comedogenicRating >= 2) moderateComedogenicCount++;

      if (profile.irritancyRating >= 4) highIrritantCount++;
      if (profile.category.toLowerCase().includes('fragrance')) fragranceCount++;

      evaluatedIngredients.push({
        name: token,
        inciName: profile.canonicalName,
        status: profile.status,
        comedogenicRating: profile.comedogenicRating,
        irritancyRating: profile.irritancyRating,
        category: profile.category,
        concerns: profile.concerns,
        benefit: profile.benefit || undefined,
        recommendation: profile.recommendation,
      });
    } else {
      // Clean functional ingredient
      evaluatedIngredients.push({
        name: token,
        inciName: token,
        status: 'neutral',
        comedogenicRating: 0,
        irritancyRating: 0,
        category: 'Functional Cosmetic Component',
        concerns: [],
        benefit: 'Formulation stabilizer, vehicle, or mild conditioning agent',
        recommendation: 'Standard cosmetic ingredient; generally well tolerated.',
      });
    }
  }

  const poreRisk = highComedogenicCount > 0 ? 'High' : moderateComedogenicCount >= 2 ? 'Moderate' : 'Low';
  const irritRisk = highIrritantCount > 0 ? 'High' : fragranceCount > 0 ? 'Moderate' : 'Low';

  const isAcneSafe = highComedogenicCount === 0 && moderateComedogenicCount <= 1;
  const isSensitiveSafe = highIrritantCount === 0 && fragranceCount === 0;

  let verdict = 'Clean & Non-Comedogenic Formulation';
  let summary = 'This formula is free of high-risk pore cloggers, stripping surfactants, and severe contact allergens.';

  if (highComedogenicCount > 0) {
    verdict = `${highComedogenicCount} High-Risk Pore-Clogger${highComedogenicCount > 1 ? 's' : ''} Flagged`;
    summary = `Contains ${highComedogenicCount} ingredient(s) rated 4–5/5 on the clinical comedogenicity scale, known to cause follicular micro-plugs, blackheads, and breakouts.`;
  } else if (highIrritantCount > 0) {
    verdict = 'Barrier-Stripping Irritants Flagged';
    summary = `Contains aggressive cleansing detergents or drying alcohols that disrupt the acid mantle and lipid bilayer.`;
  } else if (fragranceCount > 0) {
    verdict = 'Sensitizing Fragrance Compounds Detected';
    summary = `Contains perfume or volatile aromatic terpenes that can trigger contact dermatitis or flare rosacea.`;
  }

  let advice = 'This formula presents minimal comedogenic or irritancy risks. Great for daily routine integration.';
  if (highComedogenicCount > 0) {
    advice = 'If you experience congestion, tiny bumps on the forehead, or cystic jawline breakouts, stop using this product for 3 weeks. Book a clarifying facial to clear existing clogged sebum.';
  } else if (highIrritantCount > 0) {
    advice = 'Avoid pairing this product with active retinoids or chemical acids. Focus on replenishing ceramides and soothing botanical serums.';
  }

  return {
    overallVerdict: verdict,
    summary,
    poreCloggingRisk: poreRisk,
    irritationRisk: irritRisk,
    skinTypeSuitability: {
      acneProne: isAcneSafe,
      sensitive: isSensitiveSafe,
      drySkin: true,
      oilySkin: isAcneSafe,
    },
    ingredients: evaluatedIngredients,
    estheticianAdvice: advice,
  };
}

// API endpoint for clinical skincare ingredient audit
app.post('/api/analyze-ingredients', async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || typeof ingredients !== 'string' || !ingredients.trim()) {
    return res.status(400).json({ error: 'Please provide a valid ingredients list.' });
  }

  try {
    const systemInstruction = `You are a world-class board-certified cosmetic chemist and clinical esthetician specializing in dermatological ingredient analysis.
Evaluate the provided skincare or cosmetic ingredient list with scientific accuracy.
Base your comedogenic ratings (0 to 5) strictly on peer-reviewed dermatological comedogenicity assays (Fulton scale and subsequent Rabbit Ear & Human Follicle tests).
Comedogenic Rating Scale:
- 0: Completely non-comedogenic (will not clog pores)
- 1: Very low comedogenicity (safe for almost all skin)
- 2: Moderately low (mostly safe, can occasionally trigger very congested acne-prone skin)
- 3: Moderate comedogenicity (likely to cause micro-comedones in acne-prone individuals)
- 4: High comedogenicity (well-known pore-clogger, avoid on acne-prone faces)
- 5: Maximum comedogenicity (extreme pore-clogging waxy ester or oil; severe breakout risk)

Key Comedogenic Flags:
- Rating 5: Isopropyl Myristate, Isopropyl Isostearate, Myristyl Myristate, Wheat Germ Oil, Laureth-4, Sodium Chloride (in emulsions), Potassium Chloride, Algae Extract / Carrageenan / Chondrus Crispus.
- Rating 4: Isopropyl Palmitate, Coconut Oil (Cocos Nucifera), Cocoa Butter (Theobroma Cacao), Acetylated Lanolin, Ethylhexyl Palmitate, Polyglyceryl-3 Diisostearate, Oleyl Alcohol, Steareth-10.
- Rating 3: Myristic Acid, Glycine Soja (Soybean) Oil, Corn Oil, Sesame Oil, Avocado Oil.

Key Irritant & Barrier Stripping Flags:
- Harsh Surfactants: Sodium Lauryl Sulfate (SLS), Sodium Laureth Sulfate (SLES), Ammonium Lauryl Sulfate.
- Drying Alcohols: Alcohol Denat, Denatured Alcohol, SD Alcohol 40, Isopropyl Alcohol (note: do NOT flag fatty conditioning alcohols like Cetearyl Alcohol or Cetyl Alcohol as drying; they are gentle emollients).
- Common Sensitizers & Allergens: Fragrance/Parfum, Limonene, Linalool, Eugenol, Citral, Geraniol, Cinnamal, Oakmoss, and high-potency volatile Essential Oils (Lavender, Citrus, Eucalyptus, Peppermint).
- Harsh Preservatives: Methylisothiazolinone (MIT), DMDM Hydantoin, Diazolidinyl Urea, Quaternium-15.

Key Nourishing / Safe Actives (Status: 'safe'):
- Squalane, Hyaluronic Acid (Sodium Hyaluronate), Glycerin, Niacinamide, Centella Asiatica, Madecassoside, Ceramides, Panthenol, Allantoin, Aloe Vera, Jojoba Oil (1-2), Green Tea (Camellia Sinensis), Colloidal Oatmeal, Zinc Oxide.

For EACH individual ingredient parsed from the input, return an object with its clinical verdict.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Please perform a complete, clinically accurate dermatological audit for this skincare ingredient list:\n\n${ingredients}`,
      config: {
        systemInstruction,
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallVerdict: { type: Type.STRING },
            summary: { type: Type.STRING },
            poreCloggingRisk: { type: Type.STRING },
            irritationRisk: { type: Type.STRING },
            skinTypeSuitability: {
              type: Type.OBJECT,
              properties: {
                acneProne: { type: Type.BOOLEAN },
                sensitive: { type: Type.BOOLEAN },
                drySkin: { type: Type.BOOLEAN },
                oilySkin: { type: Type.BOOLEAN },
              },
              required: ['acneProne', 'sensitive', 'drySkin', 'oilySkin'],
            },
            ingredients: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  inciName: { type: Type.STRING },
                  status: { type: Type.STRING },
                  comedogenicRating: { type: Type.INTEGER },
                  irritancyRating: { type: Type.INTEGER },
                  category: { type: Type.STRING },
                  concerns: { type: Type.ARRAY, items: { type: Type.STRING } },
                  benefit: { type: Type.STRING },
                  recommendation: { type: Type.STRING },
                },
                required: ['name', 'status', 'comedogenicRating', 'irritancyRating', 'category', 'concerns', 'recommendation'],
              },
            },
            estheticianAdvice: { type: Type.STRING },
          },
          required: [
            'overallVerdict',
            'summary',
            'poreCloggingRisk',
            'irritationRisk',
            'skinTypeSuitability',
            'ingredients',
            'estheticianAdvice',
          ],
        },
      },
    });

    const parsedData = JSON.parse(response.text || '{}');
    if (parsedData.ingredients && parsedData.ingredients.length > 0) {
      return res.json(parsedData);
    }
    throw new Error('Incomplete model payload');
  } catch (error: any) {
    console.warn('Gemini model unavailable or high demand. Using clinical rule engine fallback:', error.message);
    const ruleAudit = buildRuleBasedAudit(ingredients);
    return res.json(ruleAudit);
  }
});

// Setup Vite middleware for local development, or serve static build
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Esthetics by Clare Server running on port ${port} (mode: ${isProduction ? 'prod' : 'dev'})`);
  });
}

startServer();
