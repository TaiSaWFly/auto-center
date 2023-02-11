import React from "react";
import Button from "../Button";
import { ReactComponent as ChevronRight } from "../../../../../assets/images/Icons/chevrons/chevron-right.svg";
import style from "./buttonAction.module.scss";

const ButtonAction = ({ title, handleAction }) => {
  return (
    <div className={style.button_action}>
      <Button onClick={handleAction}>
        <span>{title}</span>
        <div>
          <ChevronRight />
        </div>
      </Button>
    </div>
  );
};

export default ButtonAction;
