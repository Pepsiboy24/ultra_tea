/* ==========================================
   ULTRA TEA - PREMIUM JAVASCRIPT
   ========================================== */

// ==========================================
// PRODUCT DATA (9 Products)
// ==========================================
const products = [
    {
        id: 1,
        name: "Ultra Beauty Tea ",
        shortDesc: "Start your day with clarity and calm.",
        description: "A delicate blend of premium Japanese sencha leaves, harvested in early spring for maximum freshness. This tea offers a smooth, vegetal taste with subtle sweetness.",
        flavorNotes: "Grassy, Umami, Sweet",
        healthBenefits: [
            "Rich in catechins for enhanced metabolism",
            "Improves focus and mental clarity",
            "Supports cardiovascular health",
            "Contains L-theanine for calm alertness"
        ],
        nafdac: "",
        image: "./images/beauty.png"
    },
    {
        id: 2,
        name: "Ultra Chamomile Tea",
        shortDesc: "The perfect nighttime ritual for restful sleep.",
        description: "Hand-picked Egyptian chamomile flowers, sun-dried to perfection. A soothing caffeine-free infusion that promotes relaxation and peaceful sleep.",
        flavorNotes: "Floral, Honey, Apple",
        healthBenefits: [
            "Promotes deep, restful sleep",
            "Reduces anxiety and stress",
            "Soothes digestive discomfort",
            "Anti-inflammatory properties"
        ],
        nafdac: "",
        image: "./images/chamomile.png"
    },
    {
        id: 3,
        name: "Ultra Beetroot Tea",
        shortDesc: "A sophisticated blend with Italian bergamot.",
        description: "Premium Ceylon black tea infused with cold-pressed bergamot oil from Calabria. Blue cornflowers add an elegant visual touch to this timeless classic.",
        flavorNotes: "Citrus, Malty, Floral",
        healthBenefits: [
            "Boosts energy without jitters",
            "Supports gut health and digestion",
            "Rich in antioxidants",
            "May improve heart health"
        ],
        nafdac: "",
        image: "./images/beetroot.png"
    },
    {
        id: 4,
        name: "Ultra Black Seed Tea",
        shortDesc: "Warming spices from the roof of the world.",
        description: "A bold Assam base blended with organic cinnamon, cardamom, cloves, and fresh ginger. Traditionally crafted using recipes passed down through generations.",
        flavorNotes: "Spicy, Warm, Bold",
        healthBenefits: [
            "Aids digestion and reduces bloating",
            "Anti-inflammatory ginger compounds",
            "Regulates blood sugar levels",
            "Boosts immune system"
        ],
        nafdac: "",
        image: "./images/black_seeds.png"
    },
    {
        id: 5,
        name: "Ultra Hibiscus Roselle Tea",
        shortDesc: "A tart, refreshing burst of crimson wellness.",
        description: "Vibrant hibiscus flowers sourced from sustainable farms, creating a stunning ruby-red infusion. Naturally caffeine-free and delicious hot or iced.",
        flavorNotes: "Tart, Berry, Cranberry",
        healthBenefits: [
            "Naturally lowers blood pressure",
            "High in Vitamin C and antioxidants",
            "Supports liver health",
            "Aids weight management"
        ],
        nafdac: "",
        image: "./images/hibiscus.png"
    },
    {
        id: 6,
        name: "Ultra Black Tea",
        shortDesc: "A perfectly balanced semi-oxidized treasure.",
        description: "Light-roasted Taiwanese oolong with orchid-like fragrance. Rolled into tight jade pearls that unfurl slowly, revealing complex layers of flavor.",
        flavorNotes: "Orchid, Creamy, Nutty",
        healthBenefits: [
            "Boosts metabolism and fat burning",
            "Strengthens bones and teeth",
            "Reduces stress hormones",
            "Improves skin health"
        ],
        nafdac: "",
        image: "./images/black_tea.png"
    },
    {
        id: 7,
        name: "Ultra Black Tea With Lemon",
        shortDesc: "Cool refreshment with North African flair.",
        description: "Traditional gunpowder green tea blended with fresh spearmint and a hint of nana mint. A cultural classic served in Moroccan ceremonies for centuries.",
        flavorNotes: "Minty, Fresh, Light",
        healthBenefits: [
            "Freshens breath naturally",
            "Relieves headaches and nausea",
            "Improves concentration",
            "Aids respiratory health"
        ],
        nafdac: "",
        image: "./images/black_tea_w_lemon.png"
    },
    {
        id: 8,
        name: "Ultra Blood Boosting Tea",
        shortDesc: "The most delicate of all teas, pure luxury.",
        description: "Rare Bai Mu Dan white tea, hand-picked in Fujian province during a narrow two-week window. Minimal processing preserves natural antioxidants.",
        flavorNotes: "Subtle, Sweet, Hay",
        healthBenefits: [
            "Highest antioxidant content of all teas",
            "Promotes youthful, glowing skin",
            "Protects against cellular aging",
            "Gentle caffeine for sustained energy"
        ],
        nafdac: "",
        image: "./images/blood_bossting.png"
    },
    {
        id: 9,
        name: "Ultra Cardamon Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/cardamon.png"
    },
    {
        id: 10,
        name: "Ultra Wonder 5ive Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/wonder_five.png"
    },
    {
        id: 11,
        name: "Ultra Carrot Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/carrot.png"
    },
    {
        id: 12,
        name: "Ultra Celery Leaf Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/celery.png"
    },
    {
        id: 13,
        name: "Ultra Cholesterol Herbal Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/cholestrol.png"
    },
    {
        id: 14,
        name: "Ultra Cinnamon Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/cinnamon.png"
    },
    {
        id: 15,
        name: "Ultra Clove Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/cloves.png"
    },
    {
        id: 16,
        name: "Ultra Dandelion Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/dandelion.png"
    },
    {
        id: 17,
        name: "Ultra Liver & Kidney Detox Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/detox.png"
    },
    {
        id: 18,
        name: "Ultra Doum Palm Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/doum_palm.png"
    },
    {
        id: 19,
        name: "Ultra Fat Burner Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/fat_bunner.png"
    },
    {
        id: 20,
        name: "Ultra Fibroid Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/fibroid.png"
    },
    {
        id: 21,
        name: "Ultra Garlic Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/garlic.png"
    },
    {
        id: 22,
        name: "Ultra Ginger & Lemon Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/ginger_&_lemon.png"
    },
    {
        id: 23,
        name: "Ultra Guava Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/guava.png"
    },
    {
        id: 24,
        name: "Ultra Hepatitis Care Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/hepetitis.png"
    },
    {
        id: 25,
        name: "Ultra Hypertension Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/hypertension.png"
    },
    {
        id: 26,
        name: "Ultra Lemon Grass Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/lemon_grass.png"
    },
    {
        id: 27,
        name: "Ultra Maca Root Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/maca.png"
    },
    {
        id: 28,
        name: "Ultra Mango Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/mango.png"
    },
    {
        id: 29,
        name: "Ultra Mints & Honey Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/mint_&_honey.png"
    },
    {
        id: 30,
        name: "Ultra Moringa Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/moringa_with_spice.png"
    },
    {
        id: 31,
        name: "Ultra Noni Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/noni.png"
    },
    {
        id: 32,
        name: "Ultra Olive Leaf Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/olive_leaf.png"
    },
    {
        id: 33,
        name: "Ultra Orange Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/orange.png"
    },
    {
        id: 34,
        name: "Ultra peppermint Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/peppermint.png"
    },
    {
        id: 35,
        name: "Ultra Pile Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/pile.png"
    },
    {
        id: 36,
        name: "Ultra Pineapple & Orange Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/pineapple_&_orange.png"
    },
    {
        id: 37,
        name: "Ultra Prostate Care Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/postrate_care.png"
    },
    {
        id: 38,
        name: "Ultra Respiratory Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/respiratory.png"
    },
    {
        id: 39,
        name: "Ultra Sickle Cell Care Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/sickle_cell.png"
    },
    {
        id: 40,
        name: "Ultra Soursop Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/soursop.png"
    },
    {
        id: 41,
        name: "Ultra strawberry Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/strawberry.png"
    },
    {
        id: 42,
        name: "Ultra Tamarind Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/tamarind.png"
    },
    {
        id: 43,
        name: "Ultra Tumeric Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/tumeric.png"
    },
    {
        id: 44,
        name: "Ultra Typhoid & Malaria Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/typhoid_&_malaria.png"
    },
    {
        id: 45,
        name: "Ultra Ulcer Care Tea",
        shortDesc: "A sunny blend that brightens any moment.",
        description: "Fragrant elderflowers paired with zesty lemon peel and a hint of honey bush. A caffeine-free infusion perfect for any time of day.",
        flavorNotes: "Floral, Citrus, Light",
        healthBenefits: [
            "Boosts immune system naturally",
            "Rich in flavonoids",
            "Alleviates cold and flu symptoms",
            "Calming without drowsiness"
        ],
        nafdac: "",
        image: "./images/ulcer_care.png"
    },
];

