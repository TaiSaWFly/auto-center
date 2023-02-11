import React from "react";
import style from "./mainSreen.module.scss";
import ComponentConteiner from "../../../common/ComponentConteiner/ComponentConteiner";
import MainScreenSlider from "../MainScreenSlider/MainScreenSlider";
import MainScreenInfo from "../MainScreenInfo/MainScreenInfo";

const MainScreen = () => {
  return (
    <section className={style.main_screen}>
      <ComponentConteiner>
        <MainScreenInfo />
      </ComponentConteiner>

      <MainScreenSlider />
    </section>
  );
};

export default MainScreen;
