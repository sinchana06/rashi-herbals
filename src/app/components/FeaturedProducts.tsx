import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "../constants/products";
import { ImageWithFallback } from "./ImageWithFallback";
import allProducts from "../assets/all_products.jpeg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
export default function FeaturedProducts() {

    const whatsappNumber = "+918884764747";

    const getWhatsAppLink = (productName: string) => {
        const message = `Hello, I would like to order ${productName}. Please share details.`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };
    const { cart, addToCart, increaseQty, decreaseQty } = useCart();

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);


    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    const filteredProducts =
        selectedCategory === "all"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === selectedCategory);
    useEffect(() => {
        checkScroll();

        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [filteredProducts]);
    const NavButton = ({ label, active, onClick }) => {
        return (
            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#416d25] to-[#00db90]">
                <button
                    onClick={onClick}
                    className={`px-6 py-3 rounded-full font-semibold  bg-white transition-all duration-300 transform hover:scale-105
                ${active
                            ? "bg-gradient-to-r from-[#416d25] to-[#00db90] text-white border-transparent"
                            : "text-black hover:bg-gradient-to-r hover:from-[#416d25] hover:to-[#00db90] hover:text-white"
                        }
            `}
                >
                    {label}
                </button>
            </div>
        );
    };

    return (
        <>
            <section className="relative h-[35vh] flex items-center justify-center text-center">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${allProducts})`,
                        backgroundPosition: "center 70%"
                    }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">

                    {/* Light streak behind text */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 blur-2xl opacity-60 bg-white/40 rounded-full scale-125" />

                        <h2 className="relative text-4xl md:text-5xl font-bold text-white">
                            Our Products
                        </h2>
                    </div>
                </div>
            </section>
            <section id="products" data-section="products" className="py-10 flex justify-center">
                <div className="flex flex-wrap gap-6">
                    <NavButton
                        label="All"
                        active={selectedCategory === "all"}
                        onClick={() => setSelectedCategory("all")}
                    />

                    <NavButton
                        label="Pain Relief"
                        active={selectedCategory === "pain"}
                        onClick={() => setSelectedCategory("pain")}
                    />
                    <NavButton
                        label="General health"
                        active={selectedCategory === "general"}
                        onClick={() => setSelectedCategory("general")}
                    />

                    <NavButton
                        label="Sexual wellness"
                        active={selectedCategory === "sexual"}
                        onClick={() => setSelectedCategory("sexual")}
                    />

                    <NavButton
                        label="Stamina boosters"
                        active={selectedCategory === "stamina"}
                        onClick={() => setSelectedCategory("stamina")}
                    />
                </div>
            </section>
            <section className="py-1 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="relative">

                        {/* LEFT ARROW */}
                        {canScrollLeft && (
                            <button
                                onClick={() =>
                                    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })
                                }
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}

                        {/* SCROLL AREA */}
                        <div
                            id="product-scroll"
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth px-10 py-4 scrollbar-hide"
                        >
                            {filteredProducts.map((product) => {
                                const cartItem = cart.find((item) => item.id === product.id); return (
                                    <div
                                        key={product.id}
                                        className="relative min-w-[250px] max-w-[250px] flex-shrink-0"
                                    >
                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                                            {product.isBestSeller && (
                                                <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                    ⭐ BEST SELLER
                                                </span>
                                            )}

                                            {product.isNew && (
                                                <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                    NEW
                                                </span>
                                            )}
                                        </div>

                                        {/* IMAGE (smaller height feel) */}
                                        <div className="bg-gray-100 flex items-center justify-center p-2 h-60">
                                            <ImageWithFallback
                                                src={product.image}
                                                alt={product.name}
                                                className="max-w-[85%] max-h-[85%] object-contain"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-2 flex flex-col flex-grow">

                                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                                                {product.name}
                                            </h3>

                                            <p className="text-gray-500 text-xs mb-2 line-clamp-2">
                                                {product.description}
                                            </p>

                                            {/* PRICE SECTION */}
                                            <div className="mt-auto pt-3 border-t border-gray-100">

                                                {/* Discount logic */}
                                                <div className="flex items-center gap-2 mb-3">

                                                    {product.discountedPrice ? (
                                                        <>
                                                            <span className="text-lg font-bold text-black">
                                                                ₹{product.discountedPrice}
                                                            </span>

                                                            <span className="text-sm text-gray-400 line-through">
                                                                ₹{product.price}
                                                            </span>

                                                            <span className="text-xs font-semibold text-green-600">
                                                                {Math.round(
                                                                    ((product.price - product.discountedPrice) / product.price) * 100
                                                                )}% OFF
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className="text-lg font-bold text-black">
                                                            ₹{product.price}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* ADD TO CART */}
                                                {cartItem ? (
                                                    <div className="flex items-center justify-between border border-orange-500 rounded-lg px-3 py-2 mb-2">

                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                decreaseQty(product.id);
                                                            }}
                                                            className="text-orange-500 font-bold text-xl px-2 cursor-pointer"
                                                        >
                                                            -
                                                        </button>

                                                        <span className="font-medium">{cartItem.quantity}</span>

                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                increaseQty(product.id);
                                                            }}
                                                            className="text-orange-500 font-bold text-xl px-2 cursor-pointer"
                                                        >
                                                            +
                                                        </button>

                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart(product);
                                                        }}
                                                        className="w-full mb-2 border border-orange-500 text-orange-500 font-medium py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                )}

                                                {/* BUY NOW */}
                                                <a
                                                    href={getWhatsAppLink(product.name)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="w-full flex items-center justify-center bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
                                                >
                                                    Buy Now
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        {canScrollRight && (
                            <button
                                onClick={() =>
                                    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
                                }
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}

                    </div>
                    <div className="mt-3 flex justify-center">
                        <NavButton
                            label="View all products"
                            active={false}
                            onClick={() => navigate("/catalog")}
                        />
                    </div>

                </div>
            </section>
        </>
    );
}