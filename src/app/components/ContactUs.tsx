import rashiHerbals from "../assets/rashi_herbals.png";
import phoneImg from "../assets/phone_number.png";
import emailImg from "../assets/email.png";

export function ContactStrip() {
  return (
    <section
      className="relative w-full py-20 px-6 bg-contain bg-no-repeat bg-center text-white"
      style={{ backgroundImage: `url(${rashiHerbals})` }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold">
            Want to know more about our products?
          </h2>

          <p className="text-3xl text-white/80">
            Reach out to us.
          </p>
        </div>

{/* PHONE + EMAIL IMAGES SIDE BY SIDE */}
{/* DEVICE STYLE CONTACTS (IMAGE BASED) */}
<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:w-1/2">

  {/* PHONE IMAGE */}
  <div className="relative w-90 md:w-80">
    <img
      src={phoneImg}   // <-- your phone image import
      alt="phone"
      className="w-full drop-shadow-2xl"
    />

    {/* Overlay Content */}
    <div className="absolute -top-5 inset-0 flex flex-col items-center justify-center text-center px-6">
      <p className="text-xl font-bold text-white">
        +91 88847 64747
      </p>
    </div>
  </div>

  {/* EMAIL IMAGE */}
  <div className="relative w-90 md:w-80 -left-15">
    <img
      src={emailImg}   // <-- your email/laptop image import
      alt="email"
      className="w-full drop-shadow-2xl"
    />

    {/* Overlay Content */}
    <div className="absolute -top-15 inset-0 flex flex-col items-center justify-center text-center px-3">
      <p className="text-lg font-bold text-black">Email us at</p>
      <p className="text-lg font-bold text-black break-all">
        cc@rashiherbals.com
      </p>
    </div>
  </div>

</div>

      </div>
    </section>
  );
}