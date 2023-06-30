import { BsBagPlus, BsHeart, BsHeartFill } from "react-icons/bs";
import { handleFavorite } from "@store/favoriteSlice/favoriteSlice";
import { useEditFavoriteProductMutation } from "@store/apiRTK/apiRTK";
import { Link } from "react-router-dom";
import { scrollToTop } from "@base/utils/scrollTop";
import "./productStyle.scss"

interface IProps {
  data: IProduct;
}

function ProductItem({ data }: IProps) {
  const [editProduct, { isLoading, isError }] =
    useEditFavoriteProductMutation();

  const clickProductFavorite = (product: IProduct) => {
    if (!product.isFovirite) {
      editProduct({ ...product, isFovirite: true });
    } else {
      editProduct({ ...product, isFovirite: false });
    }
  };

  return (
    <div className="bg-[#efefef] hover:shadow-lg transition overflow-hidden relative" id="product">
      <div className="flex flex-col  items-center justify-center relative">
        <span
          onClick={() => clickProductFavorite(data)}
          className="flex cursor-pointer items-center justify-center absolute z-[999] top-[15px] right-[15px] text-[15px] md:text-[18px] lg:text-[20px] transition"
        >
          {data.isFovirite ? (
            <BsHeartFill className="text-[crimson] hover:!text-[crimson]" />
          ) : (
            <BsHeart className="text-slate-950 hover:!text-[crimson]" />
          )}
        </span>
        <img
          className="flex w-full h-full rounded-lg"
          src={data.mainImg}
          alt={data.name}
        />
      </div>
      <div className="p-[10px] flex flex-col gap-[20px] md:gap-5 justify-between">
        <div className="flex flex-col items-start justify-between gap-[13px] md:gap-[5px] h-[77px]">
          <p className="text-[12px] sm:text-[13px] md:text-[15px]">
            {data.name.substring(0, 100)}...
          </p>
          <span className="text-[11px] py-[2px] px-[5px] md:text-[12px] bg-amber-200 md:py-[3px] md:px-[6px] rounded-[3px]">
            {Math.ceil(data.priceInfo.price / 3).toLocaleString()} сум/месяц
          </span>
        </div>
        <div className="h-[55px] flex items-center justify-between gap-2">
          <div>
            {data.priceInfo.discount ? (
              <>
                <p className="line-through text-[11px] md:text-[12px] text-[#9f9f9f] ">
                  {data.priceInfo.price.toLocaleString()} сум
                </p>
                <p className="text-[14px] md:text-[16px] font-semibold">
                  {(
                    data.priceInfo.price -
                    (data.priceInfo.price * +data.priceInfo.discount) / 100
                  ).toLocaleString()}
                  сум
                </p>
              </>
            ) : (
              <>
                <p className="text-[14px] md:text-[16px] font-semibold">
                  {data.priceInfo.price.toLocaleString()} сум
                </p>
              </>
            )}
          </div>
          <button className="flex border w-[33px] h-[33px] rounded-full items-center justify-center text-[16px] md:text-[19px] lg:text-[22px]  md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] hover:bg-[#eee] transition">
            <BsBagPlus className="!block" />
          </button>
        </div>
      </div>
      <Link
        to={`/detail/${data.id}`}
        className="absolute top-0 left-0 right-0 bottom-0"
        onClick={scrollToTop}
      ></Link>
    </div>
  );
}

export default ProductItem;
