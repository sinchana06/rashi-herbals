import leaf1 from "../assets/backgrounds/leaf1.png";
import leaf2 from "../assets/backgrounds/leaf2.png";
import fingers from "../assets/backgrounds/fingers.png";
import hand from "../assets/backgrounds/hand.png";
import happyFam from "../assets/backgrounds/happy_fam.png";
import happyFriends from "../assets/backgrounds/happy_friends.png";
import happyMan from "../assets/backgrounds/happy_man.png";
import productBottle from "../assets/shilajit.png";
import rashiHerbalsImage from "../assets/rashi_herbals.png";
import Header from "./Header";

export default function AboutUs() {
  return (
    <><Header />
      <section className="relative overflow-hidden bg-black min-h-screen py-5">
        <div className="max-w-6xl mx-auto px-6 lg:px-5 relative z-10">

          {/* MAIN LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* ================= LEFT SIDE ================= */}
            <div className="relative flex flex-col items-start">

              {/* Writing Pad */}
              <div className="relative  ml-10 bg-[#e8e8e8] rounded-[40px] w-full max-w-[650px] min-h-[520px] px-10 pt-16 pb-10 shadow-[0_0_50px_rgba(255,255,255,0.08)]">

                {/* Top Divider */}
                <div className="absolute top-0 left-0 w-full h-[180px] bg-[#d9d9d9] rounded-t-[40px]" />

                {/* Content */}
                <div className="relative z-10 h-full">

                  {/* This now sits INSIDE the gray top area */}
                  <h2 className="text-5xl font-black text-black leading-tight -mt-6">
                    ABOUT
                  </h2>

                  <h2 className="text-5xl font-black text-[#00db90] leading-tight mb-10">
                    RASHI HERBALS
                  </h2>

                  <div className="space-y-8">

                    <div>
                      <h3 className="text-2xl font-black text-black mb-3">
                        ABOUT US
                      </h3>

                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        Rashi Herbals, founded in 2024, is dedicated to improving everyday health through the time-tested power of Ayurveda. We offer a thoughtfully curated range of herbal products designed to support pain relief, boost strength and stamina, and promote overall wellness.

                        From fast-acting pain relief solutions to premium vitality-enhancing formulations such as Night Express Gold, Ashwagandha, and Shilajit, our products are crafted to deliver real, noticeable results.

                        We combine traditional Ayurvedic wisdom with modern needs to provide safe, effective, and reliable healthcare solutions. Our aim is to make natural wellness simple, accessible, and beneficial for everyone—helping people lead healthier and more balanced lives.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-black mb-3">
                        OUR VISION
                      </h3>

                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        To become a trusted and leading name in Ayurvedic wellness by empowering people to live healthier, more active, and naturally balanced lives.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-black mb-3">
                        OUR MISSION
                      </h3>

                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        To deliver high-quality herbal products that support pain relief, enhance energy and stamina, and promote long-term wellness—harnessing the true power of Ayurveda in every product we offer.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="relative flex items-center justify-center bottom-80 min-h-[700px]">

              {/* Bottle */}
              <img
                src={productBottle}
                alt="Shilajit Bottle"
                className="relative z-20 w-[240px] rotate-[-18deg] -translate-y-10 drop-shadow-[0_0_60px_rgba(255,255,255,0.12)]"
              />

              {/* Hand Below Bottle */}
              <img
                src={hand}
                alt=""
                className="absolute bottom-[-60px] right-[-20px] w-[420px] z-10"
              />

              {/* Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-[#00db90]/20 blur-[120px]" />
              <div className="absolute right-[-10px] bottom-[-35%] w-[420px] z-0 z-20 bg-white rounded-full w-[300px] h-[180px] flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                <img
                  src={rashiHerbalsImage}
                  alt=""
                  className=" w-[420px] z-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ================= WHY CHOOSE RASHI SECTION ================= */}
        <div className="relative mt-20 min-h-[950px]">

          {/* Large Background Leaf */}
          <img
            src={leaf1}
            alt=""
            className="absolute left-[10%] top-[8%] w-[720px] z-0"
          />

          {/* Peeking Fingers */}
          <img
            src={fingers}
            alt=""
            className="absolute left-[-110px] top-[220px] w-[320px] z-10"
          />

          {/* Happy Man */}
          <img
            src={happyMan}
            alt=""
            className="absolute left-[70px] top-[360px] w-[320px] z-10"
          />

          {/* Bigger Right Leaf Behind Circle */}
          <img
            src={leaf2}
            alt=""
            className="absolute right-[-120px] top-[40px] w-[420px] rotate-[-20deg] z-0"
          />

          {/* Half Circle */}
          <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[520px] h-[420px] bg-white rounded-full z-10 flex items-center justify-start pl-24 shadow-[0_0_60px_rgba(255,255,255,0.08)]">

            <div className="text-left">
              <h2 className="text-black text-4xl font-black leading-tight">
                WHY
              </h2>

              <h2 className="text-black text-4xl font-black leading-tight">
                CHOOSE
              </h2>

              <h2 className="text-[#00db90] text-4xl font-black leading-tight">
                RASHI
              </h2>
            </div>
          </div>

          {/* ================= FEATURE BOXES ================= */}
          <div className="relative z-20 flex flex-col gap-20 pt-5">

            {/* BOX 1 */}
            <div className="relative ml-[170px] w-[500px]">

              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#416d25] to-[#00db90] rounded-full px-8 py-4 flex items-center gap-4 shadow-2xl">

                  <div className="text-[#7dff3d] text-4xl leading-none">
                    ♥
                  </div>

                  <h3 className="text-black font-black text-2xl tracking-wide">
                    Safe and Natural
                  </h3>
                </div>
              </div>

              <div className="bg-[#ececec] rounded-[38px] min-h-[160px] px-8 pt-15 pb-6 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                  All our products are made from 100% natural herbs, sourced directly from trusted farms with no artificial additives.
                </p>
              </div>
            </div>

            {/* BOX 2 */}
            <div className="relative ml-[320px] w-[500px] -mt-4">

              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#416d25] to-[#00db90] rounded-full px-10 py-4 flex items-center gap-4 shadow-2xl">

                  <div className="text-[#7dff3d] text-4xl leading-none">
                    ♥
                  </div>

                  <h3 className="text-black font-black text-2xl tracking-wide">
                    LAB TESTED
                  </h3>
                </div>
              </div>

              <div className="bg-[#ececec] rounded-[38px] min-h-[180px] px-8 pt-20 pb-8 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                  Scientifically tested for safety, purity, and effective herbal performance.
                </p>
              </div>
            </div>

            {/* BOX 3 */}
            <div className="relative ml-[200px] w-[500px] -mt-4">

              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#416d25] to-[#00db90] rounded-full px-10 py-4 flex items-center gap-4 shadow-2xl">

                  <div className="text-[#7dff3d] text-4xl leading-none">
                    ♥
                  </div>

                  <h3 className="text-black font-black text-2xl tracking-wide">
                    TRUSTED RESULTS
                  </h3>
                </div>
              </div>

              <div className="bg-[#ececec] rounded-[38px] min-h-[180px] px-8 pt-20 pb-8 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                  Thousands trust Rashi Herbals for confidence and healthier lifestyles.
                </p>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM PEEKING IMAGES ================= */}

          {/* Happy Friends Bottom Left */}
          <img
            src={happyFriends}
            alt=""
            className="absolute left-[-60px] bottom-[-40px] w-[300px] z-0"
          />

          {/* Happy Family Bottom Right */}
          <img
            src={happyFam}
            alt=""
            className="absolute right-[-80px] bottom-[-50px] w-[330px] z-0"
          />
        </div>
      </section>
    </>
  );
}