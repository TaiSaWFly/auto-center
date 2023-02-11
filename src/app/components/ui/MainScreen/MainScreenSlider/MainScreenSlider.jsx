import React, { useState } from "react";
import { sliderImages } from "../../../../mockData/defautlData";
import style from "./mainScreenSlider.module.scss";
import { ReactComponent as ArrowLeft } from "../../../../../assets/images/Icons/arrows/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../../../assets/images/Icons/arrows/arrow-right.svg";
import SliderComponent from "../../../hoc/SliderComponent/SliderComponent";
import ArrowComponent from "../../../common/ArrowComponent/ArrowComponent";

const MainScreenSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "main_screen_slider",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: (
      <ArrowComponent>
        <div>
          <ArrowRight />
        </div>
      </ArrowComponent>
    ),
    prevArrow: (
      <ArrowComponent>
        <div>
          <ArrowLeft />
        </div>
      </ArrowComponent>
    ),
  };

  return (
    <div className={style.main_screen_slider}>
      <div className={style.main_screen_slider__wrapper}>
        <SliderComponent {...{ settings }}>
          {sliderImages.map((s) => (
            <div key={s._id}>
              <img src={require(`/src/${s.imgUrl}`)} alt="" />
            </div>
          ))}
        </SliderComponent>

        <div className={style.main_screen_slider__counter}>
          {activeSlide + 1}/{sliderImages.length}
        </div>
      </div>
    </div>
  );
};

export default MainScreenSlider;
