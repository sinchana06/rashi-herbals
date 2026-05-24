import { Instagram } from "lucide-react";
import { ContactStrip } from "./ContactUs";
import img1 from "../assets/insta1.png";
import img2 from "../assets/insta2.png";
import img3 from "../assets/insta3.png";
import phone from "../assets/phone.png";

export default function Footer() {
  return (
    <section id="contactus" data-section="contactus">
    <footer className="relative overflow-hidden text-white bg-center h-[10%]"
      style={{
        backgroundImage: `url(${phone})`,
      }}>

      <div className="absolute mt-5 inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-16 h-full">

        {/* LEFT SIDE - IMAGE STACK */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[420px]">

          {/* Image 1 */}
          <img
            src={img1}
            alt="1"
            className="absolute w-43 md:w-52 rounded-2xl shadow-2xl -rotate-12 left-30 top-[-30px] z-10 hover:scale-105 transition"
          />

          {/* Image 2 (main focus) */}
          <img
            src={img2}
            alt="2"
            className="absolute w-43 md:w-52 rounded-2xl shadow-2xl top-40 left-1/2 rotate-6 z-20 hover:scale-105 transition"
          />

          {/* Image 3 */}
          <img
            src={img3}
            alt="3"
            className="absolute w-43 md:w-52 rounded-2xl shadow-2xl -rotate-6 left-4 top-36 z-10 hover:scale-105 transition"
          />
        </div>

        {/* RIGHT SIDE - SOCIAL */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8">

          <h3 className="text-4xl md:text-5xl font-bold">
            Follow Us
          </h3>

          <p className="text-gray-300 text-lg md:text-xl">
            Stay connected for updates & wellness tips
          </p>

          <a
            href="https://instagram.com/rashi.herbals"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-200 hover:text-pink-400 transition"
          >
            <Instagram className="w-9 h-9" />
            <span className="text-2xl font-medium">
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