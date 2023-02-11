import React, { useRef } from "react";
import { sliderReviews } from "../../../../mockData/defautlData";
import SliderComponent from "../../../hoc/SliderComponent/SliderComponent";
import style from "./reviewSlider.module.scss";
import { ReactComponent as Persone } from "../../../../../assets/images/Icons/system/user.svg";
import { ReactComponent as StarFill } from "../../../../../assets/images/Icons/system/star-filled.svg";
import { ReactComponent as ArrowLeft } from "../../../../../assets/images/Icons/arrows/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../../../assets/images/Icons/arrows/arrow-right.svg";
import { returnStarsRating } from "../../../../utils/returnStarsRating";

const ReviewSlider = () => {
  const refSlider = useRef();

  const settings = {
    className: "review_slider",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const nextSlide = () => {
    refSlider.current.slickNext();
  };

  const prevSlide = () => {
    refSlider.current.slickPrev();
  };

  return (
    <div className={style.review_slider}>
      <SliderComponent referens={refSlider} {...{ settings }}>
        {sliderReviews.map((r) => (
          <div key={r._id}>
            <div className={style.review_slider__wrapper}>
              <div className={style.review_slider__content_wrapper}>
                <div className={style.review_slider__content_info}>
                  <div className={style.review_slider__content_avatar}>
                    <div>
                      <Persone />
                    </div>
                  </div>
                  <div>
                    <div className={style.review_slider__content_user_name}>
                      {r.userName}
                    </div>
                    <div className={style.review_slider__content_created}>
                      {r.created_at}
                    </div>
                    <div className={style.review_slider__content_rating}>
                      {returnStarsRating(
                        5,
                        <StarFill width="16px" height="16px" />
                      ).map((s, i) => (
                        <div key={i}>{s}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={style.review_slider__content}>{r.content}</p>
              </div>
            </div>
          </div>
        ))}
      </SliderComponent>

      <div className={style.review_slider__action}>
        <div onClick={prevSlide} className={style.review_slider__action_btn}>
          <div>
            <ArrowLeft />
          </div>
        </div>

        <div onClick={nextSlide} className={style.review_slider__action_btn}>
          <div>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
