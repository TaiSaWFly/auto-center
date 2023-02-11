import React, { useEffect, useState } from "react";
import ComponentConteiner from "../../../common/ComponentConteiner/ComponentConteiner";
import style from "./dropdownMoreMenu.module.scss";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import DynamicMenuComponent from "../../DynamicMenu/DynamicMenuComponent/DynamicMenuComponent";
import { TABLET_BREACKPOINT } from "../../../../utils/variables";

const DropdownMoreMenu = ({ handleDropdownDynamicStyles }) => {
  const { innerWidth } = useWindowDimensions();
  const dynamicStyles = handleDropdownDynamicStyles();
  const [isTablet, setIsTablet] = useState(TABLET_BREACKPOINT >= innerWidth);

  useEffect(() => {
    setIsTablet(TABLET_BREACKPOINT >= innerWidth);
  }, [innerWidth]);

  return (
    <div
      style={{
        top: `${dynamicStyles.topByHeaderGroup}px`,
        height: `calc(100vh - ${dynamicStyles.topByHeaderGroup}px)`,
      }}
      className={style.dropdown_more_menu}
    >
      <div className={style.dropdown_more_menu__wrapper}>
        <ComponentConteiner>
          <div
            style={{
              maxWidth: isTablet ? "100%" : `${dynamicStyles.dynamicWidth}px`,
            }}
            className={style.dropdown_more_menu__conteiner}
          >
            <DynamicMenuComponent {...{ isTablet }} />
          </div>
        </ComponentConteiner>
      </div>
    </div>
  );
};

export default DropdownMoreMenu;