// Featured products for homepage
const featuredProducts = [products[0], products[3], products[5]];

// ==========================================
// TESTIMONIALS DATA
// ==========================================
const testimonials = [
    {
        quote: "Ultra Tea has completely transformed my morning routine. The Morning Zen blend gives me the clarity I need without any jitters. It's become an essential part of my wellness journey.",
        author: "Sarah Mitchell",
        role: "Yoga Instructor",
        image: "https://placehold.co/100x100/8B9F7E/FFFFFF?text=SM"
    },
    {
        quote: "As a chef, I appreciate quality ingredients. Ultra Tea sources their leaves with the same care I put into my dishes. The Himalayan Chai is simply unmatched in depth and authenticity.",
        author: "David Okonkwo",
        role: "Executive Chef",
        image: "https://placehold.co/100x100/2D4A3E/FFFFFF?text=DO"
    },
    {
        quote: "I've tried countless brands, but nothing compares to the purity of Ultra Tea. The Golden Chamomile has helped me finally get restful sleep after years of insomnia.",
        author: "Amara Nwosu",
        role: "Healthcare Professional",
        image: "https://placehold.co/100x100/C4A77D/FFFFFF?text=AN"
    }
];

// ==========================================
// FAQ DATA
// ==========================================
const faqs = [
    // {
    //     question: "Do you ship internationally?",
    //     answer: "Yes! We ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on your location. Shipping costs are calculated at checkout based on your delivery address."
    // },
    {
        question: "Is your tea organic?",
        answer: "All of our teas are 100% organic. Each product page clearly indicates organic certification. We source from farms that prioritize sustainable, chemical-free cultivation."
    },
    {
        question: "How should I store my tea for maximum freshness?",
        answer: "Store your tea in a cool, dry place away from direct sunlight and strong odors. Keep it in an airtight container. Properly stored, our teas maintain optimal freshness for 12-18 months."
    },
    {
        question: "Do you offer wholesale pricing for businesses?",
        answer: "Absolutely! We partner with cafes, restaurants, hotels, and retailers worldwide. Contact our wholesale team at wholesale@ultratea.com or fill out the contact form for a custom quote and samples."
    },
    // {
    //     question: "What is your return policy?",
    //     answer: "We want you to love your tea! If you're not completely satisfied, contact us within 30 days of purchase. We offer full refunds or exchanges for unopened products. For quality concerns, we'll replace your order free of charge."
    // }
];

