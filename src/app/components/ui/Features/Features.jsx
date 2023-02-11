import React from "react";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import style from "./features.module.scss";
import { ReactComponent as Assurance } from "../../../../assets/images/Icons/features/assurance.svg";
import { ReactComponent as Persone } from "../../../../assets/images/Icons/features/persone.svg";
import { ReactComponent as WiFiZone } from "../../../../assets/images/Icons/features/wi-fi-zone.svg";
import { ReactComponent as Service } from "../../../../assets/images/Icons/features/service.svg";

const featuresInfo = [
  {
    icon: <Assurance />,
    name: `Гарантия работы\n1 год`,
  },
  {
    icon: <Persone />,
    name: `Квалифицированные\nсотрудники`,
  },
  {
    icon: <WiFiZone />,
    name: `Комфортные\nзоны ожидания`,
  },
  {
    icon: <Service />,
    name: `Современное\nоборудование`,
  },
];

const Features = () => {
  return (
    <section className={style.features}>
      <ComponentConteiner>
        <article className={style.features__wrapper}>
          <div className={style.features__content}>
            <div className={style.features__content_title}>
              Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках
              специалистов послегарантийного ремонта и технического обслуживания
              автомобилей.
            </div>
            <p>
              Чтобы автомобиль всегда оставался в отличной форме, необходимо
              выполнять регулярное ТО по программе рекомендованной
              производителем.
            </p>
            <p>
              Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет
              производить обслуживание вашего автомобиля С СОХРАНЕНИЕМ ГАРАНТИИ.
            </p>
          </div>
          <div className={style.features__content}>
            <div className={style.features__content_item__wrapper}>
              {featuresInfo.map((f, i) => (
                <div key={i} className={style.features__content_item}>
                  <div className={style.features__content_item__icon}>
                    {f.icon}
                  </div>

                  <div className={style.features__content_item__name}>
                    {f.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </ComponentConteiner>
    </section>
  );
};

export default Features;
