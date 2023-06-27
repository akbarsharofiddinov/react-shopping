export const currentPrice = (price: number, count: number): number =>
  price * count;

export const discountPrice = (
  price: number,
  count: number,
  discount: number
): number => price * count * (1 - discount / 100);
