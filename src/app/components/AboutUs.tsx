import { Check, Heart, Leaf, Shield, Zap } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import rashiHerbalsImage from "../assets/rashi_herbals.png";
export default function AboutUs() {
    return (
                  <section id="about" className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-6">

              {/* Heading */}
              <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-green-800 mb-4">
                  🌿 About Rashi Herbals
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Natural wellness inspired by Ayurveda, crafted for modern lifestyles.
                </p>
              </div>

              {/* About Content */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

                {/* Image */}
                <div>
                  <ImageWithFallback
                    src={rashiHerbalsImage}
                    alt="Rashi Herbals"
                    className="rounded-2xl shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="space-y-5 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Rashi Herbals</strong>, founded in 2024, is dedicated to improving everyday health through the time-tested power of Ayurveda.
                    We offer a thoughtfully curated range of herbal products designed to support pain relief, boost strength and stamina, and promote overall wellness.
                  </p>

                  <p>
                    From fast-acting pain relief solutions to premium vitality-enhancing formulations such as
                    <span className="font-semibold text-green-700"> Night Express Gold, Ashwagandha, and Shilajit</span>,
                    our products are crafted to deliver real, noticeable results.
                  </p>

                  <p>
                    We combine traditional Ayurvedic wisdom with modern needs to provide safe, effective, and reliable healthcare solutions.
                    Our aim is to make natural wellness simple, accessible, and beneficial for everyone—helping people lead healthier and more balanced lives.
                  </p>
                </div>
              </div>

            </div>
          </section>
    )
}