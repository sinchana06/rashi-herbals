import { Leaf, Heart, Shield, Zap } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import allProductsImage from "../assets/all_products.jpeg";
import rashiHerbalsImage from "../assets/rashi_herbals.png";

export default function Background() {
    return (
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
                                    {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* Vision */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="flex items-center gap-3 mb-4 text-green-700">
                    <Leaf size={28} />
                    <h3 className="text-2xl font-semibold">Vision</h3>
                  </div>
                  <p className="text-gray-700">
                    To become a trusted and leading name in Ayurvedic wellness by empowering people
                    to live healthier, more active, and naturally balanced lives.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="flex items-center gap-3 mb-4 text-green-700">
                    <Heart size={28} />
                    <h3 className="text-2xl font-semibold">Mission</h3>
                  </div>
                  <p className="text-gray-700">
                    To deliver high-quality herbal products that support pain relief, enhance energy
                    and stamina, and promote long-term wellness—harnessing the true power of Ayurveda
                    in every product we offer.
                  </p>
                </div>

              </div>
                    </div>
                  </section>
    )
}