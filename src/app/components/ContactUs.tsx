import rashiHerbals from "../assets/rashi_herbals.png";
import phoneImg from "../assets/phone_number.png";
import emailImg from "../assets/email.png";

export function ContactStrip() {
  return (
    <section
      className="relative w-full py-16 md:py-24 px-6 bg-contain bg-no-repeat bg-center text-white"
      style={{ backgroundImage: `url(${rashiHerbals})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* LEFT TEXT */}
        <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Want to know more about our products?
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/80">
            Reach out to us.
          </p>
        </div>

{/* PHONE + EMAIL */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10 md:w-1/2">

  {/* PHONE CARD */}
  <div className="relative w-[200px] sm:w-[240px] md:w-[280px] overflow-hidden">
    <img
      src={phoneImg}
      alt="phone"
      className="w-full drop-shadow-2xl"
    />

    <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
      <p className="text-sm sm:text-base md:text-md font-bold text-white leading-tight">
        +91 8884764747
      </p>
    </div>
  </div>

  {/* EMAIL CARD */}
  <div className="relative w-[200px] sm:w-[240px] md:w-[280px] overflow-hidden">
    <img
      src={emailImg}
      alt="email"
      className="w-full drop-shadow-2xl"
    />

    {/* safer positioning */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center -translate-y-4">
      <p className="text-xs sm:text-sm md:text-base font-bold text-black leading-tight">
        Email us at
      </p>
      <p className="text-xs sm:text-sm md:text-base font-bold text-black break-all leading-tight">
        cc@rashiherbals.com
      </p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}