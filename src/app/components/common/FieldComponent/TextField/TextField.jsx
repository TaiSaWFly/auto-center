import React from "react";
import style from "./textField.module.scss";

const TextField = ({ name, label, value, onChange, error, isRequired }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={style.text_field}>
      <input
        className={
          error ? style.text_field__input_error : style.text_field__input
        }
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />

      <label htmlFor={name} className={style.text_field__label}>
        {isRequired ? (
          <>
            {label} <span>*</span>
          </>
        ) : (
          <>{label}</>
        )}
      </label>

      {error && <div className={style.text_field__error_message}>{error}</div>}
    </div>
  );
};

export default TextField;
