import { Check, MessageCircle } from "lucide-react";
import { Product, PRODUCTS } from "../constants/products";
import { ImageWithFallback } from "./ImageWithFallback";
type Props = {
    setView: (view: "home" | "catalog") => void;
};
export default function Catalogue({
    setView,
}: Props) {
    const whatsappNumber = "+918884764747";

    const getWhatsAppLink = (product: Product) => {
        const message = `Hello, I would like to order ${product.name}. Please share details.`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="sticky top-15 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 mb-12">

                    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">All Products</h2>
                        <p className="text-md text-gray-600">Detailed information for each product and our full product line.</p>
                    </div>
                        <button
                            onClick={() => setView('home')}
                            className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700 transition"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
                <div className="space-y-8">
                    {PRODUCTS.map((product, index) => (
                        <div key={product.id} className={`relative flex flex-col md:flex-row gap-6 p-4 sm:p-8 rounded-2xl ${index % 2 === 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
                            {product.isBestSeller && (
                                <div className="absolute top-4 left-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg z-10">
                                    ⭐ BEST SELLER
                                </div>
                            )}
                            {product.isNew && (
                                <div className="absolute top-4 left-0 bg-black text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg z-10">
                                    NEW
                                </div>
                            )}
                            <div className="w-full md:w-64 h-64 flex-shrink-0 rounded-xl bg-white flex items-center justify-center p-4">
                                <ImageWithFallback
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain mx-auto"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                                <p className="text-gray-700 mb-4">{product.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                                    <ul className="space-y-2">
                                        {product.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-2">
                                        <span className="font-semibold">Quantity:</span> {product.quantity}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Shelf Life:</span> {product.shelfLife}
                                    </p></div>
                            </div>

                            <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md flex flex-col justify-between min-w-[220px]">

                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-green-600">
                                            {product.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Price per unit
                                    </p>
                                </div>

                                <a
                                    href={getWhatsAppLink(product)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
                                >
                                    Buy Now
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}