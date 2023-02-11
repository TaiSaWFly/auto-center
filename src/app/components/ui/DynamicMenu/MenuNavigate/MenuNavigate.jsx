import React from "react";
import { menus } from "../../../../mockData/menus";
import MenuSubNavigate from "../MenuSubNavigate/MenuSubNavigate";
import style from "./menuNavigate.module.scss";

const MenuNavigate = () => {
  return (
    <div>
      <div className={style.menu_navigate}>
        <ul className={style.menu_navigate__list}>
          {menus.map((m) =>
            !m.subMenus ? (
              <li key={m._id} className={style.menu_navigate__list_item}>
                <span>{m.name}</span>
              </li>
            ) : null
          )}
        </ul>
      </div>

      {menus.map((m) =>
        m.subMenus ? (
          <MenuSubNavigate key={m._id} data={m.subMenus} subNavTitle={m.name} />
        ) : null
      )}
    </div>
  );
};

export default MenuNavigate;
