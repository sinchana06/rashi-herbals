import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type Product = {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  discountedPrice?: number;
};

export type CartItem = Product & {
  quantity: number;
  isFree?: boolean;
  offerId?: string;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQty: (id: string | number) => void;
  decreaseQty: (id: string | number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // ✅ LOAD FROM LOCALSTORAGE INITIALLY
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ SAVE TO LOCALSTORAGE ON CHANGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

const addToCart = (
  product,
  extra?: {
    isFree?: boolean;
    offerId?: string;
    offerType?: "DISCOUNT" | "BUY_X_GET_Y";
    discountPercent?: number;
  }
) => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === product.id);

    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              isFree: item.isFree || extra?.isFree || false,
              offerId: extra?.offerId ?? item.offerId,
              offerType: extra?.offerType ?? item.offerType,
              discountPercent:
                extra?.discountPercent ?? item.discountPercent,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
        isFree: extra?.isFree ?? false,
        offerId: extra?.offerId ?? null,
        offerType: extra?.offerType ?? null,
        discountPercent: extra?.discountPercent ?? null,
      },
    ];
  });
};

  const increaseQty = (id: string | number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string | number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // optional but clean
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};