import React from "react";
import style from "./addressNamesComponent.module.scss";

const AddressNamesComponent = ({ addressTitle, address, telephone }) => {
  return (
    <address className={style.address_names}>
      {addressTitle && (
        <div className={style.address_names__title}>{addressTitle}:</div>
      )}
      <span>{address}</span>
      <span>{telephone}</span>
    </address>
  );
};

export default AddressNamesComponent;
