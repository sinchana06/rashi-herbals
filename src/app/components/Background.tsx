import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useNavigate } from "react-router-dom";

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

  // Auto Slide
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
    <section className="relative overflow-hidden pt-6 sm:pt-10 md:pt-12 pb-0 px-2 sm:px-4 lg:px-8">
      
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[180px] sm:h-[220px] md:h-[250px] bg-[linear-gradient(90deg,#416d25,#00db90)] z-0" />

      <div className="relative z-10 mx-auto w-full">

        {/* Carousel */}
        <div className="relative flex items-center justify-center w-full">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              absolute
              left-1 sm:left-3 md:left-10 lg:left-20
              top-1/2 -translate-y-1/2
              z-20
              bg-white/80 hover:bg-white
              p-1.5 sm:p-2 md:p-3
              rounded-full
              shadow-lg
              transition
              hover:scale-110
            "
          >
            <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Slides */}
          <div className="relative w-full flex justify-center overflow-hidden">

            {images.map((image, index) => (
              <div
                key={index}
                className={`
                  absolute
                  w-full
                  flex
                  justify-center
                  transition-all
                  duration-700
                  ease-in-out
                  transform
                  ${
                    index === current
                      ? "opacity-100 translate-x-0 scale-100"
                      : index < current
                      ? "opacity-0 -translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
                  }
                `}
              >
                <div className="relative flex justify-center w-full">

                  {/* Shadow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] sm:w-[80%] h-6 sm:h-8 md:h-10 bg-black/25 blur-2xl rounded-full" />

                  {/* Image */}
                  <ImageWithFallback
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    onClick={() =>
                      navigate(`/offers?focus=${image.offerId}`)
                    }
                    className="
                      relative
                      cursor-pointer
                      object-contain
                      mx-auto
                      transition-all
                      duration-500

                      w-auto

                      h-[160px]
                      sm:h-[220px]
                      md:h-[300px]
                      lg:h-[380px]

                      max-w-[92vw]
                      sm:max-w-[88vw]
                      md:max-w-[80vw]
                      lg:max-w-[1100px]

                      px-2
                      sm:px-4

                      drop-shadow-2xl
                    "
                  />
                </div>
              </div>
            ))}

            {/* Spacer */}
            <div className="h-[180px] sm:h-[260px] md:h-[340px] lg:h-[430px]" />
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              absolute
              right-1 sm:right-3 md:right-10 lg:right-20
              top-1/2 -translate-y-1/2
              z-20
              bg-white/80 hover:bg-white
              p-1.5 sm:p-2 md:p-3
              rounded-full
              shadow-lg
              transition
              hover:scale-110
            "
          >
            <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}