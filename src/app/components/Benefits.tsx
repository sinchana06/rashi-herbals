import { Leaf, Shield, Heart } from "lucide-react";
export default function Benefits(){
    return(
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Natural</h3>
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Ayurvedic Wisdom</h3>
                      <p className="text-gray-600">
                        Formulated based on ancient Ayurvedic principles, combining time-tested knowledge with modern science
                      </p>
                    </div>
                  </div>
                </div>
              </section>
    )
}