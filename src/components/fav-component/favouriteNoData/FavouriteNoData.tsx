import React from "react";
import { Link } from "react-router-dom";
import no_favourite from "@assets/images/no_favourite.svg";

const FavouriteNoData: React.FC = () => {
  return (
    <div className="flex items-start justify-center min-h-screen">
      <div className="flex items-center justify-center bg-[#f7f7f7] w-full">
        <div className="flex flex-col items-center justify-center gap-[25px] py-10 w-[400px]">
          <img
            src={no_favourite}
            alt="No Favourite"
            className="w-[150px] h-[150px]"
          />
          <div className="text-center flex flex-col gap-[15px]">
            <h1 className="text-[#333] text-[30px] font-bold">
              Нет любимых продуктов
            </h1>
            <p className="text-[#999] text-[20px] flex items-start flex-col gap-2 mt-5">
              Если вы хотите добавить несколько любимых продуктов, перейдите на
              главную страницу.
              <button className="border-2 w-[250px] mx-auto mt-10 py-3 rounded-[10px] transition hover:bg-[#d5efff]">
                <Link to="/" className="text-[#49b7f7] text-[18px] font-bold">
                  Перейти на главную
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteNoData;
