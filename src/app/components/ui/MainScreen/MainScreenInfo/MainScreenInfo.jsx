import React from "react";
import style from "./mainScreenInfo.module.scss";
import {
  telephone,
  workingHours,
  address,
} from "../../../../mockData/defautlData";
import Button from "../../../common/ButtonComponent/Button";
import { ReactComponent as ArrowDown } from "../../../../../assets/images/Icons/arrows/arrow-down.svg";

const MainScreenInfo = () => {
  return (
    <article className={style.main_screen_info}>
      <h1 className={style.main_screen_info__title}>
        специализированный автосервис
      </h1>

      <div className={style.main_screen_info__telephone}>{telephone}</div>

      <div className={style.main_screen_info__subtitle}>
        <div className={style.main_screen_info__subtitle_content}>
          <div>Работаем для вас:</div>
          <span>{workingHours}</span>
        </div>

        <address className={style.main_screen_info__subtitle_content}>
          <div>По адресу:</div>
          <span>{address}</span>
        </address>
      </div>

      <Button className={style.main_screen_info__action}>
        <span>Смотреть услуги</span>
        <div>
          <ArrowDown width="20px" height="20px" />
        </div>
      </Button>
    </article>
  );
};

export default MainScreenInfo;
