import { MessageCircle } from "lucide-react";
import { PRODUCTS } from "../constants/products";
import { ImageWithFallback } from "./ImageWithFallback";

type Props = {
    setView: (view: "home" | "catalog") => void;
    setSelectedProduct: (product: any) => void;
};

export default function FeaturedProducts({
    setView,
    setSelectedProduct,
}: Props) {

    const whatsappNumber = "+918884764747";

    const getWhatsAppLink = (productName: string) => {
        const message = `Hello, I would like to order ${productName}. Please share details.`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" id="products">
                        Featured Products
                    </h2>
                    <p className="text-gray-600">
                        Discover our most popular herbal supplements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {PRODUCTS.slice(0, 4).map((product) => (
                        <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer border border-green-100 flex flex-col relative"
                        >
                            {product.isBestSeller && (
                                <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                                    ⭐ BEST SELLER
                                </span>
                            )}
                            {product.isNew && (
                                <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                                    NEW
                                </span>
                            )}
                            <div className="bg-gray-100 aspect-square flex items-center justify-center p-4">
                                <ImageWithFallback
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {product.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-2">
                                    {product.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100">

                                    <span className="block text-2xl font-bold text-green-600 mb-4">
                                        {product.price}
                                    </span>

                                    <a
                                        href={getWhatsAppLink(product.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-xl transition"
                                    >
                                        Buy Now
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => setView("catalog")}
                        className="rounded-full bg-green-600 px-8 py-3 text-white font-semibold hover:bg-green-700 transition"
                    >
                        View More Products
                    </button>
                </div>

            </div>
        </section>
    );
}