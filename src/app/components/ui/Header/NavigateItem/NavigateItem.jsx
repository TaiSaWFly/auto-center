import React, { useState } from "react";
import { ReactComponent as ChevronDown } from "../../../../../assets/images/Icons/chevrons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../../../../assets/images/Icons/chevrons/chevron-up.svg";
import DropdownNavMenu from "../DropdownNavMenu/DropdownNavMenu";
import style from "./navigateItem.module.scss";

const NavigateItem = ({ menu, handleDropdownDynamicStyles }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {menu.subMenus ? (
        <li
          className={style.navigate_menus__item}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <a href="/" className={style.navigate_menus__item_link}>
            {menu.name}
          </a>

          {dropdown ? (
            <ChevronUp
              width="20px"
              height="20px"
              className={style.navigate_menus__item_chevron}
            />
          ) : (
            <ChevronDown
              width="20px"
              height="20px"
              className={style.navigate_menus__item_chevron}
            />
          )}

          {dropdown && (
            <DropdownNavMenu
              subMenus={menu.subMenus}
              {...{ handleDropdownDynamicStyles }}
            />
          )}
        </li>
      ) : (
        <li className={style.navigate_menus__item}>
          <a href="/" className={style.navigate_menus__item_link}>
            {menu.name}
          </a>
        </li>
      )}
    </>
  );
};

export default NavigateItem;
