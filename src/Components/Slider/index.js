import React from "react";
import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "../Cards";
import layer1 from "../../assets/layer1.svg";
import layer2 from "../../assets/layer2.svg";
import layer3 from "../../assets/layer3.svg";

const Slider = () => {
  return (
    <div className={styles.conatiner}>
      <Swiper
        loop={true} 
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Cards
            img={layer1}
            text={"Buy Now with Make Offer"}
            info={
              "Your equipment will be listed at the price you set. Buyers will be able to send you offers."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            img={layer2}
            text={"Absolute Auction"}
            info={
              "Your equipment will sell to the highest bidder - no matter the amount."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            img={layer3}
            text={"Classified Listing"}
            info={"(Only for admin)"}
          />
        </SwiperSlide>
   
  
      </Swiper>
    </div>
  );
};

export default Slider;
