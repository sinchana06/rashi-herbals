import leaf1 from "../assets/backgrounds/leaf1.png";
import leaf2 from "../assets/backgrounds/leaf2.png";
import fingers from "../assets/backgrounds/fingers.png";
import hand from "../assets/backgrounds/hand.png";
import happyFam from "../assets/backgrounds/happy_fam.png";
import happyFriends from "../assets/backgrounds/happy_friends.png";
import happyMan from "../assets/backgrounds/happy_man.png";
import productBottle from "../assets/shilajit.png";
import Header from "./Header";

export default function AboutUs() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-black min-h-screen py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

          {/* ================= MAIN SECTION ================= */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-10 items-center">

            {/* ================= LEFT SIDE ================= */}
            <div className="relative">
              <div className="relative bg-[#e8e8e8] rounded-[18px] sm:rounded-[30px] lg:rounded-[40px] w-full px-3 sm:px-6 lg:px-10 pt-6 sm:pt-10 lg:pt-14 pb-4 sm:pb-8 lg:pb-10 shadow-[0_0_50px_rgba(255,255,255,0.08)]">

                {/* Top Divider */}
                <div className="absolute top-0 left-0 w-full h-[70px] sm:h-[120px] lg:h-[180px] bg-[#d9d9d9] rounded-t-[18px] sm:rounded-t-[30px] lg:rounded-t-[40px]" />

                {/* CONTENT */}
                <div className="relative z-10">

                  <h2 className="text-base sm:text-3xl lg:text-5xl font-black text-black leading-tight -mt-1 sm:-mt-4 lg:-mt-6">
                    ABOUT
                  </h2>

                  <h2 className="text-base sm:text-3xl lg:text-5xl font-black text-[#00db90] leading-tight mb-3 sm:mb-7 lg:mb-10">
                    RASHI HERBALS
                  </h2>

                  <div className="space-y-3 sm:space-y-5 lg:space-y-8">

                    {/* ABOUT */}
                    <div>
                      <h3 className="text-[10px] sm:text-lg lg:text-2xl font-black text-black mb-1 sm:mb-2">
                        ABOUT US
                      </h3>
                      <p className="text-gray-700 text-[8px] sm:text-sm lg:text-base leading-relaxed font-medium">
                        Rashi Herbals, founded in 2024, is dedicated to improving everyday health through the time-tested power of Ayurveda. We offer a thoughtfully curated range of herbal products designed to support pain relief, boost strength and stamina, and promote overall wellness.
                        From fast-acting pain relief solutions to premium vitality-enhancing formulations such as Night Express Gold, Ashwagandha, and Shilajit, our products are crafted to deliver real, noticeable results.
                        We combine traditional Ayurvedic wisdom with modern needs to provide safe, effective, and reliable healthcare solutions.
                      </p>
                    </div>

                    {/* VISION */}
                    <div>
                      <h3 className="text-[10px] sm:text-lg lg:text-2xl font-black text-black mb-1 sm:mb-2">
                        OUR VISION
                      </h3>
                      <p className="text-gray-700 text-[8px] sm:text-sm lg:text-base leading-relaxed font-medium">
                        To become a trusted and leading name in Ayurvedic wellness by empowering people to live healthier and naturally balanced lives.
                      </p>
                    </div>

                    {/* MISSION */}
                    <div>
                      <h3 className="text-[10px] sm:text-lg lg:text-2xl font-black text-black mb-1 sm:mb-2">
                        OUR MISSION
                      </h3>
                      <p className="text-gray-700 text-[8px] sm:text-sm lg:text-base leading-relaxed font-medium">
                        To deliver high-quality herbal products that support pain relief, enhance energy and stamina, and promote long-term wellness.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="relative flex items-center justify-center min-h-[200px] sm:min-h-[380px] lg:min-h-[600px]">

              {/* Glow */}
              <div className="
                absolute
                w-[100px] h-[100px]
                sm:w-[220px] sm:h-[220px]
                lg:w-[380px] lg:h-[380px]
                rounded-full
                bg-[#00db90]/20
                blur-[40px] sm:blur-[80px] lg:blur-[120px]
              " />

              {/* Bottle */}
              <img
                src={productBottle}
                alt="Bottle"
                className="
                  relative z-20
                  w-20 sm:w-36 lg:w-[240px]
                  rotate-[-18deg]
                  -translate-y-6 sm:-translate-y-10 lg:-translate-y-14
                  drop-shadow-[0_0_60px_rgba(255,255,255,0.12)]
                "
              />

              {/* Hand */}
              <img
                src={hand}
                alt=""
                className="
                  absolute
                  bottom-[15px] sm:bottom-[0px] lg:bottom-[-40px]
                  right-[-5px] sm:right-0
                  w-24 sm:w-44 lg:w-[420px]
                  z-10
                "
              />
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE SECTION ================= */}
        <div className="relative mt-8 sm:mt-16 lg:mt-24 pb-16 sm:pb-24 lg:pb-32">

          {/* LEFT LEAF */}
          <img
            src={leaf1}
            alt=""
            className="
              absolute
              left-0
              top-[4%]
              w-[80px] sm:w-[260px] lg:w-[580px]
              z-0
              opacity-90
            "
          />

          {/* FINGERS */}
          <img
            src={fingers}
            alt=""
            className="
              absolute
              left-[-8px] sm:left-[-30px] lg:left-[-80px]
              top-[90px] sm:top-[140px] lg:top-[200px]
              w-[50px] sm:w-[150px] lg:w-[280px]
              z-10
            "
          />

          {/* HAPPY MAN */}
          <img
            src={happyMan}
            alt=""
            className="
              absolute
              left-[8px] sm:left-[24px] lg:left-[60px]
              top-[160px] sm:top-[260px] lg:top-[340px]
              w-[60px] sm:w-[160px] lg:w-[280px]
              z-10
            "
          />

          {/* RIGHT LEAF */}
          <img
            src={leaf2}
            alt=""
            className="
              absolute
              right-[-5px] sm:right-[-40px] lg:right-[-80px]
              top-[10px]
              w-[70px] sm:w-[200px] lg:w-[360px]
              rotate-[-20deg]
              z-0
            "
          />

          {/* WHY CHOOSE RASHI — circle */}
          <div className="
              absolute
              right-[-20px] sm:right-[-80px] lg:right-[-180px]
              top-[100px] sm:top-1/2 sm:-translate-y-1/2
              w-[110px] h-[110px]
              sm:w-[260px] sm:h-[210px]
              lg:w-[440px] lg:h-[360px]
              bg-white
              rounded-full
              z-10
              flex items-center justify-start
              pl-4 sm:pl-10 lg:pl-20
              shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >
            <div className="text-left">
              <h2 className="text-black text-[10px] sm:text-xl lg:text-4xl font-black leading-tight">WHY</h2>
              <h2 className="text-black text-[10px] sm:text-xl lg:text-4xl font-black leading-tight">CHOOSE</h2>
              <h2 className="text-[#00db90] text-[10px] sm:text-xl lg:text-4xl font-black leading-tight">RASHI</h2>
            </div>
          </div>

          {/* ================= FEATURE BOXES ================= */}
          <div className="relative z-20 flex flex-col gap-6 sm:gap-12 lg:gap-16 pt-4 sm:pt-6">

            {/* BOX 1 */}
            <div className="relative w-full max-w-[160px] sm:max-w-xs lg:max-w-md mx-auto lg:mx-0 lg:ml-[140px]">
              <div className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#416d25] to-[#00db90] rounded-full px-3 sm:px-6 py-1.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-2xl">
                  <div className="text-[#7dff3d] text-base sm:text-3xl">♥</div>
                  <h3 className="text-black font-black text-[8px] sm:text-lg whitespace-nowrap">Safe and Natural</h3>
                </div>
              </div>
              <div className="bg-[#ececec] rounded-[16px] sm:rounded-[30px] min-h-[70px] sm:min-h-[130px] px-3 sm:px-6 pt-6 sm:pt-10 pb-3 sm:pb-5 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <p className="text-gray-700 text-[7px] sm:text-sm lg:text-base leading-relaxed font-semibold">
                  All our products are made from 100% natural herbs sourced from trusted farms.
                </p>
              </div>
            </div>

            {/* BOX 2 */}
            <div className="relative w-full max-w-[160px] sm:max-w-xs lg:max-w-md mx-auto lg:mx-0 lg:ml-[260px]">
              <div className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#416d25] to-[#00db90] rounded-full px-3 sm:px-6 py-1.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-2xl">
                  <div className="text-[#7dff3d] text-base sm:text-3xl">♥</div>
                  <h3 className="text-black font-black text-[8px] sm:text-lg whitespace-nowrap">LAB TESTED</h3>
                </div>
              </div>
              <div className="bg-[#ececec] rounded-[16px] sm:rounded-[30px] min-h-[70px] sm:min-h-[130px] px-3 sm:px-6 pt-6 sm:pt-10 pb-3 sm:pb-5 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <p className="text-gray-700 text-[7px] sm:text-sm lg:text-base leading-relaxed font-semibold">
                  Scientifically tested for safety, purity, and herbal performance.
                </p>
              </div>
            </div>

            {/* BOX 3 */}
            <div className="relative w-full max-w-[160px] sm:max-w-xs lg:max-w-md mx-auto lg:mx-0 lg:ml-[160px]">
              <div className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#416d25] to-[#00db90] rounded-full px-3 sm:px-6 py-1.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-2xl">
                  <div className="text-[#7dff3d] text-base sm:text-3xl">♥</div>
                  <h3 className="text-black font-black text-[8px] sm:text-lg whitespace-nowrap">TRUSTED RESULTS</h3>
                </div>
              </div>
              <div className="bg-[#ececec] rounded-[16px] sm:rounded-[30px] min-h-[70px] sm:min-h-[130px] px-3 sm:px-6 pt-6 sm:pt-10 pb-3 sm:pb-5 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <p className="text-gray-700 text-[7px] sm:text-sm lg:text-base leading-relaxed font-semibold">
                  Thousands trust Rashi Herbals for healthier lifestyles.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <img
            src={happyFriends}
            alt=""
            className="
              absolute
              left-0
              bottom-0
              w-[60px] sm:w-[150px] lg:w-[260px]
              z-0
            "
          />

          {/* BOTTOM RIGHT */}
          <img
            src={happyFam}
            alt=""
            className="
              absolute
              right-0
              bottom-0
              w-[70px] sm:w-[160px] lg:w-[280px]
              z-0
            "
          />
        </div>
      </section>
    </>
  );
}