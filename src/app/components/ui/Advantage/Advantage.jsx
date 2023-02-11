import React from "react";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import style from "./advantage.module.scss";

const Advantage = () => {
  return (
    <section className={style.advantage}>
      <ComponentConteiner>
        <div className={style.advantage__wrapper}>
          <div className={style.advantage__title}>
            <h2>Главное преимущество компании</h2> <span>#1</span>
          </div>

          <div className={style.advantage__content}>
            <article className={style.advantage__content_title}>
              <span>Работаем</span> <span>с 2012 года</span>
            </article>
            <article className={style.advantage__content_text}>
              <p>
                Вашим автомобилем будут заниматься люди с большим опытом,
                полученным за многие годы и прошедшие множество обучений.
              </p>
              <p>
                Сотрудники обладают огромным багажом знаний, применяемых на
                практике.
              </p>
            </article>
          </div>
        </div>
      </ComponentConteiner>
    </section>
  );
};

export default Advantage;
