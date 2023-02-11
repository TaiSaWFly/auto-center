import React, { useEffect, useState } from "react";
import { registrationServiceSchema } from "../../../../utils/yupSchema";
import { dataSelect } from "../../../../mockData/dataSelect";
import ButtonAction from "../../../common/ButtonComponent/ButtonAction/ButtonAction";
import TextAreaField from "../../../common/FieldComponent/TextAreaField/TextAreaField";
import TextField from "../../../common/FieldComponent/TextField/TextField";
import ModalForm from "../../../hoc/ModalFormComponent/ModalForm";
import Select from "../../CustomSelect/CustomSelect";
import style from "./registrationServiceForm.module.scss";

const initialData = {
  name: "",
  telephone: "",
  car: "",
  content: "",
};

const RegistrationServiceForm = ({ handleCloseModal }) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    registrationServiceSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((error) => setErrors({ [error.path]: error.message }));
  };

  const handleChange = (target) => {
    setData((prevStare) => ({
      ...prevStare,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <ModalForm title="Запись на сервис" {...{ handleCloseModal }}>
      <form>
        <div className={style.registration_service_form__field}>
          <TextField
            label="Ваше имя"
            name="name"
            value={data.name}
            error={errors.name}
            onChange={handleChange}
            isRequired={true}
          />
        </div>

        <div className={style.registration_service_form__field}>
          <TextField
            label="Контактный телефон"
            name="telephone"
            error={errors.telephone}
            value={data.telephone}
            onChange={handleChange}
            isRequired={true}
          />
        </div>

        <div className={style.registration_service_form__field}>
          <Select
            label="Марка автомобиля"
            name="car"
            value={data.car}
            onChange={handleChange}
            options={dataSelect}
            isRequired={true}
          />
        </div>

        <div className={style.registration_service_form__field}>
          <TextAreaField
            label="Краткое описание проблемы"
            name="content"
            error={errors.content}
            value={data.content}
            onChange={handleChange}
          />
        </div>

        <div className={style.registration_service_form__action}>
          <div className={style.registration_service_form__action_agreement}>
            Нажимая кнопку «Отправить заявку» вы даете согласие на{" "}
            <span>Обработку персональных данных</span>
          </div>

          <ButtonAction title="Отправить заявку" handleAction={handleSubmit} />
        </div>
      </form>
    </ModalForm>
  );
};

export default RegistrationServiceForm;
