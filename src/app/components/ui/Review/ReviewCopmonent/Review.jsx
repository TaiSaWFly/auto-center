import React from "react";
import ComponentConteiner from "../../../common/ComponentConteiner/ComponentConteiner";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import style from "./review.module.scss";

const Review = () => {
  return (
    <section className={style.review}>
      <ComponentConteiner>
        <div className={style.review__group}>
          <h6 className={style.review__group_title}>
            Отзывы пользователей <br /> об Автоцентре
          </h6>

          <div className={style.review__group_rating}>4.6</div>
          <div className={style.review__group_rating_name}>средняя оценка</div>
        </div>

        <ReviewSlider />
      </ComponentConteiner>
    </section>
  );
};

export default Review;
