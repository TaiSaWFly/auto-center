import React from "react";
import style from "./carService.module.scss";
import { carServiceMenu } from "../../../mockData/menus.js";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import { definedLengthArray } from "../../../utils/definedLengthArray.js";
import { ReactComponent as ChevronRight } from "../../../../assets/images/Icons/chevrons/chevron-right.svg";
import Button from "../../common/ButtonComponent/Button";

const CarService = () => {
  const definedMenu = definedLengthArray(carServiceMenu);

  return (
    <section className={style.car_service}>
      <ComponentConteiner>
        <h3 className={style.car_service__title}>Услуги автосервиса</h3>

        <article className={style.car_service__wrapper}>
          {definedMenu.map((m) => (
            <div key={m._id} className={style.car_service__item_wrapper}>
              <div className={style.car_service__item}>
                <div className={style.car_service__item_image}>
                  <img src={require(`/src/${m.imgUrl}`)} alt="" />
                </div>
                <div className={style.car_service__item_info}>
                  <div className={style.car_service__item_info__wrapper}>
                    <span>{m.name}</span>
                    <span className={style.car_service__item_code}>
                      {m.serviceCode}
                    </span>
                  </div>

                  <Button className={style.car_service__item_action}>
                    <ChevronRight
                      className={style.car_service__item_action_icon}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </article>
      </ComponentConteiner>
    </section>
  );
};

export default CarService;
