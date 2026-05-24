import { Check } from "lucide-react";
import { useState } from "react";
import { PRODUCTS, Product } from "../constants/products";
import { ImageWithFallback } from "./ImageWithFallback";
import Header from "./Header";
import { useCart } from "./CartContext";
export default function Catalogue() {
    const whatsappNumber = "+918884764747";

    const { cart, addToCart, increaseQty, decreaseQty } = useCart();

    const [viewMode, setViewMode] = useState("card"); // "list" | "card"

    const getWhatsAppLink = (product) => {
        const message = `Hello, I would like to order ${product.name}. Please share details.`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };

    const getDiscount = (product) => {
        if (!product.discountedPrice) return null;
        return Math.round(
            ((product.price - product.discountedPrice) / product.price) * 100
        );
    };

    const PriceBlock = ({ product }) => (
        <div>
            {product.discountedPrice ? (
                <>
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-black">
                            ₹{product.discountedPrice}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            ₹{product.price}
                        </span>
                    </div>
                    <p className="text-green-600 text-sm font-semibold">
                        {getDiscount(product)}% OFF
                    </p>
                </>
            ) : (
                <span className="text-3xl font-bold text-black">
                    ₹{product.price}
                </span>
            )}
        </div>
    );

    const ActionButtons = ({ product }) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
            <div className="mt-6 flex flex-col gap-3">
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

                <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl text-center transition"
                >
                    Buy Now
                </a>
            </div>
        )
    };

    const ListView = () => (
        <div className="space-y-8">
            {PRODUCTS.map((product, index) => (
                <div
                    key={product.id}
                    className={`relative flex flex-col md:flex-row gap-6 p-4 sm:p-8 rounded-2xl ${index % 2 === 0 ? "bg-green-50" : "bg-gray-50"
                        }`}
                >
                    {/* BADGES */}
                    {product.isBestSeller && (
                        <div className="absolute top-4 left-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg">
                            ⭐ BEST SELLER
                        </div>
                    )}
                    {product.isNew && (
                        <div className="absolute top-10 left-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg">
                            NEW
                        </div>
                    )}

                    {/* IMAGE */}
                    <div className="w-full md:w-64 h-64 flex-shrink-0 rounded-xl bg-white flex items-center justify-center p-4">
                        <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    {/* INFO */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            {product.name}
                        </h3>

                        <p className="text-gray-700 mb-4">{product.description}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                                Key Benefits:
                            </h4>

                            <ul className="space-y-2">
                                {product.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5" />
                                        <span className="text-gray-700">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Quantity:</span>{" "}
                                {product.quantity}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Shelf Life:</span>{" "}
                                {product.shelfLife}
                            </p>
                        </div>
                    </div>

                    {/* PRICE + ACTIONS */}
                    <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md flex flex-col justify-between min-w-[220px]">
                        <PriceBlock product={product} />
                        <ActionButtons product={product} />
                    </div>
                </div>
            ))}
        </div>
    );

    const CardView = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => {
                const cartItem = cart.find((item) => item.id === product.id); return (
                    <div
                        key={product.id}
                        className="relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
                    >
                        {/* BADGES */}
                        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                            {product.isBestSeller && (
                                <span className="bg-black text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                                    ⭐ BEST SELLER
                                </span>
                            )}

                            {product.isNew && (
                                <span className="bg-black text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                                    NEW
                                </span>
                            )}
                        </div>

                        {/* IMAGE (FeaturedProducts style) */}
                        <div className="bg-gray-100 flex items-center justify-center p-3 h-52">
                            <ImageWithFallback
                                src={product.image}
                                alt={product.name}
                                className="max-h-[85%] max-w-[85%] object-contain"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-3 flex flex-col flex-grow">
                            {/* TITLE */}
                            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                                {product.name}
                            </h3>

                            {/* DESCRIPTION (short like featured) */}
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {product.description}
                            </p>

                            {/* PRICE */}
                            <div className="mt-3 flex items-center gap-2">
                                {product.discountedPrice ? (
                                    <>
                                        <span className="text-base font-bold text-black">
                                            ₹{product.discountedPrice}
                                        </span>

                                        <span className="text-xs text-gray-400 line-through">
                                            ₹{product.price}
                                        </span>

                                        <span className="text-[10px] font-semibold text-green-600">
                                            {Math.round(
                                                ((product.price - product.discountedPrice) / product.price) *
                                                100
                                            )}
                                            % OFF
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-base font-bold text-black">
                                        ₹{product.price}
                                    </span>
                                )}
                            </div>

                            {/* BUTTONS (Featured style) */}
                            <div className="mt-3 flex flex-col gap-2">
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

                                <a
                                    href={getWhatsAppLink(product)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-orange-500 text-white text-sm font-semibold py-2 rounded-lg text-center hover:bg-orange-600 transition"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );

    return (
        <>
            <Header />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    {/* TOGGLE */}
                    <div className="flex justify-center mb-8 gap-4">
                        <button
                            onClick={() => setViewMode("card")}
                            className={`px-5 py-2 rounded-full font-semibold border ${viewMode === "card"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            Card View
                        </button>

                        <button
                            onClick={() => setViewMode("list")}
                            className={`px-5 py-2 rounded-full font-semibold border ${viewMode === "list"
                                ? "bg-black text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            List View
                        </button>
                    </div>

                    {/* CONTENT */}
                    {viewMode === "list" ? <ListView /> : <CardView />}
                </div>
            </section>
        </>
    );
}