import React from "react";
import AddressNamesComponent from "../../../common/AddressNamesComponent/AddressNamesComponent";
import { address, telephone } from "../../../../mockData/defautlData";
import style from "./footerAddress.module.scss";

const FooterAddress = () => {
  return (
    <div className={style.footer_address}>
      <div className={style.footer_address__wrapper}>
        <AddressNamesComponent
          addressTitle="адрес автоцентра"
          {...{
            telephone,
            address,
          }}
        />
      </div>

      <div className={style.footer_address__wrapper}>
        <AddressNamesComponent
          addressTitle="центр кузовного ремонта"
          {...{
            telephone,
            address,
          }}
        />
      </div>
    </div>
  );
};

export default FooterAddress;
