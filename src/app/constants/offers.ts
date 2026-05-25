import { Product } from "./products";
import { PRODUCTS } from "./products";
import offer2Image from "../assets/offer2.png";
import offer3Image from "../assets/offer3.png";
import offer4Image from "../assets/offer4.png";
export type Offer =
  | {
      id: string;
      type: "BUY_X_GET_Y";
      title: string;
      description: string;
      buyQty: number;
      getQty: number;
      products: Product[];
      bannerImage: string;
      slug: string;
    }
  | {
      id: string;
      type: "DISCOUNT";
      title: string;
      description: string;
      discountPercent: number;
      products: Product[];
      bannerImage: string;
      slug: string;
    };

export const OFFERS: Offer[] = [
  {
    id: "offer2",
    type: "BUY_X_GET_Y",
    title: "Buy 2 Get 2 FREE",
    description: "On selected herbal wellness products",
    buyQty: 2,
    getQty: 2,
    products: [
        PRODUCTS[1],
        PRODUCTS[7],
        PRODUCTS[8],
        PRODUCTS[3]
    ],
    bannerImage: offer2Image,
    slug: "buy-2-get-2"
  },
  {
    id: "offer3",
    type: "DISCOUNT",
    title: "Flat 20% OFF",
    description: "On immunity booster range",
    discountPercent: 19.8,
    products: [
PRODUCTS[8],
PRODUCTS[1],
PRODUCTS[2]
    ],
    bannerImage: offer3Image,
    slug: "20-percent-off"
  },
    {
    id: "offer4",
    type: "DISCOUNT",
    title: "Flat 33% OFF",
    description: "On immunity booster range",
    discountPercent: 33.33,
    products: [
        PRODUCTS[0],
        PRODUCTS[1],
        PRODUCTS[9],
    ],
    bannerImage: offer4Image,
    slug: "33.33-percent-off"
  },
      {
    id: "offer5",
    type: "DISCOUNT",
    title: "Flat 19% OFF",
    description: "On immunity booster range",
    discountPercent: 18.8,
    products: [
        PRODUCTS[8],
PRODUCTS[1],
PRODUCTS[3]
    ],
    bannerImage: offer3Image,
    slug: "18.8-percent-off"
  }
];