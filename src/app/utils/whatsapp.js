export const sendCartToWhatsApp = (cart) => {
  const phone = "918884764747"; // your number

  const message =
    "🛒 *Order Details:*\n\n" +
    cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`
      )
      .join("\n") +
    "\n\n💰 *Total:* ₹" +
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0) +
    "\n\nPlease confirm my order.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

