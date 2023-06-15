import React from "react";
import { useSetFavouriteProductMutation } from "@store/apiRTK/apiRTK";
import { BsCart2, BsHeart, BsHeartFill } from "react-icons/bs";
import "./style.scss"
import { Link } from "react-router-dom";
import scrollTop from "@base/utils/scrollTop";

interface IProps {
  data: IProduct;
}

const ProductItem: React.FC<IProps> = ({ data }: IProps) => {
  const [handleFavourite] = useSetFavouriteProductMutation();

  const clickFavourite = (data: IProduct) => {
    if (!data.isFavorite) {
      handleFavourite({ ...data, isFavorite: true });
    } else {
      handleFavourite({ ...data, isFavorite: false });
    }
  };

  return (
    <div className="flex flex-col relative bg-[#EFEFEF] cursor-pointer overflow-hidden rounded-[10px] shadow-[0px 2px 4px rgba(0, 0, 0, .2)]" id="product_item">
      <div className="top flex justify-center relative">
        <div
          className="absolute top-4 right-4 bg-[#fffafa73] w-[40px] h-[40px] flex items-center justify-center rounded-[20px] z-40 cursor-pointer"
          onClick={() => { clickFavourite(data) }}
        >
          {data.isFavorite ? (
            <BsHeartFill className="text-[20px] text-red-600 z-40" />
          ) : (
            <BsHeart className="text-[20px] z-50" />
          )}
        </div>
        <img
          src={data.mainImg}
          alt="product-img"
          className="w-[300px] h-[300px] object-contain"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 items-start">
        <h1 className="">
          {data.name.length > 25
            ? data.name.substring(0, 25) + "..."
            : data.name}
        </h1>
        <span className="text-[14px] bg-yellow-200 py-1 px-2 rounded-[8px]">
          {Math.ceil(data.priceInfo.price / 3).toLocaleString("ru")} сум / месяц
        </span>
        {data.priceInfo.discount &&
          typeof data.priceInfo.discount === "number" ? (
          <div className="flex items-center justify-between pr-3 w-full">
            <div>
              <p className="line-through">
                {data.priceInfo.price.toLocaleString("ru")} сум
              </p>
              <p>
                {(
                  data.priceInfo.price -
                  (data.priceInfo.price * data.priceInfo.discount) / 100
                ).toLocaleString("ru")}{" "}
                сум
              </p>
            </div>
            <button className="flex items-center justify-center text-[20px] border-[2px] border-[#dddddd] p-2 w-[40px] h-[40px] rounded-[50%]">
              <BsCart2 />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div>
              <br />
              <p>{data.priceInfo.price.toLocaleString("ru")} сум</p>
            </div>
            <button className="flex items-center justify-center text-[20px] border-[2px] border-[#dddddd] p-2 w-[40px] h-[40px] rounded-[50%]">
              <BsCart2 />
            </button>
          </div>
        )}
      </div>
      <Link to={`detail/${data.id}`} onClick={scrollTop} className="absolute top-0 left-0 right-0 bottom-0"></Link>
    </div>
  );
};

export default ProductItem;
