import React from "react";
import style from "./socialComponent.module.scss";
import { ReactComponent as Vk } from "../../../../assets/images/Icons/social/VK.svg";
import { ReactComponent as Instagram } from "../../../../assets/images/Icons/social/instagram.svg";
import { ReactComponent as Twitter } from "../../../../assets/images/Icons/social/twitter.svg";
import { ReactComponent as YouTube } from "../../../../assets/images/Icons/social/youtube.svg";

const SocialComponent = ({ isDark }) => {
  return (
    <div className={style.social}>
      <a
        href="/"
        className={isDark ? style.social__item__dark : style.social__item}
      >
        <Vk
          className={isDark ? style.social__icon__dark : style.social__icon}
        />
      </a>

      <a
        href="/"
        className={isDark ? style.social__item__dark : style.social__item}
      >
        <Instagram
          className={isDark ? style.social__icon__dark : style.social__icon}
        />
      </a>

      <a
        href="/"
        className={isDark ? style.social__item__dark : style.social__item}
      >
        <Twitter
          className={isDark ? style.social__icon__dark : style.social__icon}
        />
      </a>

      <a
        href="/"
        className={isDark ? style.social__item__dark : style.social__item}
      >
        <YouTube
          className={isDark ? style.social__icon__dark : style.social__icon}
        />
      </a>
    </div>
  );
};

export default SocialComponent;
