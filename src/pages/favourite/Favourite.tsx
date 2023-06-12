import React from "react";
import { FavouriteData, FavouriteNoData } from "@components/fav-component";
import { useFilterProducts } from "@base/hooks/useFilterFavourite";

const Favourite: React.FC = () => {
  const filterFavourite = useFilterProducts();

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
