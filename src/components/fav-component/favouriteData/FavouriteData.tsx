import ProductItem from "@components/products/productBody/productItem/ProductItem";

interface IProps {
  dataFavourite: IProduct[];
}

function FavouriteData({ dataFavourite }: IProps) {
  return (
    <div className="grid grid-cols-4 gap-[20px]">
      {dataFavourite?.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
}

export default FavouriteData;
