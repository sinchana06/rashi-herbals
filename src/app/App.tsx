import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import AboutUs from "./components/AboutUs";
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";
import OffersPage from "./components/OffersPage";
export default function App() {
   return (
     <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/catalog" element={<Catalogue />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/offers" element={<OffersPage />} />
            </Routes>
        </BrowserRouter>
        </CartProvider>
    );
}