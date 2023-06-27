import { useGetProductsQuery } from "@store/apiRTK/apiRTK";

export const useFavoriteFilter = (): IProduct[] => {
  const { data } = useGetProductsQuery();

  return data?.filter((product) => product.isFovirite === true) as IProduct[];
};
