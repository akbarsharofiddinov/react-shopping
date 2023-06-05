interface PriceInfo {
  price: number;
  discount: boolean;
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
  isFavorite: boolean;
  isInCart: boolean;
  salesman: string;
  delivery: string;
  productInfo: ProductInfo[];
  bought: number;
  etc: string[];
  desc: string[];
}

interface IFavArr {
  id: number,
  isFav: boolean
}