import React from "react";
import { FavoriteData, FavoriteNot } from "@components/favorite-component";
import { useFavoriteFilter } from "@base/hooks/useFavoriteFilter";

const Favorite: React.FC = () => {
  const filterFavoirtes = useFavoriteFilter();

  return (
    <section className="h-full py-[50px]">
      <div className="container">
        <div>
          {filterFavoirtes?.length ? (
            <FavoriteData data={filterFavoirtes} />
          ) : (
            <FavoriteNot />
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorite;
