import React from "react";
import style from "./dynamicMenuComponent.module.scss";
import MenuInfo from "../MenuInfo/MenuInfo";
import MenuService from "../MenuService/MenuService";
import MenuNavigate from "../MenuNavigate/MenuNavigate";
import PrivacyPolicyLink from "../../../common/PrivacyPolicyLink/PrivacyPolicyLink";

const DynamicMenuComponent = ({ isTablet }) => {
  return (
    <div className={style.dynamic_menu}>
      <PrivacyPolicyLink className={style.dynamic_menu__link} />
      <MenuInfo />
      <MenuService />

      {isTablet && <MenuNavigate />}
    </div>
  );
};

export default DynamicMenuComponent;
