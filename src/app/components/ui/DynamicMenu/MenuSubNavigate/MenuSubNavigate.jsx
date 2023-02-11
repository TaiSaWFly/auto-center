import React from "react";
import { definedLengthArray } from "../../../../utils/definedLengthArray";
import style from "./menuSubNavigate.module.scss";

const MenuSubNavigate = ({ data, subNavTitle }) => {
  const definedLengthData = definedLengthArray(data);

  return (
    <div className={style.menu_sub_navigate}>
      <div className={style.menu_sub_navigate__title}>{subNavTitle}</div>

      <ul className={style.menu_sub_navigate__list}>
        {definedLengthData.map((d) => (
          <li key={d._id} className={style.menu_sub_navigate__list_item}>
            <span>{d.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSubNavigate;
