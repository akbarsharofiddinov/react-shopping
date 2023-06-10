import React from "react";
import { useGetProductsQuery } from "@store/apiRTK/apiRTK";
import { FavouriteData, FavouriteNoData } from "@components/fav-component";

const Favourite: React.FC = () => {
  const { data } = useGetProductsQuery();
  const filterFavourite = data?.filter(
    (product) => product.isFavorite === true
  );

  return (
    <section className="section-app">
      <div className="container">
        {filterFavourite?.length ? (
          <FavouriteData dataFavourite={filterFavourite} />
        ) : (
          <FavouriteNoData />
        )}
      </div>
    </section>
  );
};

export default Favourite;
