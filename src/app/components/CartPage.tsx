import { OFFERS } from "../constants/offers";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, clearCart } = useCart();
  const navigate = useNavigate();

  const whatsappNumber = "918884764747";

  // 🧠 GROUP CART BY OFFER
  const grouped = cart.reduce((acc: any, item: any) => {
    const key = item.offerId || `product_${item.id}`;

    if (!acc[key]) {
      acc[key] = {
        items: [],
        offer: null,
      };
    }

    acc[key].items.push(item);
    return acc;
  }, {});

  // attach offer object
  Object.keys(grouped).forEach((key) => {
    const firstItem = grouped[key].items[0];
    grouped[key].offer =
      OFFERS.find((o) => o.id === firstItem.offerId) || null;
  });

  // 💰 TOTAL PRICE
  let totalPrice = 0;

  Object.values(grouped).forEach(({ items, offer }: any) => {
    const subtotal = items.reduce((sum: number, item: any) => {
      if (item.isFree) return sum;
      return sum + (item.discountedPrice || item.price) * item.quantity;
    }, 0);

    if (offer?.type === "DISCOUNT") {
      const discountAmount = (subtotal * offer.discountPercent) / 100;
      totalPrice += Math.round(subtotal - discountAmount);
    } else {
      totalPrice += subtotal;
    }
  });

  // 📱 WHATSAPP MESSAGE
  const handleBuyNow = () => {
    const message =
      "🛒 *Order Details:*\n\n" +
      Object.values(grouped)
        .map(({ items, offer }: any) => {
          const subtotal = items.reduce((sum: number, item: any) => {
            if (item.isFree) return sum;
            return sum + (item.discountedPrice || item.price) * item.quantity;
          }, 0);

          if (offer?.type === "DISCOUNT") {
            const discountAmount =
              (subtotal * offer.discountPercent) / 100;

            return (
              `🔥 ${offer.title}\n` +
              items
                .map((item: any) =>
                  `- ${item.name} x ${item.quantity} - ₹${
                    item.price * item.quantity
                  }`
                )
                .join("\n") +
              `\n💰 Subtotal: ₹${subtotal}` +
              `\n🔥 Discount: ${offer.discountPercent}% (-₹${discountAmount})` +
              `\n💳 Final: ₹${subtotal - discountAmount}`
            );
          }

          return items
            .map((item: any) =>
              item.isFree
                ? `- ${item.name} 🎁 FREE`
                : `- ${item.name} x ${item.quantity} - ₹${
                    (item.discountedPrice || item.price) * item.quantity
                  }`
            )
            .join("\n");
        })
        .join("\n\n") +
      `\n\n💰 *Total:* ₹${totalPrice}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:underline"
        >
          ← Continue Shopping
        </button>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <>
          {/* GROUPED ITEMS */}
          <div className="space-y-6">

            {Object.values(grouped).map(
              ({ items, offer }: any, idx: number) => {
                const subtotal = items.reduce(
                  (sum: number, item: any) => {
                    if (item.isFree) return sum;
                    return (
                      sum +
                      (item.discountedPrice || item.price) *
                        item.quantity
                    );
                  },
                  0
                );

                const discountAmount =
                  offer?.type === "DISCOUNT"
                    ? (subtotal * offer.discountPercent) / 100
                    : 0;

                const finalTotal = subtotal - discountAmount;

                return (
                  <div
                    key={idx}
                    className="border rounded-xl p-4 bg-white shadow-sm"
                  >
                    {/* OFFER HEADER */}
                    {offer && (
                      <div className="mb-3">
                        <h2 className="font-bold text-lg">
                          {offer.title}
                        </h2>

                        {offer.type === "DISCOUNT" && (
                          <div className="text-sm text-green-700 bg-green-50 p-2 rounded mt-1">
                            🎉 {offer.discountPercent}% Discount Applied — You save ₹
                            {Math.round(discountAmount)}
                          </div>
                        )}
                      </div>
                    )}

                    {/* ITEMS */}
                    <div className="space-y-3">
                      {items.map((item: any) => (
                        <div
                          key={`${item.id}-${item.offerId}`}
                          className="flex items-center justify-between"
                        >
                          <img
                            src={item.image}
                            className="w-16 h-16 object-contain"
                          />

                          <div className="flex-1 px-4">
                            <h2 className="font-semibold">
                              {item.name}
                            </h2>

                            {item.isFree ? (
                              <p className="text-green-600 font-semibold">
                                🎁 Free Item
                              </p>
                            ) : item.discountedPrice &&
                              item.discountedPrice < item.price ? (
                              <div className="text-sm">
                                <span className="line-through text-gray-400 mr-2">
                                  ₹{item.price}
                                </span>
                                <span className="text-green-600 font-semibold">
                                  ₹{item.discountedPrice} each
                                </span>
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500">
                                ₹{item.price} each
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {!item.isFree ? (
                              <>
                                <button
                                  onClick={() =>
                                    decreaseQty(item.id)
                                  }
                                  className="px-2 border"
                                >
                                  -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                  onClick={() =>
                                    increaseQty(item.id)
                                  }
                                  className="px-2 border"
                                >
                                  +
                                </button>
                              </>
                            ) : (
                              <span className="text-green-600 font-semibold">
                                FREE
                              </span>
                            )}
                          </div>

                          <div className="font-semibold ml-6">
                            {item.isFree
                              ? "FREE"
                              : `₹${
                                  (item.discountedPrice ||
                                    item.price) *
                                  item.quantity
                                }`}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* GROUP TOTAL */}
                    <div className="mt-4 border-t pt-3 flex justify-between">
                      <span className="font-semibold">
                        Group Total
                      </span>

                      <div className="text-right">
                        {offer?.type === "DISCOUNT" && (
                          <p className="text-sm text-gray-400 line-through">
                            ₹{subtotal}
                          </p>
                        )}
                        <p className="font-bold text-green-700">
                          ₹{Math.round(finalTotal)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* SUMMARY */}
          <div className="mt-8 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Total: ₹{totalPrice}
            </h2>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="px-4 py-2 border rounded text-gray-600"
              >
                Clear Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="px-6 py-2 bg-green-600 text-white rounded-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}