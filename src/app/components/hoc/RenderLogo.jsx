import React from "react";
import { ReactComponent as Logotype } from "../../../assets/images/Logo/logo.svg";
import { ReactComponent as LogotypeTablet } from "../../../assets/images/Logo/logo-tablet.svg";
import { ReactComponent as LogotypeMobile } from "../../../assets/images/Logo/logo-mobile.svg";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { returnLogo } from "../../utils/returnLogo";

const logos = {
  main: <Logotype />,
  tablet: <LogotypeTablet />,
  mobile: <LogotypeMobile />,
};

const RenderLogo = ({ isDropdown }) => {
  const { innerWidth } = useWindowDimensions();
  return <>{returnLogo(logos, innerWidth, isDropdown)}</>;
};

export default RenderLogo;
