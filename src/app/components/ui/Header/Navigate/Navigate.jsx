import React from "react";
import { menus } from "../../../../mockData/menus";
import style from "./navigate.module.scss";
import NavigateItem from "../NavigateItem/NavigateItem";

const Navigate = ({ handleDropdownDynamicStyles }) => {
  return (
    <nav className={style.navigate}>
      <ul className={style.navigate_menus}>
        {menus.map((menu) => (
          <NavigateItem
            key={menu._id}
            {...{ menu, handleDropdownDynamicStyles }}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigate;
