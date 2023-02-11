import React from "react";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import ComponentConteiner from "../../../common/ComponentConteiner/ComponentConteiner";
import SocialComponent from "../../../common/SocialComponent/SocialComponent";
import FooterAddress from "../FooterAddress/FooterAddress";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterNavigateMain from "../FooterNavigateMain/FooterNavigateMain";
import FooterNavigateSubMain from "../FooterNavigateSubMain/FooterNavigateSubMain";
import style from "./footer.module.scss";

const Footer = () => {
  const { innerWidth } = useWindowDimensions();

  return (
    <footer className={style.footer}>
      <ComponentConteiner>
        <div className={style.footer__wrapper}>
          <div className={style.footer__info}>
            <FooterInfo />
          </div>
          <div className={style.footer__navigate}>
            <FooterNavigateMain />
            <FooterNavigateSubMain />

            <div className={style.footer_info__social}>
              <SocialComponent isDark={false} />
            </div>
            <FooterAddress />
          </div>
        </div>

        <div className={style.footer__author}>
          <span>
            {innerWidth <= 600 ? (
              <>&copy; 2022 Спец. автоцентр</>
            ) : (
              <>&copy; 2022 Специализированный автоцентр</>
            )}
          </span>
          <span>
            {innerWidth <= 600 ? (
              <>
                Сайт от -{" "}
                <span className={style.footer__author_name}>Media Army</span>
              </>
            ) : (
              <>
                Дизайн и разработка -{" "}
                <span className={style.footer__author_name}>Media Army</span>
              </>
            )}
          </span>
        </div>
      </ComponentConteiner>
    </footer>
  );
};

export default Footer;
