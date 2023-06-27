import React from "react";
import { useAppSelector } from "@store/hooks/hookRedux";
import { useGetProductsQuery } from "@store/apiRTK/apiRTK";
import ProductItem from "@components/productItem/ProductItem";
import NotComponent from "@components/not-component/NotComponent";
import NotProduct from "@assets/not-products/not-products.svg";

const ProductsData: React.FC = () => {
  const { searchQuery } = useAppSelector((state) => state.searchQuerySlice);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery(searchQuery);

  //   if (isLoading) {
  //     return <h1>loading....</h1>;
  //   }

  //   if (isError) {
  //     return <h1>Error....</h1>;
  //   }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : products?.length ? (
        <div className="py-[20px] grid gap-[8px] md:gap-3 lg:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <NotComponent
          img={NotProduct}
          title="Ничего не найдено"
          description="Извините, ваш поиск не дал результатов. Проверьте введенную информацию или попробуйте изменить запрос."
          isButton={false}
        />
      )}
    </div>
  );
};

export default ProductsData;
