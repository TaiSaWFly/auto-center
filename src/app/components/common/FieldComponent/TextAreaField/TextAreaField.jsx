import React from "react";
import style from "./textAreaField.module.scss";

const TextAreaField = ({ name, label, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={style.textarea__field}>
      <textarea
        className={style.textarea}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      <label htmlFor={name} className={style.textarea__label}>
        {label}
      </label>
    </div>
  );
};

export default TextAreaField;
