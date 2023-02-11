import React from "react";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import { carModels_SVG } from "../../common/ReturnSVGData/ReturnSVG";
import SliderComponent from "../../hoc/SliderComponent/SliderComponent";
import style from "./carModelsSlider.module.scss";

const CarModelsSlider = () => {
  const settings = {
    className: "car_models_slider",
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 2,
  };

  return (
    <section className={style.car_models}>
      <ComponentConteiner>
        <h4 className={style.car_models__title}>Обслуживаем и ремонтируем</h4>
      </ComponentConteiner>
      <div className={style.car_models__slider}>
        <SliderComponent {...{ settings }}>
          {carModels_SVG.map((c, i) => (
            <div key={i}>
              <div className={style.car_models__slider_border}>
                <div className={style.car_models__slider_icon}>{c.svg}</div>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </section>
  );
};

export default CarModelsSlider;
