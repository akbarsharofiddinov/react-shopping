import ProductItem from "@components/products/productBody/productItem/ProductItem";

interface IProps {
  dataFavourite: IProduct[];
}

function FavouriteData({ dataFavourite }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] my-[3k0px]">
      {dataFavourite?.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
}

export default FavouriteData;
