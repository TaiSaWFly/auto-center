import React from "react";
import { carCentersMenu, carServiceMenu } from "../../../../mockData/menus";
import style from "./footerNavigateSubMain.module.scss";

const FooterNavigateSubMain = () => {
  return (
    <div className={style.footer_navigate_sub_main}>
      <div className={style.footer_navigate_sub_main__nav}>
        <div className={style.footer_navigate_sub_main__nav_title}>
          Автоцентры
        </div>

        <ul className={style.footer_navigate_sub_main__nav_list}>
          {carCentersMenu.map((c) => (
            <li
              key={c._id}
              className={style.footer_navigate_sub_main__nav_list_item}
            >
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.footer_navigate_sub_main__nav}>
        <div className={style.footer_navigate_sub_main__nav_title}>Услуги</div>

        <ul className={style.footer_navigate_sub_main__nav_list}>
          {carServiceMenu.map((c) => (
            <li
              key={c._id}
              className={style.footer_navigate_sub_main__nav_list_item}
            >
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigateSubMain;
