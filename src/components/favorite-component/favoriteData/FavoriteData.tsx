import ProductItem from "@components/productItem/ProductItem";

interface IProps {
  data: IProduct[];
}

function FavoriteData({ data }: IProps) {
  console.log(data);
  return (
    <div className="py-[20px] grid gap-[8px] md:gap-3 lg:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {data.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
}

export default FavoriteData;