// ==========================================
// DOM ELEMENTS
// ==========================================
const productGrid = document.getElementById('product-grid');
const featuredGrid = document.getElementById('featured-grid');
const testimonialsGrid = document.getElementById('testimonials-grid');
const faqContainer = document.getElementById('faq-container');
const modal = document.getElementById('product-modal');
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

// ==========================================
// RENDER FUNCTIONS
// ==========================================

// Render Product Grid (Products Page)
function renderProducts() {
    if (!productGrid) return;

    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.shortDesc}</p>
                <button class="btn btn-outline" onclick="openModal(${product.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

// Render Featured Products (Home Page)
function renderFeatured() {
    if (!featuredGrid) return;

    featuredGrid.innerHTML = featuredProducts.map(product => `
        <div class="featured-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="featured-card-content">
                <h3>${product.name}</h3>
                <p>${product.shortDesc}</p>
                <a href="products.html" class="btn btn-outline">Explore</a>
            </div>
        </div>
    `).join('');
}

// Render Testimonials (Home Page)
function renderTestimonials() {
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <p>"${t.quote}"</p>
            <div class="testimonial-author">
                <img src="${t.image}" alt="${t.author}">
                <div class="testimonial-author-info">
                    <h4>${t.author}</h4>
                    <span>${t.role}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render FAQ Accordion (Contact Page)
function renderFAQ() {
    if (!faqContainer) return;

    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question}</span>
                <span class="icon">+</span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// ==========================================
// MODAL FUNCTIONS
// ==========================================

window.openModal = function (productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !modal) return;

    const modalHeader = modal.querySelector('.modal-header img');
    const modalTitle = modal.querySelector('.modal-body h2');
    const modalFlavor = modal.querySelector('.flavor-notes');
    const modalDesc = modal.querySelector('.description');
    const modalBenefits = modal.querySelector('.benefits-list');
    const modalNafdac = modal.querySelector('.modal-nafdac span');

    if (modalHeader) modalHeader.src = product.image;
    if (modalHeader) modalHeader.alt = product.name;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalFlavor) modalFlavor.textContent = product.flavorNotes;
    if (modalDesc) modalDesc.textContent = product.description;
    if (modalBenefits) {
        modalBenefits.innerHTML = product.healthBenefits.map(b => `<li>${b}</li>`).join('');
    }
    if (modalNafdac) modalNafdac.textContent = product.nafdac;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMobileMenu() {
    if (!mobileToggle || !navLinks) return;
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// ==========================================
// FAQ ACCORDION
// ==========================================

window.toggleFAQ = function (index) {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderFeatured();
    renderTestimonials();
    renderFAQ();

    // Close modal button
    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal on overlay click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Mobile toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Form submission demo
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will respond within 24-48 hours.');
            contactForm.reset();
        });
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
