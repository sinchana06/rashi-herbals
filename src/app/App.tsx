import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Footer from './components/Footer';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Benefits from './components/Benefits';
import Catalogue from './components/Catalogue';
import AboutUs from './components/AboutUs';
import Background from './components/Background';
import { Product } from './constants/products';
export default function App() {
  const [view, setView] = useState<'home' | 'catalog'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [view]);
  const whatsappNumber = "8884764747";

  const getWhatsAppLink = (productName: Product) => {
    const message = `Hello, I would like to order ${productName}. Please share details.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {view === 'home' && (
        <>
          <Background />
          <FeaturedProducts
            setView={setView}
            setSelectedProduct={setSelectedProduct}
          />
          <Benefits />
          <AboutUs />
        </>
      )}

      {view === 'catalog' && (
        <Catalogue setView={setView} />
      )}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative mx-auto">
{selectedProduct.isBestSeller && (
  <div className="absolute top-4 left-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg z-10">
    ⭐ BEST SELLER
  </div>
)}
{selectedProduct.isNew && (
  <div className="absolute top-4 left-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg z-10">
    NEW
  </div>
)}
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
                <a
                  href={getWhatsAppLink(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-xl"
                >
                  Buy Now
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}