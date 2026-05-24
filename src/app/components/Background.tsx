import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import{useNavigate} from "react-router-dom";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";

const images = [
  {
    src: offer1,
    offerId: "",
  },
  {
    src: offer2,
    offerId: "offer2",
  },
  {
    src: offer3,
    offerId: "offer3",
  },
  {
    src: offer4,
    offerId: "offer4",
  },
];

export default function Background() {
  const [current, setCurrent] = useState(0);
const navigate = useNavigate();
  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-x-hidden overflow-y-visible pt-12 pb-0 px-4 sm:px-6 lg:px-8">

      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[250px] bg-[linear-gradient(90deg,#416d25,#00db90)] z-0" />

      <div className="relative z-10 mx-auto">

        {/* Carousel */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-25 left-20 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slides */}
          <div className="relative w-full h-[300px] flex justify-center overflow-visible">

            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-[95%] transition-all duration-1000 ease-in-out transform
            ${index === current
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < current
                      ? "opacity-0 -translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
                  }`}
              >
                <div className="relative top-0">

                  {/* Bottom Shadow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/30 blur-2xl rounded-full" />

                  {/* Image */}
                  <ImageWithFallback
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    onClick={() => navigate(`/offers?focus=${image.offerId}`)}
                    className="
                      relative
                      mx-auto
                      w-auto
                      h-[280px]
                      max-w-[1200px]
                      shadow-2xl
                      object-contain
                      cursor-pointer
                    "
                  />
                </div>
              </div>
            ))}

            {/* Smaller Spacer */}
            <div className="h-[320px] sm:h-[420px] md:h-[500px]" />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-25 right-20 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}