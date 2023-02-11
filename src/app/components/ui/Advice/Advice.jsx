import React, { useState } from "react";
import { toggleScroll } from "../../../utils/toggleScroll";
import ButtonAction from "../../common/ButtonComponent/ButtonAction/ButtonAction";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import FeedbackForm from "../Form/FeedbackForm/FeedbackForm";
import style from "./advice.module.scss";

const Advice = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
    toggleScroll(isOpenModal);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    toggleScroll(isOpenModal);
  };

  return (
    <>
      <section className={style.advice}>
        <ComponentConteiner>
          <article className={style.advice__wrapper}>
            <div className={style.advice_title}>Получить консультацию</div>

            <div className={style.advice_content}>
              <p>
                Оставьте заявку, и наш мастер перезвонит вам, произведет
                предварительную оценку стоимости услуг и запчастей, и подберет
                удобное время для визита.
              </p>

              <ButtonAction
                title="Оставить заявку"
                handleAction={handleOpenModal}
              />
            </div>
          </article>
        </ComponentConteiner>
      </section>

      {isOpenModal && <FeedbackForm {...{ handleCloseModal }} />}
    </>
  );
};

export default Advice;
