import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SliderComponent = ({ referens, settings, children }) => {
  return (
    <Slider ref={referens} {...settings}>
      {children}
    </Slider>
  );
};

export default SliderComponent;
