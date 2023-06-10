import React from "react";
import { Link } from "react-router-dom";
import no_favourite from "@assets/images/no_favourite.svg";

const FavouriteNoData: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 min-h-[60vh]">
      <img
        src={no_favourite}
        alt="No Favourite"
        className="w-[200px] h-[200px]"
      />
      <div className="text-center">
        <h1 className="text-[35px] font-bold">
          There is no Favourite Products
        </h1>
        <p className="text-[20px] flex flex-col gap-2 mt-5">
          If you want to add some Favourite Products, Please go to Home page
          <Link
            to="/"
            className="text-[royalblue] text-[25px] font-bold underline"
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FavouriteNoData;
