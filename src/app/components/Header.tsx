import rashiHerbalsImage from "../assets/rashi_herbals.png";
import headerBackgroundImage from "../assets/header_background.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();
  const navItems = [
    { label: "Home", path: "/", type: "route" },
    { label: "About Us", path: "/aboutus", type: "route" },
    { label: "Best Sellers", path: "products", type: "section" },
    { label: "Offers zone", path: "/offers", type: "route" },
    { label: "Product Catalogue", path: "/catalog", type: "route" },
    { label: "Contact us", path: "contactus", type: "section" },
  ];

  const [activeSection, setActiveSection] = useState("");
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
const handleClick = (item, e) => {
  e.preventDefault();

  if (item.type === "section") {
    // If already on homepage → scroll directly
    if (location.pathname === "/") {
      document.getElementById(item.path)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Navigate to homepage with section state
      navigate("/", {
        state: { scrollTo: item.path },
      });
    }
  } else {
    navigate(item.path);
  }
};

  return (
    <>
<header className="relative overflow-hidden">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${headerBackgroundImage})` }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* HEADER */}
  <div className="relative flex items-center w-full h-14 sm:h-16 md:h-20">

    {/* LOGO */}
    <div className="w-[28%] sm:w-[30%] bg-white flex items-center justify-center rounded-r-[40px] sm:rounded-r-[50px] shadow-md z-10 h-full">
      <img
        src={rashiHerbalsImage}
        alt="Rashi Herbals"
        className="h-8 sm:h-10 md:h-16 lg:h-20 object-contain"
      />
    </div>

    {/* TEXTS */}
    <div className="flex-1 flex items-center justify-around px-1 sm:px-3 md:px-6">

      <h2 className="text-white font-bold font-[League_Spartan]
                     text-[9px] sm:text-xs md:text-xl lg:text-3xl
                     whitespace-nowrap text-center leading-tight">
        100% Natural
      </h2>

      <h2 className="text-white font-bold font-[League_Spartan]
                     text-[9px] sm:text-xs md:text-xl lg:text-3xl
                     whitespace-nowrap text-center leading-tight">
        Laboratory Tested
      </h2>

      <h2 className="text-white font-bold font-[League_Spartan]
                     text-[9px] sm:text-xs md:text-xl lg:text-3xl
                     whitespace-nowrap text-center leading-tight">
        Certified Quality
      </h2>

    </div>

  </div>
</header>

      {/* NAVIGATION */}
<div className="sticky top-0 z-50 bg-white py-5 px-4 shadow-sm">

  <div className="max-w-7xl mx-auto flex items-center">

    {/* SCROLLABLE NAV (NEVER WRAPS) */}
    <div className="flex-1 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide">

      <div className="flex items-center gap-4 w-max">

        {navItems.map((item, index) => {
          const isActive =
            item.type === "section"
              ? activeSection === item.path
              : location.pathname === item.path;

          return (
            <a
              key={index}
              href={item.path}
              onClick={(e) => handleClick(item, e)}
              className={`group relative flex-shrink-0 overflow-hidden rounded-full p-[2px] transition-all duration-300
                ${isActive ? "scale-105" : "hover:scale-105"}
              `}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#416d25,#00db90)] rounded-full" />

              <div
                className={`relative
                  px-3 sm:px-5 md:px-7
                  py-2 sm:py-3
                  rounded-full font-bold transition-all duration-300 backdrop-blur-sm font-[League_Spartan]
                  text-xs sm:text-sm md:text-base
                  whitespace-nowrap
                  ${isActive
                    ? "bg-transparent text-white"
                    : "bg-white text-gray-800 group-hover:bg-transparent group-hover:text-white"
                  }
                `}
              >
                {item.label}
              </div>
            </a>
          );
        })}

      </div>
    </div>

    {/* PINNED CART */}
    <div
      className="relative ml-4 flex-shrink-0 cursor-pointer"
      onClick={() => navigate("/cart")}
    >
      <ShoppingCart className="w-6 h-6 text-gray-800" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>

  </div>
</div>
    </>
  );
}