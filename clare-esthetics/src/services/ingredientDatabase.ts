export interface IngredientProfile {
  canonicalName: string;
  aliases: string[];
  status: 'problematic' | 'caution' | 'safe' | 'neutral';
  comedogenicRating: number; // 0 (non-comedogenic) to 5 (extreme pore-clogger)
  irritancyRating: number; // 0 (non-irritating) to 5 (severe irritant)
  category: string;
  concerns: string[];
  benefit?: string;
  recommendation: string;
}

export const INGREDIENT_DICTIONARY: IngredientProfile[] = [
  // ==========================================
  // HIGH COMEDOGENIC (RATINGS 4 - 5) - PORE CLOGGERS
  // ==========================================
  {
    canonicalName: 'Isopropyl Myristate',
    aliases: ['isopropyl myristate'],
    status: 'problematic',
    comedogenicRating: 5,
    irritancyRating: 1,
    category: 'High-Comedogenic Ester',
    concerns: ['Maximum Comedogenic Index (5/5)', 'Proven trigger for persistent closed comedones, blackheads, and follicular inflammation'],
    recommendation: 'Strictly avoid if prone to acne or congestion. Substitute with 100% plant Squalane or Caprylic/Capric Triglyceride.'
  },
  {
    canonicalName: 'Myristyl Myristate',
    aliases: ['myristyl myristate'],
    status: 'problematic',
    comedogenicRating: 5,
    irritancyRating: 1,
    category: 'High-Comedogenic Wax',
    concerns: ['Extreme Comedogenicity (5/5)', 'Heavily binds sebum inside the follicular infundibulum'],
    recommendation: 'Replace with multi-molecular Hyaluronic Acid or light Ceramide lotions.'
  },
  {
    canonicalName: 'Isopropyl Isostearate',
    aliases: ['isopropyl isostearate'],
    status: 'problematic',
    comedogenicRating: 5,
    irritancyRating: 0,
    category: 'High-Comedogenic Ester',
    concerns: ['Comedogenic Rating 5/5', 'Common hidden cause of recurring breakouts in rich face creams'],
    recommendation: 'Choose water-gel hydrators with Tremella mushroom or Betaine.'
  },
  {
    canonicalName: 'Wheat Germ Oil',
    aliases: ['wheat germ oil', 'triticum vulgare germ oil'],
    status: 'problematic',
    comedogenicRating: 5,
    irritancyRating: 2,
    category: 'Heavy Occlusive Oil',
    concerns: ['Maximum Comedogenicity (5/5)', 'Heavy lipid chain that rapidly occludes pores on facial skin'],
    recommendation: 'Use pure Tocopherol (Vitamin E) in a Squalane or Jojoba carrier instead.'
  },
  {
    canonicalName: 'Laureth-4',
    aliases: ['laureth-4', 'laureth 4'],
    status: 'problematic',
    comedogenicRating: 5,
    irritancyRating: 4,
    category: 'Comedogenic Emulsifier',
    concerns: ['Extreme Comedogenic Score (5/5)', 'High contact irritation potential'],
    recommendation: 'Look for gentle non-ionic emulsifiers like Polyglyceryl-4 Caprate or Cetearyl Olivate.'
  },
  {
    canonicalName: 'Algae Extract',
    aliases: ['algae extract', 'spirulina extract', 'laminaria saccharina', 'chondrus crispus', 'carrageenan', 'carrageenan extract', 'algin'],
    status: 'problematic',
    comedogenicRating: 5,
    irritancyRating: 1,
    category: 'Marine Extract / Thickener',
    concerns: ['Comedogenic Score 4-5/5 due to sulfur and mineral binding properties that aggravate cystic acne'],
    recommendation: 'Choose Snow Mushroom (Tremella Fuciformis) or Centella Asiatica for non-comedogenic plumping.'
  },
  {
    canonicalName: 'Coconut Oil',
    aliases: ['coconut oil', 'cocos nucifera oil', 'cocos nucifera', 'hydrogenated coconut oil'],
    status: 'problematic',
    comedogenicRating: 4,
    irritancyRating: 1,
    category: 'Heavy Saturated Lipid',
    concerns: ['Comedogenic Index 4/5', 'Rich in lauric acid which solidifies inside pores, triggering stubborn bumps'],
    recommendation: 'Ideal for hair and body, but strictly avoid on acne-prone faces. Use Rosehip or Jojoba oil instead.'
  },
  {
    canonicalName: 'Isopropyl Palmitate',
    aliases: ['isopropyl palmitate'],
    status: 'problematic',
    comedogenicRating: 4,
    irritancyRating: 1,
    category: 'Comedogenic Ester',
    concerns: ['Comedogenic Score 4/5', 'Causes follicular plugging and keranocyte aggregation'],
    recommendation: 'Opt for cold-pressed Jojoba oil or Squalane.'
  },
  {
    canonicalName: 'Cocoa Butter',
    aliases: ['cocoa butter', 'theobroma cacao seed butter', 'theobroma cacao butter', 'theobroma cacao'],
    status: 'caution',
    comedogenicRating: 4,
    irritancyRating: 0,
    category: 'Heavy Occlusive Butter',
    concerns: ['Comedogenic Index 4/5', 'Solid occlusive lipid that congests combination and acne-prone skin'],
    recommendation: 'Substitute with unrefined Shea Butter (Comedogenic 0-1) or Mango Butter.'
  },
  {
    canonicalName: 'Ethylhexyl Palmitate',
    aliases: ['ethylhexyl palmitate', 'octyl palmitate'],
    status: 'problematic',
    comedogenicRating: 4,
    irritancyRating: 1,
    category: 'Pore-Clogging Emollient',
    concerns: ['Comedogenic Index 4/5', 'Frequently hidden in cleansing balms, cushions, and liquid foundations, leading to persistent breakout clusters'],
    recommendation: 'Look for cleansing balms formulated with Squalane or PEG-20 Glyceryl Triisostearate.'
  },
  {
    canonicalName: 'Acetylated Lanolin',
    aliases: ['acetylated lanolin', 'acetylated lanolin alcohol'],
    status: 'problematic',
    comedogenicRating: 4,
    irritancyRating: 2,
    category: 'Animal Lipid Derivative',
    concerns: ['Comedogenic Score 4/5', 'Known allergen and strong pore occlusive'],
    recommendation: 'Use vegan phytosterols or plant ceramides.'
  },
  {
    canonicalName: 'Polyglyceryl-3 Diisostearate',
    aliases: ['polyglyceryl-3 diisostearate', 'polyglyceryl 3 diisostearate'],
    status: 'caution',
    comedogenicRating: 4,
    irritancyRating: 0,
    category: 'Heavy Emulsifier',
    concerns: ['Comedogenic Index 4/5', 'Can cause congestion in leave-on makeup and heavy creams'],
    recommendation: 'Choose lighter polyglyceryl esters like Polyglyceryl-10 Laurate.'
  },
  {
    canonicalName: 'Oleyl Alcohol',
    aliases: ['oleyl alcohol'],
    status: 'caution',
    comedogenicRating: 4,
    irritancyRating: 2,
    category: 'Unsaturated Fatty Alcohol',
    concerns: ['Comedogenic Score 4/5', 'Oleic fatty structure promotes comedone formation'],
    recommendation: 'Use gentle saturated conditioning fatty alcohols like Cetearyl Alcohol or Behenyl Alcohol.'
  },
  {
    canonicalName: 'Steareth-10',
    aliases: ['steareth-10', 'steareth 10'],
    status: 'caution',
    comedogenicRating: 4,
    irritancyRating: 1,
    category: 'Emulsifying Surfactant',
    concerns: ['Comedogenic Index 4/5'],
    recommendation: 'Choose Steareth-21 or gentle sugar-based emulsifiers.'
  },

  // ==========================================
  // HARSH STRIPPING DETERGENTS & DRYING ALCOHOLS
  // ==========================================
  {
    canonicalName: 'Sodium Lauryl Sulfate (SLS)',
    aliases: ['sodium lauryl sulfate', 'sls'],
    status: 'problematic',
    comedogenicRating: 0,
    irritancyRating: 5,
    category: 'Harsh Anionic Detergent',
    concerns: ['Maximum Irritancy Index (5/5)', 'Strips intercellular lipid matrix, inducing severe barrier damage and transepidermal water loss'],
    recommendation: 'Switch immediately to ultra-gentle glucosides (Coco-Glucoside, Decyl Glucoside) or amino-acid cleansers.'
  },
  {
    canonicalName: 'Sodium Laureth Sulfate (SLES)',
    aliases: ['sodium laureth sulfate', 'sles'],
    status: 'caution',
    comedogenicRating: 0,
    irritancyRating: 3,
    category: 'Cleansing Surfactant',
    concerns: ['Irritancy Index 3/5', 'Can be stripping on dry, sensitized, or barrier-impaired skin'],
    recommendation: 'Choose sulfate-free cream or gel cleansers.'
  },
  {
    canonicalName: 'Denatured Alcohol',
    aliases: ['alcohol denat', 'alcohol denat.', 'denatured alcohol', 'sd alcohol', 'sd alcohol 40', 'sd alcohol 40-b', 'isopropyl alcohol'],
    status: 'problematic',
    comedogenicRating: 0,
    irritancyRating: 4,
    category: 'Volatile Drying Alcohol',
    concerns: ['Dissolves essential protective sebum and intercellular lipids', 'Triggers acute micro-fissures and rebound sebum hyper-production'],
    recommendation: 'Do NOT confuse with beneficial fatty alcohols (Cetearyl, Cetyl). Seek alcohol-free calming essences.'
  },
  {
    canonicalName: 'Methylisothiazolinone (MIT / MI)',
    aliases: ['methylisothiazolinone', 'methylchloroisothiazolinone', 'kathon'],
    status: 'problematic',
    comedogenicRating: 0,
    irritancyRating: 5,
    category: 'Harsh Preservative',
    concerns: ['Recognized as the primary cause of cosmetic contact eczema in the EU; banned in leave-on skincare'],
    recommendation: 'Use clean preservation systems like Ethylhexylglycerin or Potassium Sorbate.'
  },
  {
    canonicalName: 'DMDM Hydantoin',
    aliases: ['dmdm hydantoin', 'diazolidinyl urea', 'imidazolidinyl urea', 'quaternium-15'],
    status: 'problematic',
    comedogenicRating: 0,
    irritancyRating: 4,
    category: 'Formaldehyde-Releaser',
    concerns: ['Slowly releases formaldehyde in solution, inducing burning and severe allergic reactions in sensitive skin'],
    recommendation: 'Opt for modern gentle preservative blends.'
  },

  // ==========================================
  // FRAGRANCES, TERPENES & SENSITIZERS
  // ==========================================
  {
    canonicalName: 'Synthetic Fragrance / Parfum',
    aliases: ['fragrance', 'parfum', 'aroma'],
    status: 'caution',
    comedogenicRating: 0,
    irritancyRating: 4,
    category: 'Sensitizing Aroma Compound',
    concerns: ['#1 cause of cosmetic contact dermatitis', 'Contains undisclosed cocktails of volatile compounds that trigger rosacea and inflammation'],
    recommendation: 'Choose 100% Fragrance-Free (unmasked) products, especially for redness or acne.'
  },
  {
    canonicalName: 'Limonene',
    aliases: ['limonene', 'd-limonene'],
    status: 'caution',
    comedogenicRating: 0,
    irritancyRating: 3,
    category: 'Oxidizing Citrus Terpene',
    concerns: ['Easily auto-oxidizes when exposed to air, becoming a potent contact allergen'],
    recommendation: 'Avoid citrus terpenes on broken or acne-lesioned skin.'
  },
  {
    canonicalName: 'Linalool',
    aliases: ['linalool'],
    status: 'caution',
    comedogenicRating: 0,
    irritancyRating: 3,
    category: 'Fragrance Allergen',
    concerns: ['Documented contact allergen that compromises reactive barrier function'],
    recommendation: 'Choose soothing unperfumed botanicals like Centella or Oat.'
  },
  {
    canonicalName: 'Eugenol',
    aliases: ['eugenol', 'isoeugenol'],
    status: 'caution',
    comedogenicRating: 0,
    irritancyRating: 4,
    category: 'Spiced Fragrance Allergen',
    concerns: ['High allergen score on European Contact Dermatitis standards'],
    recommendation: 'Avoid spiced aromatic extracts in facial products.'
  },
  {
    canonicalName: 'Essential Oils (Citrus/Lavender/Mint)',
    aliases: ['lavandula angustifolia', 'lavender oil', 'melaleuca alternifolia', 'tea tree oil', 'peppermint oil', 'mentha piperita', 'citrus limon', 'eucalyptus globulus'],
    status: 'caution',
    comedogenicRating: 1,
    irritancyRating: 3,
    category: 'Volatile Essential Oil',
    concerns: ['High volatility can disrupt the microbiome and irritate sensitive or rosacea-prone skin'],
    recommendation: 'Choose cold-pressed carrier oils without aromatic essential oil additives.'
  },

  // ==========================================
  // MODERATE COMEDOGENIC OILS & WAXES (RATING 2-3)
  // ==========================================
  {
    canonicalName: 'Avocado Oil',
    aliases: ['avocado oil', 'persea gratissima oil', 'persea gratissima'],
    status: 'caution',
    comedogenicRating: 3,
    irritancyRating: 0,
    category: 'Rich Nutrient Oil',
    concerns: ['Comedogenic Rating 2-3/5', 'Great for deeply dehydrated dry skin, but can trigger congestion in acne-prone T-zones'],
    recommendation: 'Use on dry neck and décolleté or body; acne-prone skin should prefer Squalane or Rosehip.'
  },
  {
    canonicalName: 'Soybean Oil',
    aliases: ['glycine soja oil', 'soybean oil', 'glycine soja'],
    status: 'caution',
    comedogenicRating: 3,
    irritancyRating: 0,
    category: 'High-Oleic Lipid',
    concerns: ['Comedogenic Score 3/5', 'May clog pores for congested skin types'],
    recommendation: 'Look for lightweight non-comedogenic antioxidants.'
  },
  {
    canonicalName: 'Sesame Oil',
    aliases: ['sesame oil', 'sesamum indicum'],
    status: 'caution',
    comedogenicRating: 2,
    irritancyRating: 0,
    category: 'Nourishing Seed Oil',
    concerns: ['Comedogenic Score 2/5; moderate risk of micro-congestion in pore-prone skin'],
    recommendation: 'Use cold-pressed Jojoba or Argan oil.'
  },
  {
    canonicalName: 'Sweet Almond Oil',
    aliases: ['sweet almond oil', 'prunus amygdalus dulcis oil', 'prunus amygdalus'],
    status: 'caution',
    comedogenicRating: 2,
    irritancyRating: 0,
    category: 'Emollient Nut Oil',
    concerns: ['Comedogenic Rating 2/5; safe for dry skin, caution for active breakouts'],
    recommendation: 'Great for gentle body hydration or non-acneic skin.'
  },
  {
    canonicalName: 'Stearic Acid',
    aliases: ['stearic acid'],
    status: 'caution',
    comedogenicRating: 2,
    irritancyRating: 0,
    category: 'Fatty Acid Emulsifier',
    concerns: ['Comedogenic Rating 2/5; can contribute to waxy pore accumulation when combined with other heavy lipids'],
    recommendation: 'Check that it is paired with light, non-pore clogging humectants.'
  },
  {
    canonicalName: 'Palmitic Acid',
    aliases: ['palmitic acid'],
    status: 'caution',
    comedogenicRating: 2,
    irritancyRating: 0,
    category: 'Fatty Acid Emollient',
    concerns: ['Comedogenic Rating 2/5; mild pore-clogging potential in rich creams'],
    recommendation: 'Acceptable in balanced cleansers where rinsed off.'
  },
  {
    canonicalName: 'Cetyl Alcohol',
    aliases: ['cetyl alcohol'],
    status: 'neutral',
    comedogenicRating: 2,
    irritancyRating: 0,
    category: 'Fatty Conditioning Alcohol',
    concerns: ['Mild comedogenic potential (2/5) in leave-on creams; NOT a drying alcohol'],
    benefit: 'Softens skin and stabilizes emulsions without drying',
    recommendation: 'Generally well-tolerated unless severely acne-prone.'
  },
  {
    canonicalName: 'Cetearyl Alcohol',
    aliases: ['cetearyl alcohol'],
    status: 'neutral',
    comedogenicRating: 2,
    irritancyRating: 0,
    category: 'Fatty Emollient Alcohol',
    concerns: ['Mild comedogenicity (2/5) alone; note that Cetearyl Alcohol + Ceteareth-20 combo is comedogenic (4/5)'],
    benefit: 'Provides velvety moisture and prevents water loss',
    recommendation: 'Safe for most skin; avoid when formulated with Ceteareth-20 if acne-prone.'
  },
  {
    canonicalName: 'Triethanolamine (TEA)',
    aliases: ['triethanolamine', 'tea'],
    status: 'caution',
    comedogenicRating: 2,
    irritancyRating: 2,
    category: 'pH Adjuster / Emulsifier',
    concerns: ['Can form nitrosamines when combined with specific nitrogen donors; mild comedogenic potential'],
    recommendation: 'Look for citric acid or sodium hydroxide as cleaner pH balancers.'
  },

  // ==========================================
  // SAFE, NOURISHING & NON-COMEDOGENIC (RATINGS 0 - 1)
  // ==========================================
  {
    canonicalName: 'Water / Aqua',
    aliases: ['water', 'aqua', 'eau', 'purified water', 'deionized water'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Universal Solvent',
    concerns: [],
    benefit: 'Primary carrier for hydrophilic skin actives and cellular hydration',
    recommendation: 'Completely clean and non-comedogenic.'
  },
  {
    canonicalName: 'Squalane (Plant-Derived)',
    aliases: ['squalane', 'plant squalane', 'olive squalane', 'sugarcane squalane'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Biomimetic Lipid',
    concerns: [],
    benefit: '100% bio-compatible with natural human sebum. Locks in deep hydration without suffocating follicles',
    recommendation: 'The gold standard oil for all skin types, including congested and acne-prone.'
  },
  {
    canonicalName: 'Glycerin',
    aliases: ['glycerin', 'glycerol'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Master Humectant',
    concerns: [],
    benefit: 'Draws moisture from humidity into the skin matrix, reinforcing the stratum corneum',
    recommendation: 'Essential clean humectant for healthy barrier function.'
  },
  {
    canonicalName: 'Niacinamide (Vitamin B3)',
    aliases: ['niacinamide', 'nicotinamide'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Restorative Active',
    concerns: [],
    benefit: 'Normalizes sebum production, refines pore texture, and strengthens ceramide synthesis',
    recommendation: 'Superb active for both acne and skin barrier repair.'
  },
  {
    canonicalName: 'Sodium Hyaluronate',
    aliases: ['sodium hyaluronate', 'hyaluronic acid', 'hydrolyzed hyaluronic acid', 'sodium acetylated hyaluronate'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Plumping Humectant',
    concerns: [],
    benefit: 'Holds up to 1000x its molecular weight in water, intensely plumping skin without oil',
    recommendation: 'Ideal non-comedogenic hydrator.'
  },
  {
    canonicalName: 'Centella Asiatica (Cica / Gotu Kola)',
    aliases: ['centella asiatica', 'centella asiatica extract', 'cica', 'madecassoside', 'asiaticoside', 'madecassic acid', 'asiatic acid'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Anti-Inflammatory Botanical',
    concerns: [],
    benefit: 'Clinically proven to repair wounded barriers, suppress redness, and speed micro-healing',
    recommendation: 'Holy grail botanical for sensitive, acne-prone, or rosacea-affected skin.'
  },
  {
    canonicalName: 'Panthenol (Pro-Vitamin B5)',
    aliases: ['panthenol', 'd-panthenol', 'provitamin b5'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Barrier Repair Active',
    concerns: [],
    benefit: 'Penetrates deeply to accelerate cellular regeneration and soothe irritation',
    recommendation: 'Top-tier restorative active for compromised barriers.'
  },
  {
    canonicalName: 'Ceramide NP',
    aliases: ['ceramide np', 'ceramide ap', 'ceramide eop', 'ceramides', 'phytosphingosine'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Skin-Identical Lipid',
    concerns: [],
    benefit: 'Replaces the natural intercellular mortar of the lipid barrier, preventing moisture loss',
    recommendation: 'Essential for dry, irritated, and sensitized skin.'
  },
  {
    canonicalName: 'Green Tea Extract',
    aliases: ['camellia sinensis', 'camellia sinensis leaf extract', 'green tea extract'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Antioxidant Botanical',
    concerns: [],
    benefit: 'Rich in EGCG polyphenols that reduce sebum oxidization and combat acne-causing bacteria',
    recommendation: 'Exceptional botanical protection for clear, radiant skin.'
  },
  {
    canonicalName: 'Jojoba Seed Oil',
    aliases: ['simmondsia chinensis', 'jojoba seed oil', 'jojoba oil', 'simmondsia chinensis seed oil'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Liquid Wax Ester',
    concerns: [],
    benefit: 'Mimics human sebum chemistry, helping balance overactive oil glands without congestion',
    recommendation: 'One of the safest, most stable plant lipids for facial use.'
  },
  {
    canonicalName: 'Shea Butter',
    aliases: ['butyrospermum parkii', 'butyrospermum parkii butter', 'shea butter'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Nourishing Plant Butter',
    concerns: [],
    benefit: 'Rich in stearic and oleic fatty acids with an ultra-low comedogenic rating (0-1). Intensely protects dry skin',
    recommendation: 'Far safer for the face than Cocoa Butter or Coconut Oil.'
  },
  {
    canonicalName: 'Allantoin',
    aliases: ['allantoin'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Cellular Soothing Active',
    concerns: [],
    benefit: 'Gently desquamates dead surface cells while soothing micro-inflammation',
    recommendation: 'Gentle, comforting active for reactive skin.'
  },
  {
    canonicalName: 'Aloe Vera',
    aliases: ['aloe barbadensis', 'aloe barbadensis leaf juice', 'aloe vera'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Soothing Humectant',
    concerns: [],
    benefit: 'High in polysaccharides and glycoproteins that calm burns, heat, and irritation',
    recommendation: 'Classic soothing natural extract.'
  },
  {
    canonicalName: 'Colloidal Oatmeal',
    aliases: ['colloidal oatmeal', 'avena sativa', 'avena sativa kernel extract'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Barrier Protecting Botanical',
    concerns: [],
    benefit: 'FDA-recognized skin protectant that relieves itching, erythema, and eczema symptoms',
    recommendation: 'Superb for inflamed, stressed barriers.'
  },
  {
    canonicalName: 'Rosehip Seed Oil',
    aliases: ['rosa canina', 'rosehip seed oil', 'rosa canina fruit oil', 'rosa rubiginosa'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'High-Linoleic Oil',
    concerns: [],
    benefit: 'High in linoleic acid and natural trans-retinoic acid, fading hyperpigmentation without clogging pores',
    recommendation: 'Excellent regenerative oil for blemish-prone and aging skin.'
  },
  {
    canonicalName: 'Argan Oil',
    aliases: ['argania spinosa', 'argan oil', 'argania spinosa kernel oil'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Non-Comedogenic Oil',
    concerns: [],
    benefit: 'Rated 0 on the comedogenic scale. Rich in squalene and vitamin E',
    recommendation: 'Safe nourishing lipid for face and neck.'
  },
  {
    canonicalName: 'Zinc Oxide',
    aliases: ['zinc oxide'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Mineral Protectant / Sunscreen',
    concerns: [],
    benefit: 'Broad-spectrum mineral UV shield with potent anti-microbial and anti-inflammatory properties',
    recommendation: 'The cleanest, most anti-inflammatory sun protection available.'
  },
  {
    canonicalName: 'Titanium Dioxide',
    aliases: ['titanium dioxide'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Mineral UV Filter',
    concerns: [],
    benefit: 'Non-irritating, inert mineral shield protecting against UVB and short UVA rays',
    recommendation: 'Gentle on sensitized barriers.'
  },
  {
    canonicalName: 'Dimethicone',
    aliases: ['dimethicone', 'polydimethylsiloxane'],
    status: 'neutral',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Breathable Silicone Barrier',
    concerns: ['Forms a silky film; can trap sebum if skin is not thoroughly cleansed at night'],
    benefit: 'Protects from transepidermal water loss through large, breathable molecular lattice',
    recommendation: 'Non-comedogenic (rated 1/5); cleanse properly in evening routines.'
  },
  {
    canonicalName: 'Cyclopentasiloxane',
    aliases: ['cyclopentasiloxane', 'd5'],
    status: 'neutral',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Volatile Silicone',
    concerns: [],
    benefit: 'Evaporates after application, leaving weightless finish without pore obstruction',
    recommendation: 'Safe non-comedogenic slip agent.'
  },
  {
    canonicalName: 'Butylene Glycol',
    aliases: ['butylene glycol', '1,3-butylene glycol'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Light Humectant & Solvent',
    concerns: [],
    benefit: 'Boosts active penetration and holds water with virtually no pore-clogging risk',
    recommendation: 'Safe, versatile cosmetic vehicle.'
  },
  {
    canonicalName: 'Propanediol',
    aliases: ['propanediol', '1,3-propanediol'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Fermented Humectant',
    concerns: [],
    benefit: 'Corn-derived natural humectant with zero comedogenicity and antimicrobial boosting',
    recommendation: 'Gentle, modern alternative to propylene glycol.'
  },
  {
    canonicalName: 'Caprylic/Capric Triglyceride',
    aliases: ['caprylic/capric triglyceride', 'mct oil'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Fractionated Lipid',
    concerns: [],
    benefit: 'Fractionated fatty acid ester that provides silky emollience without the pore-clogging lauric acids of raw coconut oil',
    recommendation: 'Safe, non-congesting emollient.'
  },
  {
    canonicalName: 'Tocopherol (Vitamin E)',
    aliases: ['tocopherol', 'tocopheryl acetate', 'vitamin e'],
    status: 'safe',
    comedogenicRating: 1,
    irritancyRating: 0,
    category: 'Lipid Antioxidant',
    concerns: ['In very high concentrations, pure synthetic acetate can be mildly rich (2/5)'],
    benefit: 'Prevents lipid peroxidation of natural sebum, neutralizing free radical cellular stress',
    recommendation: 'Essential protective skincare nutrient.'
  },
  {
    canonicalName: 'Coco-Glucoside',
    aliases: ['coco-glucoside', 'coco glucoside', 'decyl glucoside', 'lauryl glucoside'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 0,
    category: 'Gentle Sugar Surfactant',
    concerns: [],
    benefit: 'Ultra-mild non-ionic cleanser derived from coconut and fruit sugars. Preserves the acid mantle',
    recommendation: 'The gold standard cleanser base for clear skin.'
  },
  {
    canonicalName: 'Phenoxyethanol',
    aliases: ['phenoxyethanol'],
    status: 'neutral',
    comedogenicRating: 0,
    irritancyRating: 1,
    category: 'Safe Preservative',
    concerns: ['Regulated to under 1% in cosmetics; rarely sensitizing unless infant or allergic'],
    benefit: 'Broad-spectrum microbial protection preventing harmful bacterial growth in water-based cosmetics',
    recommendation: 'Recognized as one of the safest modern cosmetic preservatives.'
  },
  {
    canonicalName: 'Salicylic Acid (BHA)',
    aliases: ['salicylic acid'],
    status: 'safe',
    comedogenicRating: 0,
    irritancyRating: 2,
    category: 'Exfoliating Beta Hydroxy Acid',
    concerns: ['Can cause peeling if overused; caution on severely dry or windburned skin'],
    benefit: 'Oil-soluble acid that penetrates deep into sebum-filled follicles to dissolve keranocyte plugs and blackheads',
    recommendation: 'Benchmark active for pore purification and acne control.'
  }
];

export function lookupIngredient(rawName: string): IngredientProfile | null {
  const clean = rawName.toLowerCase().trim();
  if (!clean || clean.length < 2) return null;

  // 1. Exact match on aliases
  for (const item of INGREDIENT_DICTIONARY) {
    for (const alias of item.aliases) {
      if (clean === alias) return item;
    }
  }

  // 2. Substring or word-boundary match
  for (const item of INGREDIENT_DICTIONARY) {
    for (const alias of item.aliases) {
      if (clean.includes(alias) || alias.includes(clean)) {
        return item;
      }
    }
  }

  return null;
}
