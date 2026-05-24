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
      {/* HEADER */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center left-80"
          style={{ backgroundImage: `url(${headerBackgroundImage})` }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="flex h-20 w-full">
          {/* LOGO */}
          <div className="w-[28%] bg-white flex items-center justify-center rounded-r-[60px] relative z-10 shadow-md">
            <img
              src={rashiHerbalsImage}
              alt="Rashi Herbals"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* HEADER TEXT */}
          <div className="flex-1 relative overflow-hidden -ml-10">
            <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-1/4 text-center">
              <h2 className="text-white text-3xl font-bold font-[League_Spartan]">
                100% Natural
              </h2>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/4 text-center">
              <h2 className="text-white text-3xl font-bold font-[League_Spartan]">
                Laboratory Tested
              </h2>
            </div>

            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-1/4 text-center">
              <h2 className="text-white text-3xl font-bold font-[League_Spartan]">
                Certified Quality
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <div className="sticky top-0 z-50 bg-white py-5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-5 items-center">

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
                className={`group relative overflow-hidden rounded-full p-[2px] transition-all duration-300 
                  ${isActive ? "scale-110" : "hover:scale-110"}
                `}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#416d25,#00db90)] rounded-full" />

                <div
                  className={`relative px-7 py-3 rounded-full font-bold transition-all duration-300 backdrop-blur-sm font-[League_Spartan]
                  ${isActive
                      ? "bg-transparent text-white"
                      : "bg-white text-gray-800 group-hover:bg-transparent group-hover:text-white"
                    }`}
                >
                  {item.label}
                </div>
              </a>
            );
          })}

          {/* CART ICON */}
<div
  className="relative ml-4 cursor-pointer"
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