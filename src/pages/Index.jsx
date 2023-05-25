import React from "react";
import Main from "../components/common/Main";
import ProductCard from "../components/common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const Index = () => {
  return (
    <Main>
      <div className="product-list">
        <Swiper
          loop={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          style={{ height: "500px" }}
          className="rounded-lg"
        >
          <SwiperSlide className="object-contain">
            <img src="image1.jpg" alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image2.jpg" alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image3.jpg" alt="Image 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="image4.jpg" alt="Image 4" />
          </SwiperSlide>
        </Swiper>
        <ProductCard />
      </div>
    </Main>
  );
};

export default Index;
