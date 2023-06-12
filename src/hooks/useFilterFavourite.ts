import { useGetProductsQuery } from "@store/apiRTK/apiRTK";

export const useFilterProducts = (): IProduct[] | undefined => {
  const { data } = useGetProductsQuery();
  const filterFavourite = data?.filter(
    (product) => product.isFavorite === true
  );

  return filterFavourite;
};
