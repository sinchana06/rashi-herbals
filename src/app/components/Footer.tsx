import { Instagram } from "lucide-react";
import { ContactStrip } from "./ContactUs";
import img1 from "../assets/insta1.png";
import img2 from "../assets/insta2.png";
import img3 from "../assets/insta3.png";
import phone from "../assets/phone.png";

export default function Footer() {
  return (
    <section id="contactus" data-section="contactus">
      <footer
        className="relative mt-[-10] w-full overflow-hidden text-white bg-center bg-no-repeat min-h-[60px]"
        style={{
          backgroundImage: `url(${phone})`,
        }}
      >
        <div className="absolute inset-0 top-8 bg-black/70" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-24 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* LEFT - CENTERED IMAGE STACK */}
          <div className="relative w-full top-10 px-15 md:w-1/2 flex items-center justify-center min-h-[320px]">

            {/* Container ensures true centering */}
            <div className="relative w-[320px] sm:w-[380px] md:w-[460px] h-[420px] flex items-center justify-center">

              {/* Image 1 */}
              <img
                src={img1}
                alt="1"
                className="
                  absolute
                  w-40 sm:w-48 md:w-56
                  rounded-2xl shadow-2xl
                  -rotate-12
                  -left-10 sm:-left-12 md:-left-16
                  top-0
                  hover:scale-105 transition
                "
              />

              {/* Image 2 (center focus) */}
              <img
                src={img2}
                alt="2"
                className="
                  absolute
                  w-44 sm:w-52 md:w-60
                  rounded-2xl shadow-2xl
                  z-20
                  top-16 sm:top-20 md:top-24
                  hover:scale-105 transition
                "
              />

              {/* Image 3 */}
              <img
                src={img3}
                alt="3"
                className="
                  absolute
                  w-40 sm:w-48 md:w-56
                  rounded-2xl shadow-2xl
                  rotate-6
                  -right-10 sm:-right-12 md:-right-16
                  top-28 sm:top-32 md:top-36
                  hover:scale-105 transition
                "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 text-center md:text-left z-10 md:pl-8">


            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Follow Us
            </h3>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl">
              Stay connected for updates & wellness tips
            </p>

            <a
              href="https://instagram.com/rashi.herbals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 text-gray-200 hover:text-pink-400 transition"
            >
              <Instagram className="w-7 h-7 sm:w-9 sm:h-9" />
              <span className="text-lg sm:text-2xl font-medium">
                @rashi.herbals
              </span>
            </a>

          </div>
        </div>
      </footer>

      <ContactStrip />
    </section>
  );
}