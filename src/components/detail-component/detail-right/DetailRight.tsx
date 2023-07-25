import React from "react";
import clsx from "clsx";
import { BsFire } from "react-icons/bs";
import { currentPrice, discountPrice } from "@base/utils/infoPrice";
import { BsHeart, BsHeartFill, BsPlus, BsDash } from "react-icons/bs";
import { useEditFavoriteProductMutation } from "@store/apiRTK/apiRTK";

interface IProps {
  data: IProduct;
  colorIndex: number;
  setColorIndex: React.Dispatch<React.SetStateAction<number>>;
  selectSizeIndex: number | null;
  setSelectSizeIndex: React.Dispatch<React.SetStateAction<number | null>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleCount: (num: number) => void;
  addCart: (data: any) => void;
  isLoading: boolean;
  loading: boolean;
}

function DetailRight({
  data,
  colorIndex,
  setColorIndex,
  selectSizeIndex,
  setSelectSizeIndex,
  count,
  setCount,
  handleCount,
  addCart,
  isLoading,
  loading,
}: IProps) {
  const { productInfo, priceInfo, mainImg, name, salesman } = data;

  const { color, sizes } = productInfo[colorIndex];
  const { price, discount } = priceInfo;

  React.useEffect(() => {
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i].count) {
        setSelectSizeIndex(i);
        break;
      }
    }
  }, [colorIndex]);

  const [editProduct, status] = useEditFavoriteProductMutation()

  const clickProductFavorite = (product: IProduct) => {
    if (!product.isFovirite) {
      editProduct({ ...product, isFovirite: true });
    } else {
      editProduct({ ...product, isFovirite: false });
    }
  };

  return (
    <div>
      <div className="flex gap-[20px] justify-between border-b pb-[12px] md:pb-[20px] lg:pb-[30px]">
        <div className="flex flex-col gap-[10px] md:gap-[12px] lg:gap-[15px]">
          <div className="flex items-center gap-[10px] md:gap-[20px] lg:gap-[30px] justify-between">
            {loading ? (
              <div className="w-full h-[20px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
            ) : (
              <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">
                {data.name}
              </h1>
            )}
            {loading ? (
              <div className="w-full animate-pulse h-[20px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
            ) : (
              <div className="flex items-center gap-[5px]">
                <span className="flex cursor-pointer" onClick={() => clickProductFavorite(data)}>
                  {data.isFovirite ? (
                    <BsHeartFill className="text-[crimson] hover:!text-[crimson]" />
                  ) : (
                    <BsHeart className="text-slate-950 hover:!text-[crimson]" />
                  )}
                </span>
                <span>К желаниям</span>
              </div>
            )}
          </div>
          <ul className="flex flex-col gap-[5px]">
            {loading ? (
              <div className="h-[10px] animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] "></div>
            ) : (
              <li className="flex gap-[10px]">
                <span className="font-semibold">Продавец:</span>
                <span>{salesman}</span>
              </li>
            )}
            {loading ? (
              <div className="h-[10px] animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            ) : (
              <li className="flex gap-[10px]">
                <span className="font-semibold">Доставка:</span>
                <span>{data.delivery}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] py-[12px] md:py-[15px] lg:py-[20px]">
        <div>
          {loading ? (
            <div className="h-[10px] animate-pulse bg-gray-200 w-[200px] rounded-full dark:bg-gray-700 mb-[10px]"></div>
          ) : (
            <p className="flex gap-[10px] mb-[10px]">Цвет: {color}</p>
          )}
          {loading ? (
            <div>
              <div className="flex gap-[5px] w-[260px] animate-pulse">
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <div key={i} className="flex items-center justify-center w-full h-[82px] bg-gray-300 rounded dark:bg-gray-700">
                      <div>
                        <svg
                          className="w-[12x] h-[12px] text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-[6px]">
              {productInfo.map((productInfo, index) => (
                <button
                  key={productInfo.id}
                  className={clsx(
                    `w-[65px] h-[82px] flex items-center justify-center rounded-md overflow-hidden border p-[3px] cursor-pointer`,
                    colorIndex === index && "border-black border-[2px]",
                    selectSizeIndex !== null
                      ? productInfo.sizes[selectSizeIndex].count === 0 &&
                      "opacity-[.7] border-dashed"
                      : ""
                  )}
                  onClick={() => setColorIndex(index)}
                >
                  <img
                    src={productInfo.images[0]}
                    alt="image-info"
                    className="rounded-md w-full h-full flex"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          {loading ? (
            <div className="h-[10px] animate-pulse bg-gray-200 w-[200px] rounded-full dark:bg-gray-700 mb-[10px]"></div>
          ) : (
            <p className="flex gap-[10px] mb-[10px]">
              Размер: {selectSizeIndex !== null && sizes[selectSizeIndex].size}
            </p>
          )}
          {loading ? (
            <div className="w-[168px]">
              <div className="flex gap-[5px] animate-pulse">
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center w-[42px] h-[42px] bg-gray-300 rounded dark:bg-gray-700"
                    >
                      <div>
                        <svg
                          className="w-[7x] h-[7px] text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-[7px]">
              {sizes.map((size, index) => (
                <button
                  className={clsx(
                    "btn-size-select relative flex items-center justify-center rounded-md w-[42px] h-[42px] border-[1px] border-[#898989]",
                    size.count === 0 &&
                    "not-select-size border-dashed !cursor-not-allowed !opacity-[.7]",
                    selectSizeIndex === index && "!border-[2px] !border-[black]"
                  )}
                  key={index}
                  disabled={size.count === 0 ? true : false}
                  onClick={() => {
                    setSelectSizeIndex(index);
                    setCount(1);
                  }}
                >
                  {size.size}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="flex gap-[10px] mb-[10px]">
            Количество:{" "}
            {selectSizeIndex !== null && sizes[selectSizeIndex].count}
          </p>
          <div className="flex items-center gap-[20px]">
            <div className="inline-flex border rounded-md overflow-hidden">
              <button
                className={clsx(
                  "py-[12px] px-[12px] text-[20px] hover:bg-[#eee] transition flex items-center justify-center text-center",
                  count === 1 && "!cursor-not-allowed"
                )}
                disabled={count === 1 ? true : false}
                onClick={() => handleCount(-1)}
              >
                <BsDash />
              </button>
              <span className="py-[12px] px-[17px] text-[14px] flex items-center justify-center text-center">
                {count}
              </span>
              {/* <input
                type="number"
                className="w-[60px] text-center px-[10px]"
                value={count}
                min={1}
                onChange={changetCount}
              /> */}
              <button
                className={clsx(
                  "py-[12px] px-[12px] text-[20px] hover:bg-[#eee] transition flex items-center justify-center text-center",
                  selectSizeIndex !== null &&
                  sizes[selectSizeIndex].count === count &&
                  "!cursor-not-allowed"
                )}
                disabled={
                  selectSizeIndex !== null
                    ? sizes[selectSizeIndex].count === count
                    : false
                }
                onClick={() => handleCount(1)}
              >
                <BsPlus />
              </button>
            </div>
            <div className="flex gap-[4px] items-center text-[#550080]">
              <span>
                <BsFire />
              </span>
              <span>
                Осталось только{" "}
                {selectSizeIndex !== null && sizes[selectSizeIndex].count}
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="flex gap-[10px] mb-[10px]">
            Цена: {selectSizeIndex !== null && sizes[selectSizeIndex].count}
          </p>
          <div className="flex items-center gap-[20px]">
            <h1 className="text-[22px] font-bold">
              {(discount
                ? discountPrice(price, count, +discount)
                : currentPrice(price, count)
              ).toLocaleString("ru")}{" "}
              сум
            </h1>
            {discount && (
              <h5 className="opacity-[.7] line-through">
                {currentPrice(price, count).toLocaleString()} сум
              </h5>
            )}
          </div>
        </div>
        <div>
          <button
            className={clsx(
              "bg-slate-800 text-white text-[15px] uppercase py-[8px] px-[20px] rounded-md flex hover:bg-slate-950",
              isLoading && "!cursor-not-allowed opacity-[0.7]"
            )}
            disabled={isLoading ? true : false}
            onClick={() =>
              addCart({
                img: mainImg,
                name,
                salesman,
                size: selectSizeIndex !== null && sizes[selectSizeIndex].size,
                color,
                selectCount: count,
                count: selectSizeIndex !== null && sizes[selectSizeIndex].count,
                priceInfo,
              })
            }
          >
            {isLoading ? "Загрузка..." : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailRight;
