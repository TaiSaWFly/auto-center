import React from "react";
import Button from "../../../common/ButtonComponent/Button";
import { ReactComponent as StateMenu } from "../../../../../assets/images/Icons/system/state_menu.svg";
import { ReactComponent as Close } from "../../../../../assets/images/Icons/system/close.svg";
import style from "./headerAction.module.scss";

const HeaderAction = ({
  handleToggleDropdown,
  handleOpenModal,
  isDropdown,
  refHeaderAction,
}) => {
  return (
    <div className={style.header_action} ref={refHeaderAction}>
      <div
        className={style.header_action__state_menu}
        onClick={handleToggleDropdown}
      >
        {isDropdown ? <Close /> : <StateMenu />}
      </div>

      <Button className={style.header_action__btn} onClick={handleOpenModal}>
        Запись на сервис
      </Button>
    </div>
  );
};

export default HeaderAction;
