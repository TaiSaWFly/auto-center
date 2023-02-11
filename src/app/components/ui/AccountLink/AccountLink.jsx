import React from "react";
import style from "./accountLink.module.scss";
import { ReactComponent as ArrowUpRight } from "../../../../assets/images/Icons/arrows/arrow-up-right.svg";

const AccountLink = () => {
  return (
    <div className={style.account_link}>
      <div className={style.account_link__title}>Личный кабинет</div>
      <a href="/" className={style.account_link__action}>
        <ArrowUpRight className={style.account_link__action_icon} />
      </a>
    </div>
  );
};

export default AccountLink;
