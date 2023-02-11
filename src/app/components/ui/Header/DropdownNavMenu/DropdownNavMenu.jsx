import React from "react";
import style from "./dropdownNavMenu.module.scss";
import { definedLengthArray } from "../../../../utils/definedLengthArray";

const DropdownNavMenu = ({ subMenus, handleDropdownDynamicStyles }) => {
  const dynamicStyles = handleDropdownDynamicStyles();
  const definedSubMenus = definedLengthArray(subMenus);

  return (
    <ul
      className={style.dropdown_nav_menu}
      style={{
        paddingLeft: `${dynamicStyles.paddingLeftByHeaderGroup}px`,
        top: `${dynamicStyles.topByHeaderGroup}px`,
      }}
    >
      {definedSubMenus.map((s) => (
        <li key={s._id} className={style.dropdown_nav_menu__link}>
          {s.name}
        </li>
      ))}
    </ul>
  );
};

export default DropdownNavMenu;
