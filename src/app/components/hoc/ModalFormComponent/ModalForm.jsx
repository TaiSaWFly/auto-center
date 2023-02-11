import React from "react";
import style from "./modalForm.module.scss";
import { ReactComponent as Close } from "../../../../assets/images/Icons/system/close.svg";

const ModalForm = ({ title, handleCloseModal, children }) => {
  return (
    <div className={style.modal_form}>
      <div className={style.modal_form__content}>
        <div className={style.modal_form__title}>{title}</div>

        {children}

        <div className={style.modal_form__close} onClick={handleCloseModal}>
          <Close className={style.modal_form__close_icon} />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
