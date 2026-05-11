import { useState, useEffect } from 'react';
import { Leaf, Shield, Heart, Zap, Check, Instagram, Mail } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import allProductsImage from './assets/all_products.jpeg';
import nightExpressGoldImage from './assets/night_express_gold.png';
import orthoRollOnImage from './assets/roll_on.png';
import shilajitCapsulesImage from './assets/shilajit.png';
import ashwagandhaCapsulesImage from './assets/ashwagandha.png';
import rashiHerbalsImage from './assets/rashi_herbals.png';
import painBalmImage from './assets/pain_balm.png';
export default function App() {
const products = [
{
  id: 1,
  name: "Night Express Gold",
  price: "₹499",
  description:
    "Herbal vitality supplement formulated to support stamina, energy, and overall wellness for improved performance and confidence.",
  benefits: [
    "Supports stamina & vitality",
    "Boosts natural energy levels",
    "Helps reduce stress & fatigue",
    "Supports overall male wellness"
  ],
  quantity: "10 capsules per box",
  shelfLife: "24 months",
  image: nightExpressGoldImage
},

{
  id: 2,
  name: "Ortho Roll On",
  price: "₹130",
  description:
    "Fast-acting herbal roll-on designed to provide convenient relief from muscle stiffness, joint pain, and everyday body discomfort.",
  benefits: [
    "Relieves muscle & joint pain",
    "Reduces stiffness and soreness",
    "Quick absorption formula",
    "Easy roll-on application anytime"
  ],
  quantity: "50 ml bottle",
  shelfLife: "36 months",
  image: orthoRollOnImage
},

{
  id: 3,
  name: "Himalayan Shilajit Capsules",
  price: "₹450",
  description:
    "Premium Himalayan Shilajit capsules formulated to support strength, endurance, and overall vitality.",
  benefits: [
    "Improves stamina & strength",
    "Supports energy metabolism",
    "Enhances immunity",
    "Helps maintain overall wellness"
  ],
  quantity: "60 capsules per bottle",
  shelfLife: "24 months",
  image: shilajitCapsulesImage
},

{
  id: 4,
  name: "Ashwagandha Capsules",
  price: "₹200",
  description:
    "Traditional Ayurvedic adaptogen known for promoting stress relief, better sleep, and balanced energy levels.",
  benefits: [
    "Helps manage stress",
    "Supports better sleep quality",
    "Improves energy & stamina",
    "Supports mental wellness"
  ],
  quantity: "60 capsules per bottle",
  shelfLife: "24 months",
  image: ashwagandhaCapsulesImage
},

{
  id: 5,
  name: "Pain Balm",
  price: "₹50",
  description:
    "Herbal pain relief balm designed for fast soothing comfort from headaches, muscle pain, cold, and body aches.",
  benefits: [
    "Provides quick pain relief",
    "Relieves headache & body ache",
    "Helps ease cold & congestion",
    "Soothing herbal formulation"
  ],
  quantity: "10 g pack",
  shelfLife: "36 months",
  image: painBalmImage
}
];
  const [view, setView] = useState<'home' | 'catalog'>('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [view]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-xl font-semibold text-gray-900">Rashi Herbal Products</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors">Products</a>
              <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Benefits</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {view === 'home' && (
      <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={allProductsImage}
            alt="All products background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mx-auto mb-8 w-fit bg-white/80 shadow-lg p-4 sm:p-6 rounded-2xl">
  <img
    src={rashiHerbalsImage}
    alt="Rashi Herbals"
    className="w-full max-w-md"
  />
</div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">100% Natural</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Heart className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Lab Tested</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Certified Quality</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" id="products">Featured Products</h2>
              <p className="text-gray-600">Discover our most popular herbal supplements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer border border-green-100">
                  <div className="bg-gray-100 aspect-square flex items-center justify-center p-4">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold leading-tight text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setView('catalog')}
                className="rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white hover:bg-green-700 transition"
              >
                View More Products
              </button>
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {view === 'home' && (
      <>
      {/* Benefits Section */}
      <section id="benefits" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Rashi Herbal?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to bringing you the finest herbal supplements with uncompromising quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pure & Natural</h3>
              <p className="text-gray-600">
                All our products are made from 100% natural herbs, sourced directly from trusted farms with no artificial additives
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lab Certified</h3>
              <p className="text-gray-600">
                Every batch is tested in certified laboratories to ensure purity, potency, and safety standards are met
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Traditional Wisdom</h3>
              <p className="text-gray-600">
                Formulated based on ancient Ayurvedic principles, combining time-tested knowledge with modern science
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {view === 'catalog' && (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">All Products</h2>
              <p className="text-lg text-gray-600">Detailed information for each product and our full product line.</p>
            </div>
            <button
              onClick={() => setView('home')}
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700 transition"
            >
              Back to Home
            </button>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col md:flex-row gap-6 p-4 sm:p-8 rounded-2xl ${index % 2 === 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
                <div className="w-full md:w-64 h-64 flex-shrink-0 rounded-xl bg-white flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                   <p className="text-sm text-gray-600 mb-2">
  <span className="font-semibold">Quantity:</span> {product.quantity}
</p>

<p className="text-sm text-gray-600">
  <span className="font-semibold">Shelf Life:</span> {product.shelfLife}
</p></div>
                </div>

                <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md self-start">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-green-600">{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Price per bottle</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {view === 'home' && (
      <>
      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Rashi Herbal Products</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are committed to bringing the ancient wisdom of Ayurveda to modern wellness seekers. Our products are carefully formulated using traditional recipes and the finest quality herbs, ensuring that each supplement delivers maximum benefits.
          </p>
          <p className="text-lg text-gray-700">
            Every product undergoes rigorous quality testing and is manufactured in GMP-certified facilities to ensure safety, purity, and efficacy. We believe in transparency, sustainability, and the healing power of nature.
          </p>
        </div>
      </section>
      </>
      )}
{selectedProduct && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative mx-auto">

      {/* Close Button */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl p-2"
      >
        ✕
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-8">

        {/* Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="max-h-[280px] sm:max-h-[400px] object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            {selectedProduct.name}
          </h2>

          <p className="text-gray-700 mb-4">
            {selectedProduct.description}
          </p>

          <h4 className="font-semibold mb-2">Benefits:</h4>

          <ul className="space-y-2 mb-6">
            {selectedProduct.benefits.map((b, i) => (
              <li key={i} className="flex gap-2">
                <Check className="w-5 h-5 text-green-600" />
                {b}
              </li>
            ))}
          </ul>

          <p className="text-3xl font-bold text-green-600">
            {selectedProduct.price}
          </p>
        </div>

      </div>
    </div>
  </div>
)}
      {/* Footer */}
<footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">

    <div className="flex items-center justify-center gap-2 mb-4">
      <Leaf className="w-6 h-6 text-green-400" />
      <span className="text-xl font-semibold">Rashi Herbal Products</span>
    </div>

    <p className="text-gray-400 mb-6">
      Natural wellness solutions for a healthier life
    </p>

    {/* ✅ Social Icons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">

      {/* Instagram */}
      <a
        href="https://instagram.com/rashi.herbals"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
      >
        <Instagram className="w-6 h-6" />
        <span>@rashi.herbals</span>
      </a>

      {/* Email */}
      <a
        href="mailto:rashi@rashiherbals.com"
        className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
      >
        <Mail className="w-6 h-6" />
        <span>rashi@rashiherbals.com</span>
      </a>

    </div>

    <p className="text-sm text-gray-500">
      © 2026 Rashi Herbal Products. All rights reserved.
    </p>

  </div>
</footer>
    </div>
  );
}