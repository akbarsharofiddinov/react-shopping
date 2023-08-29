import React from "react";

// Banner Request

import { useGetBannersQuery } from "@store/apiRTK/apiRTK";

// Swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper";
import "swiper/css/pagination";

// Loading & Errors

import Loading from "./Loading";
import ErrorNotFound from "./ErrorNotFoun";

import NotData from "./NotData";
import ServerError from "./ServerError";

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
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            loop={true}
            autoplay
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectCreative]}
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
