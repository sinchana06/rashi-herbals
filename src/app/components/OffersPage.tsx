import Header from "./Header";
import { OFFERS } from "../constants/offers";
import { useSearchParams } from "react-router-dom";
import { useCart } from "./CartContext";

export default function OffersPage() {
    const [searchParams] = useSearchParams();
    const focusId = searchParams.get("focus");

    const { addToCart, increaseQty, decreaseQty, cart
    } = useCart();

    const whatsappNumber = "+918884764747";

const getWhatsAppLink = (offer) => {
  // get cart items for this offer
  let items = cart.filter((item) => item.offerId === offer.id);

  // fallback if offer not added to cart yet
  if (items.length === 0) {
    items = (offer.products || []).map((product, index) => ({
      ...product,
      quantity: 1,
      isFree:
        offer.type === "BUY_X_GET_Y" &&
        index >= offer.buyQty &&
        index < offer.buyQty + offer.getQty,
    }));
  }

  // subtotal
  const subtotal = items.reduce((sum, item) => {
    if (item.isFree) return sum;

    return (
      sum +
      (item.discountedPrice || item.price) * item.quantity
    );
  }, 0);

  // discount
  let discountAmount = 0;

  if (offer?.type === "DISCOUNT") {
    discountAmount =
      (subtotal * offer.discountPercent) / 100;
  }

  const finalTotal = subtotal - discountAmount;

  // products
  const productLines = items
    .map((item) => {
      if (item.isFree) {
        return `- ${item.name} x ${item.quantity} 🎁 FREE`;
      }

      return `- ${item.name} x ${item.quantity} = ₹${
        (item.discountedPrice || item.price) *
        item.quantity
      }`;
    })
    .join("\n");

  // final whatsapp message
  const message =
    `🛒 *Order Summary*\n\n` +
    `🔥 *${offer.title}*\n\n` +
    `📦 *Products:*\n${productLines}\n\n` +
    `💰 Subtotal: ₹${subtotal}\n` +
    (offer?.type === "DISCOUNT"
      ? `🎉 Discount: ${offer.discountPercent}% (-₹${Math.round(
          discountAmount
        )})\n`
      : "") +
    `💳 *Final Total: ₹${Math.round(finalTotal)}*\n\n` +
    `Please confirm my order 🙏`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};
const OfferActionButtons = ({ offer }) => {
  const cartItems = cart.filter((item) => item.offerId === offer.id);
  const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isInCart = cartItems.length > 0;

  const handleAdd = () => {
    const products = offer.products || [];

    if (offer.type === "BUY_X_GET_Y") {
      const paidItems = products.slice(0, offer.buyQty);
      const freeItems = products.slice(
        offer.buyQty,
        offer.buyQty + offer.getQty
      );

      paidItems.forEach((p) =>
        addToCart(p, {
          isFree: false,
          offerId: offer.id,
          offerType: "BUY_X_GET_Y",
        })
      );

      freeItems.forEach((p) =>
        addToCart(p, {
          isFree: true,
          offerId: offer.id,
          offerType: "BUY_X_GET_Y",
        })
      );
    }

    if (offer.type === "DISCOUNT") {
      products.forEach((p) =>
        addToCart(p, {
          isFree: false,
          offerId: offer.id,
          offerType: "DISCOUNT",
          discountPercent: offer.discountPercent,
        })
      );
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-3">

      {/* ADD / QTY */}
      {isInCart ? (
        <div className="flex items-center justify-between border border-orange-500 rounded-lg px-3 py-2">

          <button
            onClick={(e) => {
              e.stopPropagation();
              cartItems.forEach((item) => decreaseQty(item.id));
            }}
            className="text-orange-500 font-bold text-xl px-2"
          >
            -
          </button>

          <span className="font-medium">{quantity}</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              cartItems.forEach((item) => increaseQty(item.id));
            }}
            className="text-orange-500 font-bold text-xl px-2"
          >
            +
          </button>

        </div>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
          className="w-full border border-orange-500 text-orange-500 font-medium py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Add to Cart
        </button>
      )}

      {/* BUY NOW */}
      <a
        href={getWhatsAppLink(offer)}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl text-center transition"
      >
        Buy Now
      </a>

    </div>
  );
};
    const handleAddOfferToCart = (offer) => {
        const products = offer.products || [];

        // 🔥 BUY X GET Y
        if (offer.type === "BUY_X_GET_Y") {
            const paidItems = products.slice(0, offer.buyQty);
            const freeItems = products.slice(
                offer.buyQty,
                offer.buyQty + offer.getQty
            );

            paidItems.forEach((p) =>
                addToCart(p, {
                    isFree: false,
                    offerId: offer.id,
                    offerType: "BUY_X_GET_Y",
                })
            );

            freeItems.forEach((p) =>
                addToCart(p, {
                    isFree: true,
                    offerId: offer.id,
                    offerType: "BUY_X_GET_Y",
                })
            );
        }

        // 🔥 DISCOUNT OFFER
        if (offer.type === "DISCOUNT") {
            products.forEach((p) =>
                addToCart(p, {
                    isFree: false,
                    offerId: offer.id,
                    offerType: "DISCOUNT",
                    discountPercent: offer.discountPercent,
                })
            );
        }
    };

    return (
        <>
            <Header />

            <section className="max-w-7xl mx-auto px-4 py-12">

                {/* HEADING */}
                <h1 className="text-3xl font-bold mb-8">
                    Offers
                </h1>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {OFFERS.map((offer) => {
                        const isFocused = focusId === offer.id;

                        return (
                            <div
                                key={offer.id}
                                className={`rounded-2xl overflow-hidden shadow-md border-2 transition-transform duration-200
                ${isFocused ? "border-green-500 scale-[1.02]" : "border-transparent"}
                `}
                            >

                                {/* IMAGE SECTION */}
                                <div
                                    className="relative h-72 bg-gray-100 cursor-pointer"
                                    onClick={() => handleAddOfferToCart(offer)}
                                >
                                    <img
                                        src={offer.bannerImage}
                                        alt={offer.title}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                    {/* TEXT */}
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h2 className="text-xl font-bold">
                                            {offer.title}
                                        </h2>
                                        <p className="text-sm opacity-90">
                                            {offer.description}
                                        </p>
                                    </div>
                                </div>

                                {/* DETAILS */}
                                <div className="p-5 bg-white">

                                    {/* OFFER TYPE */}
                                    {offer.type === "BUY_X_GET_Y" ? (
                                        <p className="text-green-600 font-semibold">
                                            Buy {offer.buyQty} Get {offer.getQty} Free
                                        </p>
                                    ) : (
                                        <p className="text-green-600 font-semibold">
                                            {offer.title}
                                        </p>
                                    )}

                                    {/* ACTIONS */}
                                    <OfferActionButtons
  offer={offer}
  cart={cart}
  addToCart={addToCart}
  increaseQty={increaseQty}
  decreaseQty={decreaseQty}
/>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </section>
        </>
    );
}