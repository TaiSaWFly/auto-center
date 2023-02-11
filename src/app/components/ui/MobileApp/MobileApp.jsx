import React from "react";
import {
  mobileAppFeatures,
  mobileAppMagazine,
  mobileImgIPhoneUrl,
} from "../../../mockData/defautlData";
import ComponentConteiner from "../../common/ComponentConteiner/ComponentConteiner";
import { ReactComponent as Check } from "../../../../assets/images/Icons/system/check.svg";
import style from "./mobileApp.module.scss";

const MobileApp = () => {
  return (
    <section className={style.mobile_app}>
      <ComponentConteiner>
        <article className={style.mobile_app__wrapper}>
          <div className={style.mobile_app__image}>
            <img src={require(`/src/${mobileImgIPhoneUrl}`)} alt="" />
          </div>

          <div className={style.mobile_app__info}>
            <div className={style.mobile_app__info_wrapper}>
              <div className={style.mobile_app__info_title}>
                Скачивайте наше мобильное приложение
              </div>

              {mobileAppFeatures.map((m) => (
                <div key={m._id} className={style.mobile_app__info_feature}>
                  <Check />
                  <span>{m.content}</span>
                </div>
              ))}
            </div>

            <div className={style.mobile_app__info_magazine}>
              {mobileAppMagazine.map((m) => (
                <div key={m._id} className={style.mobile_app__info_app_img}>
                  <img src={require(`/src/${m.imgUrl}`)} alt="" />
                </div>
              ))}
            </div>
          </div>
        </article>
      </ComponentConteiner>
    </section>
  );
};

export default MobileApp;
