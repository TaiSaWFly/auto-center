import React, { useState } from "react";
import Button from "../../common/ButtonComponent/Button";
import style from "./customSelect.module.scss";
import { ReactComponent as ChevroneUp } from "../../../../assets/images/Icons/chevrons/chevron-up.svg";
import { ReactComponent as ChevroneDown } from "../../../../assets/images/Icons/chevrons/chevron-down.svg";
import { ReactComponent as Close } from "../../../../assets/images/Icons/system/close.svg";

const Select = ({ options, label, name, value, onChange, isRequired }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const returnLableClass = () => {
    if (!isOpen && currentValue !== "") {
      return style.select__label__active;
    }

    if (!isOpen) {
      return style.select__label;
    }

    if (isOpen) {
      return style.select__label__active;
    }
  };

  const returnSelectBtnClass = () => {
    if (!isOpen && currentValue !== "") {
      return style.select__btn__value;
    }

    if (!isOpen) {
      return style.select__btn;
    }

    if (isOpen) {
      return style.select__btn__active;
    }
  };

  const handleToggleOpenList = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectValue = (data) => {
    setCurrentValue(data);
    onChange({ name, value: data });
    setIsOpen(false);
  };

  return (
    <div className={style.select}>
      <Button className={returnSelectBtnClass()} onClick={handleToggleOpenList}>
        <span>{currentValue !== "" ? currentValue.lable : <>&nbsp;</>}</span>

        <div className={returnLableClass()}>
          {isRequired ? (
            <>
              {label} <span>*</span>
            </>
          ) : (
            { label }
          )}
        </div>

        <div className={style.select__btn_icon}>
          {isOpen ? <ChevroneUp /> : <ChevroneDown />}
        </div>
      </Button>

      {isOpen && (
        <div className={style.select__dropdown}>
          <ul className={style.select__dropdown_list}>
            {options.map((i) => (
              <li
                key={i.value}
                className={
                  currentValue.value === i.value
                    ? style.select__dropdown_list_item__active
                    : style.select__dropdown_list_item
                }
                onClick={() =>
                  handleSelectValue({ value: i.value, lable: i.lable })
                }
              >
                {i.lable}
              </li>
            ))}

            <div
              className={style.select__dropdown_close}
              onClick={handleToggleOpenList}
            >
              <Close />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
