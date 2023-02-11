import React from "react";
import style from "./menuInfo.module.scss";
import {
  telephone,
  workingHours,
  address,
  email,
} from "../../../../mockData/defautlData";
import SocialComponent from "../../../common/SocialComponent/SocialComponent";
import AddressNamesComponent from "../../../common/AddressNamesComponent/AddressNamesComponent";

const MenuInfo = () => {
  return (
    <div className={style.menu_info}>
      <div className={style.menu_info__contact}>
        <div className={style.menu_info__telephone}>{telephone}</div>
        <div className={style.menu_info__email}>
          <a href={`email:${email}`}>{email}</a>
        </div>
        <div className={style.menu_info__time}>
          <span>Работаем для вас:</span>
          <span>{workingHours}</span>
        </div>
      </div>

      <div className={style.menu_info__address}>
        <AddressNamesComponent
          addressTitle="адрес автоцентра"
          {...{
            telephone,
            address,
          }}
        />

        <AddressNamesComponent
          addressTitle="Центр кузовного ремонта"
          {...{
            telephone,
            address,
          }}
        />
      </div>

      <SocialComponent isDark={true} />
    </div>
  );
};

export default MenuInfo;
