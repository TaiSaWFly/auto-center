import React, { useState } from "react";
import { useRef } from "react";
import { useBlockDimensions } from "../../../../hooks/useBlockDimensions";
import { useHeaderFixed } from "../../../../hooks/useHeaderFixed";
import { toggleScroll } from "../../../../utils/toggleScroll";
import ComponentConteiner from "../../../common/ComponentConteiner/ComponentConteiner";
import RegistrationServiceForm from "../../Form/RegistrationServiceForm/RegistrationServiceForm";
import DropdownMoreMenu from "../DropdownMoreMenu/DropdownMoreMenu";
import HeaderAction from "../HeaderAction/HeaderAction";
import Logo from "../Logo/Logo";
import Navigate from "../Navigate/Navigate";
import style from "./header.module.scss";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const header = useRef();
  const headerWrapper = useRef();
  const headerAction = useRef();
  const headerGroup = useRef();

  const isFixed = useHeaderFixed(header);
  const { clientWidth: widthHeaderWrapper } = useBlockDimensions(headerWrapper);
  const { clientWidth: widthHeaderAction } = useBlockDimensions(headerAction);
  const { offsetLeft: offsetLeftHeaderGroup, clientHeight: heigthHeaderGroup } =
    useBlockDimensions(headerGroup);

  const handleToggleDropdown = () => {
    setDropdown((prevState) => !prevState);
    toggleScroll(dropdown);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
    toggleScroll(isOpenModal);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    toggleScroll(dropdown ? false : true);
  };

  const handleDropdownDynamicStyles = () => {
    return {
      dynamicWidth: widthHeaderWrapper - widthHeaderAction,
      paddingLeftByHeaderGroup: offsetLeftHeaderGroup + 20,
      topByHeaderGroup: heigthHeaderGroup - 1,
    };
  };

  return (
    <>
      <header
        className={isFixed ? style.header__fixed : style.header}
        ref={header}
      >
        <ComponentConteiner>
          <div className={style.header__wrapper} ref={headerWrapper}>
            <Logo isMoreMenuDropdown={dropdown} />
            <div className={style.header__group} ref={headerGroup}>
              <Navigate {...{ handleDropdownDynamicStyles }} />
              <HeaderAction
                {...{
                  handleToggleDropdown,
                  handleOpenModal,
                  isDropdown: dropdown,
                  refHeaderAction: headerAction,
                }}
              />
              {dropdown && (
                <DropdownMoreMenu {...{ handleDropdownDynamicStyles }} />
              )}
            </div>
          </div>
        </ComponentConteiner>
      </header>

      {isOpenModal && <RegistrationServiceForm {...{ handleCloseModal }} />}
    </>
  );
};

export default Header;
