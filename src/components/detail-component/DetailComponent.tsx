import React from "react";
import { useAddProductCartMutation } from "@store/apiRTK/apiRTK";
import DetailRight from "./detail-right/DetailRight";
import DetailImages from "./detail-images/DetailImages";

interface IProps {
  data: IProduct;
  loading: boolean;
}

function DetailComponent({ data, loading }: IProps) {
  const [colorIndex, setColorIndex] = React.useState(0);
  const [selectSizeIndex, setSelectSizeIndex] = React.useState<number | null>(
    null
  );
  const [count, setCount] = React.useState(1);

  const { productInfo } = data;

  const dataImages = productInfo[colorIndex];

  const [addCartMutation, { data: cartData, isLoading, isError, error }] =
    useAddProductCartMutation();

  const handleCount = (num: number) => {
    if (selectSizeIndex === null) {
      alert("Siz razmerdi saylaniz!!!");
      return;
    }
    if (selectSizeIndex !== null) {
      setCount((prev) => prev + num);
    }
  };

  const addCart = async (data: ICart) => {
    await addCartMutation(data).unwrap();
  };

  return (
    <div>
      <div className="flex gap-[20px]">
        <div className="flex-[1] p-[5px]">
          {loading ? (
            <div className="flex flex-col gap-[10px] animate-pulse">
              <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded dark:bg-gray-700">
                <div>
                  <svg
                    className="w-[80px] h-[80px] text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-[5px]">
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <div key={i} className="flex items-center justify-center w-full h-[129px] bg-gray-300 rounded dark:bg-gray-700">
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
            <DetailImages dataImages={dataImages} />
          )}
        </div>
        <div className=" flex-[2] p-[5px]">
          <DetailRight
            data={data}
            colorIndex={colorIndex}
            setColorIndex={setColorIndex}
            selectSizeIndex={selectSizeIndex}
            setSelectSizeIndex={setSelectSizeIndex}
            count={count}
            setCount={setCount}
            handleCount={handleCount}
            addCart={addCart}
            isLoading={isLoading}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
