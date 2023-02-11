import React from "react";
import Button from "../../../common/ButtonComponent/Button";
import { email, workingHours } from "../../../../mockData/defautlData";
import style from "./footerInfo.module.scss";
import SocialComponent from "../../../common/SocialComponent/SocialComponent";

const FooterInfo = () => {
  return (
    <div className={style.footer_info}>
      <div className={style.footer_info__content}>
        <div className={style.footer_info__content_wrapper}>
          <div className={style.footer_info__email}>
            <span>{email}</span>
          </div>

          <div className={style.footer_info__time}>
            <span>Работаем для вас:</span>
            <span>{workingHours}</span>
          </div>
        </div>

        <div className={style.footer_info__action}>
          <Button className={style.footer_info__action_first}>
            Обратный звонок
          </Button>
          <Button className={style.footer_info__action_second}>
            Контроль качества
          </Button>
        </div>
      </div>

      <div className={style.footer_info__social}>
        <SocialComponent isDark={false} />
      </div>
    </div>
  );
};

export default FooterInfo;
