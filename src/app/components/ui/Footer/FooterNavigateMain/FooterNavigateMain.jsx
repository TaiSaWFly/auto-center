import React from "react";
import { menus } from "../../../../mockData/menus";
import { ReactComponent as ArrowUpRight } from "../../../../../assets/images/Icons/arrows/arrow-up-right.svg";
import style from "./footerNavigateMain.module.scss";

const FooterNavigateMain = () => {
  return (
    <div className={style.footer_navigate_main}>
      <div className={style.footer_navigate_main__wrapper}>
        <ul className={style.footer_navigate_main__list}>
          {menus.map((m) =>
            !m.subMenus ? (
              <li key={m._id} className={style.footer_navigate_main__list_item}>
                <span>{m.name}</span>
              </li>
            ) : null
          )}
        </ul>

        <div className={style.footer_navigate_main__account_link}>
          <div className={style.footer_navigate_main__account_link__title}>
            Личный кабинет
          </div>
          <span className={style.footer_navigate_main__account_link__action}>
            <ArrowUpRight
              className={style.footer_navigate_main__account_link__action_icon}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigateMain;
