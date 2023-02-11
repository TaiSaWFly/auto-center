import React from "react";
import style from "./menuNamesComponent.module.scss";

const MenuNamesComponent = ({ menuTitle, menu }) => {
  return (
    <div className={style.menu_names}>
      <div className={style.menu_names__title}>{menuTitle}</div>
      <ul className={style.menu_names__items}>
        {menu.map((m) => (
          <li key={m._id} className={style.menu_names__item}>
            <a href="/" className={style.menu_names__items_link}>
              {m.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuNamesComponent;
