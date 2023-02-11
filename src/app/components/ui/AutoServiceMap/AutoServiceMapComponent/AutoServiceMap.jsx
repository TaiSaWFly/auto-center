import React from "react";
import style from "./autoServiceMap.module.scss";
import ComponentConteiner from "../../../common/ComponentConteiner/ComponentConteiner";
import AddressNamesComponent from "../../../common/AddressNamesComponent/AddressNamesComponent";
import {
  address,
  imgUrl,
  partsEmail,
  serviceEmail,
  telephone,
} from "../../../../mockData/defautlData";
import AutoMap from "../AutoMap/AutoMap";
import ButtonAction from "../../../common/ButtonComponent/ButtonAction/ButtonAction";
import { ReactComponent as Minus } from "../../../../../assets/images/Icons/system/minus.svg";
import { ReactComponent as Plus } from "../../../../../assets/images/Icons/system/plus.svg";

const AutoServiceMap = () => {
  return (
    <section className={style.auto_service_map}>
      <ComponentConteiner>
        <article className={style.auto_service_map__wrapper}>
          <div className={style.auto_service_map__info}>
            <div className={style.auto_service_map__info_image}>
              <img src={require(`/src/${imgUrl}`)} alt="" />
            </div>

            <div className={style.auto_service_map__info_group}>
              <div className={style.auto_service_map__info_address}>
                <AddressNamesComponent
                  address={address}
                  telephone={`Телефон: ${telephone}`}
                />
              </div>

              <div className={style.auto_service_map__info_email}>
                <div>
                  Сервис: <span>{serviceEmail}</span>
                </div>
                <div>
                  Отдел запасных частей: <span>{partsEmail}</span>
                </div>
              </div>

              <ButtonAction title="Построить маршрут" />
            </div>
          </div>

          <div className={style.auto_service_map__map}>
            <AutoMap />

            <div className={style.auto_service_map__map_actions}>
              <div className={style.auto_service_map__map_action}>
                <Plus className={style.auto_service_map__map_action_icon} />
              </div>
              <div className={style.auto_service_map__map_action}>
                <Minus className={style.auto_service_map__map_action_icon} />
              </div>
            </div>
          </div>
        </article>
      </ComponentConteiner>
    </section>
  );
};

export default AutoServiceMap;
