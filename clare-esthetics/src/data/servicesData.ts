import { Service } from '../lib/firebase';

export const CLARE_SERVICES: Service[] = [
  {
    id: 'brow-full-package',
    name: 'Brow full package: Lamination + Shaping + Tint',
    category: 'Brows & Lashes',
    duration: 60,
    price: 115,
    description: 'The complete brow transformation. Includes lamination to set hairs in a fuller, lifted direction, precision mapping and shaping, and custom tinting for defined, polished arches.',
    imageUrl: '/assets/aistudio/IG_8.12.2025_689bb2d274f331.68074535_d52ef2ff.jpg'
  },
  {
    id: 'lash-package',
    name: 'Lash Package: Lift + tint',
    category: 'Brows & Lashes',
    duration: 60,
    price: 110,
    description: 'Enhances your natural lashes with a gentle lifting curl from the root paired with deep, rich tinting for a wide-awake, mascara-free look lasting 6-8 weeks.',
    imageUrl: '/assets/aistudio/2025-08-12_14-25-57_1755034430_d700397c.webp?v=centered'
  },
  {
    id: 'brow-lamination-shape',
    name: 'Brow lamination and shape',
    category: 'Brows & Lashes',
    duration: 45,
    price: 85,
    description: 'Restructures and relaxes brow hairs so they can be brushed into a full, feathered upward style, finished with customized precision shaping.',
    imageUrl: '/src/assets/images/brow_lamination_lashes_1792717028844.jpg'
  },
  {
    id: 'brow-shape-tint',
    name: 'Brow shape and tint',
    category: 'Brows & Lashes',
    duration: 30,
    price: 55,
    description: 'Meticulous brow mapping, waxing, and tweezing tailored to your facial symmetry, paired with custom-formulated color tinting for effortless depth.',
    imageUrl: '/src/assets/images/brow_lamination_lashes_1792717028844.jpg'
  },
  {
    id: 'brow-shape',
    name: 'Brow shape',
    category: 'Brows & Lashes',
    duration: 20,
    price: 35,
    description: 'Clean, refined brow sculpting designed around your facial structure using sensitive-skin wax and detailed tweezing.',
    imageUrl: '/src/assets/images/brow_lamination_lashes_1792717028844.jpg'
  },
  {
    id: 'full-body-waxing',
    name: 'Full body waxing',
    category: 'Waxing',
    duration: 75,
    price: 185,
    description: 'Complete full body hair removal using soothing botanical waxes formulated to minimize redness and discomfort, leaving your skin silky smooth and nourished.',
    imageUrl: '/src/assets/images/body_waxing_spa_1792717076562.jpg'
  },
  {
    id: 'signature-facial',
    name: 'Signature facial',
    category: 'Facials & Advanced Skin',
    duration: 60,
    price: 145,
    description: 'A fully customized 60-minute facial designed around your skin and your goals. We’ll address concerns like breakouts, congestion, sensitivity, or aging with targeted treatment and thoughtful product selection. Includes a double cleanse, corrective treatment, extractions (if needed), facial massage, customized mask, neck and shoulder massage, LED (if time allows), and finishing products tailored to your skin. You’ll leave refreshed, balanced, and glowing.',
    imageUrl: '/src/assets/images/service_botanical_glow_1792598042305.jpg'
  },
  {
    id: 'silk-infusion-facial',
    name: 'The Silk Infusion Facial',
    category: 'Facials & Advanced Skin',
    duration: 60,
    price: 180,
    description: 'A results-driven nano infusion facial designed to boost absorption and visibly improve your skin’s texture and tone. This treatment allows targeted serums to penetrate more effectively, helping address concerns like fine lines, dullness, acne, and uneven skin. Includes a double cleanse, exfoliation, extractions (if needed), nano infusion with customized serums, facial massage, mask, neck and shoulder massage, LED therapy, and finishing products selected for your skin. Expect smoother, brighter, more refined skin with little to no downtime.',
    imageUrl: '/src/assets/images/nano_infusion_facial_1792717052832.jpg'
  },
  {
    id: 'dermaplane-facial',
    name: 'Dermaplane Facial',
    category: 'Facials & Advanced Skin',
    duration: 30,
    price: 95,
    description: 'This 30-minute facial includes dermaplaning to remove dead skin buildup and peach fuzz, followed by a gentle enzyme to further exfoliate and brighten. Extractions are performed if needed, and finishing products are applied to calm and protect the skin. This is not a relaxation-based facial — it’s all about creating a smoother canvas and improving product penetration. Dermaplaning can also be added onto any 60-minute facial if you’d like the best of both results and relaxation.',
    imageUrl: '/src/assets/images/dermaplane_treatment_1792717041325.jpg'
  },
  {
    id: 'skin-perfecting-procell',
    name: 'The Skin Perfecting Facial: ProCell Microchanneling',
    category: 'Facials & Advanced Skin',
    duration: 75,
    price: 275,
    description: 'A corrective, collagen-stimulating treatment designed to improve skin tone, texture, acne scarring, and early signs of aging. This treatment uses professional microchanneling with a .25mm tip to safely create controlled microchannels in the skin, allowing growth-factor serums to penetrate where they’re most effective. Your appointment includes a double cleanse, full-face microchanneling with targeted cell renewal serums, and LED therapy to calm the skin and support healing. This is a results-focused treatment with minimal downtime and a series is recommended for best results.',
    imageUrl: '/src/assets/images/procell_microchannel_1792717064945.jpg'
  }
];
