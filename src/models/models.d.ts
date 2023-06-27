interface PriceInfo {
  price: number;
  discount: boolean | number;
}

interface Size {
  size: number;
  count: number;
}

interface ProductInfo {
  id: number;
  color: string;
  sizes: Size[];
  images: string[];
}

interface IProduct {
  id: number;
  mainImg: string;
  name: string;
  priceInfo: PriceInfo;
  isFovirite: boolean;
  isInCart: boolean;
  salesman: string;
  delivery: string;
  productInfo: ProductInfo[];
  bought: number;
  etc: string[];
  desc: string[];
}

// Cart

interface ICart {
  color: string;
  count: number;
  img: string;
  name: string;
  priceInfo: PriceInfo;
  salesman: string;
  selectCount: number;
  size: number;
}
