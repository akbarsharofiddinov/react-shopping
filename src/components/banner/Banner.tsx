import React from "react";
import { useGetBannersQuery } from "@store/apiRTK/apiRTK";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Loading from "./Loading";

import ErrorNotFound from "./ErrorNotFoun";
import NotData from "./NotData";
import ServerError from "./ServerError";
import "swiper/css/pagination";

const Banner: React.FC = () => {
  const { data, isLoading, isError } = useGetBannersQuery();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ServerError />
      ) : data ? (
        data.length ? (
          <Swiper
            loop={true}
            autoplay
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="!pb-8"
          >
            {data?.map((banner, index) => (
              <SwiperSlide key={`${banner}_${index}`}>
                <div className="flex w-full h-[210px] md:h-[300px] lg:h-[450px]">
                  <img
                    src={banner}
                    alt="BANNER-IMG"
                    className="flex w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <NotData />
        )
      ) : (
        <ErrorNotFound />
      )}
    </div>
  );
};

export default Banner;
