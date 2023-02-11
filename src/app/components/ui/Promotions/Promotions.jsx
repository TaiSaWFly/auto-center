import React, { useEffect, useMemo, useRef, useState } from "react";
import { sliderPromotions } from "../../../mockData/defautlData";
import Button from "../../common/ButtonComponent/Button";
import { ReactComponent as ChevronRight } from "../../../../assets/images/Icons/chevrons/chevron-right.svg";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import SliderComponent from "../../hoc/SliderComponent/SliderComponent";
import style from "./promotions.module.scss";
import { ReactComponent as ArrowLeft } from "../../../../assets/images/Icons/arrows/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/images/Icons/arrows/arrow-right.svg";
import ButtonAction from "../../common/ButtonComponent/ButtonAction/ButtonAction";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { useBlockDimensions } from "../../../hooks/useBlockDimensions";

const Promotions = () => {
  const refSlider = useRef();
  const imgRef = useRef();
  const promotionsAction = useRef();

  const { innerWidth } = useWindowDimensions();
  const {
    clientWidth: promotionsActionWidth,
    clientHeight: promotionsActionHeight,
  } = useBlockDimensions(promotionsAction);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const settings = {
    className: "promotions_slider",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const nextSlide = () => {
    refSlider.current.slickNext();
  };

  const prevSlide = () => {
    refSlider.current.slickPrev();
  };

  let resizeObserver = new ResizeObserver((e) => {
    setImageDimensions({
      width: e[0].target.clientWidth,
      height: e[0].target.clientHeight,
    });
  });

  useEffect(() => {
    resizeObserver.observe(imgRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [resizeObserver]);

  return (
    <section className={style.promotions}>
      <ComponentConteiner>
        <div className={style.promotions__group}>
          <h5 className={style.promotions__group_title}>Наши акции</h5>
          <div className={style.promotions__group_action}>
            <ButtonAction title="Все акции" />
          </div>
        </div>

        <div className={style.promotions__slider}>
          <SliderComponent referens={refSlider} {...{ settings }}>
            {sliderPromotions.map((p) => (
              <div key={p._id}>
                <div className={style.promotions__slider_wrapper}>
                  <div className={style.promotions__slider_image} ref={imgRef}>
                    <img src={require(`/src/${p.imgUrl}`)} alt="" />
                  </div>
                  <div className={style.promotions__slider_info}>
                    <div className={style.promotions__slider_info__content}>
                      {p.content}
                    </div>
                    <div className={style.promotions__slider_info__created}>
                      {p.created_at}
                    </div>

                    <div className={style.promotions__slider_info__action}>
                      <Button
                        className={style.promotions__slider_info__action_btn}
                      >
                        <ChevronRight
                          className={style.promotions__slider_info__action_icon}
                        />
                      </Button>

                      <div
                        className={style.promotions__slider_info__action_name}
                      >
                        Подробнее
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SliderComponent>

          <div
            ref={promotionsAction}
            style={
              innerWidth >= 925
                ? {
                    position: "absolute",
                    bottom: "0",
                    left: `${imageDimensions.width + 40}px`,
                  }
                : {
                    position: "absolute",
                    top: `${
                      imageDimensions.height - promotionsActionHeight / 2
                    }px`,
                    left: `${imageDimensions.width - promotionsActionWidth}px`,
                  }
            }
            className={style.promotions__slider_action}
          >
            <div
              onClick={prevSlide}
              className={style.promotions__slider_action_btn}
            >
              <div>
                <ArrowLeft />
              </div>
            </div>

            <div
              onClick={nextSlide}
              className={style.promotions__slider_action_btn}
            >
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </ComponentConteiner>
    </section>
  );
};

export default Promotions;
