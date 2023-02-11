import React from "react";
import style from "./menuService.module.scss";
import { carCentersMenu } from "../../../../mockData/menus";
import MenuNamesComponent from "../../../common/MenuNamesComponent/MenuNamesComponent";
import AccountLink from "../../AccountLink/AccountLink";
import PrivacyPolicyLink from "../../../common/PrivacyPolicyLink/PrivacyPolicyLink";

const MenuService = () => {
  return (
    <div className={style.menu_service}>
      <div>
        <MenuNamesComponent menuTitle="Автоцентры" menu={carCentersMenu} />

        <AccountLink />
      </div>

      <PrivacyPolicyLink className={style.menu_service__link} />
    </div>
  );
};

export default MenuService;
