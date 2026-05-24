import nightExpressGoldImage from '../assets/night_express_gold.png';
import orthoRollOnImage from '../assets/roll_on.png';
import shilajitCapsulesImage from '../assets/shilajit.png';
import ashwagandhaCapsulesImage from '../assets/ashwagandha.png';
import painBalmImage from '../assets/pain_balm.png';
import marineCollagenImage from '../assets/marine_collagen.png';
import multivitaminMenImage from '../assets/multivitamin_men.png';
import multivitaminWomenImage from '../assets/multivitamin_women.png';
import probioticImage from '../assets/probiotic_capsules.png';
import redPowerPainBalmImage from '../assets/red_power.png';
import rollOnCreamImage from '../assets/roll_on_cream.png';
import shilajitLiquidImage from '../assets/shilajit_liquid.png';
import testoraisCapsulesImage from '../assets/testorais.png';
import spermatoHCapsulesImage from '../assets/spermato_h.png';

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    discountedPrice?: number;
    description: string;
    image: string;
    quantity: string;
    shelfLife: string;
    benefits: string[];
    isBestSeller?: boolean;
    isNew?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Night Express Gold Capsules",
        discountedPrice: 300,
        price: 500,
        category: "sexual",
        description:
            "Herbal vitality supplement formulated to support stamina, energy, and overall wellness for improved performance and confidence.",
        benefits: [
            "Supports stamina & vitality",
            "Boosts natural energy levels",
            "Helps reduce stress & fatigue",
            "Supports overall male wellness"
        ],
        quantity: "10 capsules",
        shelfLife: "24 months",
        image: nightExpressGoldImage,
        isBestSeller: true
    },
 {
        id: 2,
        name: "Wild Deer Testorais Capsules",
        price: 360,
        category: "sexual",
        description:
            "Herbal vitality supplement formulated to naturally support testosterone levels, stamina, strength, and male wellness.",
        benefits: [
            "Supports healthy testosterone levels",
            "Improves stamina & performance",
            "Enhances strength and energy",
            "Promotes overall male vitality"
        ],
        quantity: "30 capsules",
        shelfLife: "36 months",
        image: testoraisCapsulesImage,
        isBestSeller: true
    },

    {
        id: 3,
        name: "Himalayan Shilajit Capsules",
        price: 550,
        category: "stamina",
        discountedPrice: 450,
        description:
            "Premium Himalayan Shilajit capsules formulated to support strength, endurance, and overall vitality.",
        benefits: [
            "Improves stamina & strength",
            "Supports energy metabolism",
            "Enhances immunity",
            "Helps maintain overall wellness"
        ],
        quantity: "30 capsules",
        shelfLife: "24 months",
        image: shilajitCapsulesImage,
        isBestSeller: true
    },
    {
        id: 4,
        name: "Ortho Roll On",
        price: 150,
        category: "pain",
        discountedPrice: 130,
        description:
            "Fast-acting herbal roll-on designed to provide convenient relief from muscle stiffness, joint pain, and everyday body discomfort.",
        benefits: [
            "Relieves muscle & joint pain",
            "Reduces stiffness and soreness",
            "Quick absorption formula",
            "Easy roll-on application anytime"
        ],
        quantity: "50 ml",
        shelfLife: "36 months",
        image: orthoRollOnImage,
        isBestSeller: true
    },
    {
        id: 5,
        name: "Wild Deer Pain Balm",
        price: 50,
        category: "pain",
        description:
            "Herbal pain relief balm designed for fast soothing comfort from headaches, muscle pain, cold, and body aches.",
        benefits: [
            "Provides quick pain relief",
            "Relieves headache & body ache",
            "Helps ease cold & congestion",
            "Soothing herbal formulation"
        ],
        quantity: "10 ml",
        shelfLife: "36 months",
        image: painBalmImage,
        isBestSeller: true
    },
    {
        id: 6,
        name: "Wild Deer Red Power Pain Balm",
        price: 50,
        category: "pain",
        description:
            "Fast-acting herbal pain relief balm formulated to provide instant soothing comfort for headaches, muscle pain, joint stiffness, and cold-related discomfort.",
        benefits: [
            "Provides quick relief from muscle & joint pain",
            "Helps reduce headache and body ache",
            "Relieves cold, nasal congestion & stiffness",
            "Non-greasy herbal formulation for easy application"
        ],
        quantity: "10 ml",
        shelfLife: "36 months",
        image: redPowerPainBalmImage
    },
    {
        id: 7,
        name: "Wild Deer Roll On",
        price: 50,
        category: "pain",
        description:
            "Convenient herbal roll-on designed for targeted pain relief. Ideal for headaches, neck pain, muscle soreness, and stress relief anytime, anywhere.",
        benefits: [
            "Easy roll-on application",
            "Instant cooling & soothing sensation",
            "Helps relieve headache & muscle tension",
            "Portable and travel-friendly pain relief solution"
        ],
        quantity: "10 ml",
        shelfLife: "36 months",
        image: rollOnCreamImage
    },
    {
        id: 8,
        name: "Wild Deer Himalayan Shilajit Liquid",
        price: 800,
        category: "stamina",
        description:
            "Premium Himalayan Shilajit liquid enriched with natural minerals and fulvic acid to support stamina, strength, immunity, and overall vitality.",
        benefits: [
            "Boosts energy & physical endurance",
            "Supports male vitality & performance",
            "Improves strength and immunity",
            "Helps enhance overall wellness & recovery"
        ],
        quantity: "25 ml",
        shelfLife: "36 months",
        image: shilajitLiquidImage
    },
    {
        id: 9,
        name: "Ashwagandha Capsules",
        price: 200,
        category: "stamina",
        description:
            "Traditional Ayurvedic adaptogen known for promoting stress relief, better sleep, and balanced energy levels.",
        benefits: [
            "Helps manage stress",
            "Supports better sleep quality",
            "Improves energy & stamina",
            "Supports mental wellness"
        ],
        quantity: "60 capsules",
        shelfLife: "24 months",
        image: ashwagandhaCapsulesImage
    },

    {
        id: 10,
        name: "Wild Deer Spermato H Capsules",
        price: 420,
        category: "sexual",
        description:
            "Advanced herbal formulation designed to support male reproductive health, sperm quality, vitality, and overall wellness.",
        benefits: [
            "Supports sperm health & motility",
            "Promotes reproductive wellness",
            "Improves vitality & stamina",
            "Helps maintain hormonal balance"
        ],
        quantity: "30 capsules",
        shelfLife: "36 months",
        image: spermatoHCapsulesImage
    },
    {
        id: 11,
        name: "Multivitamin for Men",
        price: 400,
        category: "general",
        description:
            "Daily multivitamin supplement specially formulated for men to support energy, immunity, muscle health, and overall performance.",
        benefits: [
            "Boosts daily energy levels",
            "Supports immunity & metabolism",
            "Promotes muscle and heart health",
            "Helps reduce fatigue & stress"
        ],
        quantity: "30 capsules",
        shelfLife: "36 months",
        image: multivitaminMenImage,
        isNew: true
    },
    {
        id: 12,
        name: "Multivitamin for Women",
        price: 400,
        category: "general",
        description:
            "Complete multivitamin formula designed for women’s health, supporting immunity, skin health, hormonal balance, and daily nutrition.",
        benefits: [
            "Supports women’s nutritional needs",
            "Promotes healthy skin & hair",
            "Helps maintain energy & immunity",
            "Supports hormonal balance"
        ],
        quantity: "30 capsules",
        shelfLife: "36 months",
        image: multivitaminWomenImage,
        isNew: true
    },
    {
        id: 13,
        name: "Probiotic",
        price: 400,
        category: "general",
        description:
            "Daily probiotic supplement containing beneficial bacteria to support gut health, digestion, and immunity.",
        benefits: [
            "Improves digestion & gut balance",
            "Supports immune system health",
            "Helps reduce bloating & discomfort",
            "Promotes nutrient absorption"
        ],
        quantity: "30 capsules",
        shelfLife: "36 months",
        image: probioticImage,
        isNew: true
    },
    {
        id: 14,
        name: "Marine Collagen Capsules",
        price: 400,
        category: "general",
        description:
            "High-quality marine collagen supplement that supports skin elasticity, hair strength, joint health, and anti-aging benefits.",
        benefits: [
            "Improves skin elasticity & glow",
            "Supports hair & nail strength",
            "Promotes joint and bone health",
            "Helps reduce signs of aging"
        ],
        quantity: "30 capsules",
        shelfLife: "36 months",
        image: marineCollagenImage,
        isNew: true
    }
];