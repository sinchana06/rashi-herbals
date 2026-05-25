import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";
import FeaturedProducts from "./FeaturedProducts";
import Background from "./Background";
import { Product } from "../constants/products";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      <Header />

      <>
        <Background />
        <FeaturedProducts />
      </>

      <Footer />
    </div>
  );
}