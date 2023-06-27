import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Swiper as SwiperType } from "swiper";
import image from "../../../assets/logo/logo.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface IProps {
  dataImages: ProductInfo;
}

function DetailImages({ dataImages }: IProps) {
  const { images } = dataImages;
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div>
      <div className="w-[420px]">
        <div className="w-full">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-top-detail"
          >
            {images!.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="image-block">
                  <img src={image} alt="Swiper-Image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-bottom-detail"
          >
            {images!.map((image, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={image} alt="Swiper-Image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DetailImages;
