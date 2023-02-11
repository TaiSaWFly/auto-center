import React from "react";
import style from "./logo.module.scss";
import RenderLogo from "../../../hoc/RenderLogo";

const Logo = ({ isMoreMenuDropdown }) => {
  return (
    <div className={style.logo}>
      <RenderLogo isDropdown={isMoreMenuDropdown} />
    </div>
  );
};

export default Logo;
