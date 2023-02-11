import React, { useEffect, useState } from "react";
import { feedbackSchema } from "../../../../utils/yupSchema";
import ButtonAction from "../../../common/ButtonComponent/ButtonAction/ButtonAction";
import TextAreaField from "../../../common/FieldComponent/TextAreaField/TextAreaField";
import TextField from "../../../common/FieldComponent/TextField/TextField";
import ModalForm from "../../../hoc/ModalFormComponent/ModalForm";
import style from "./feedbackForm.module.scss";

const initialData = {
  name: "",
  telephone: "",
  content: "",
};

const FeedbackForm = ({ handleCloseModal }) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    feedbackSchema
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
    <ModalForm title="Перезвоним в течении часа" {...{ handleCloseModal }}>
      <form>
        <div className={style.feedback_form__field}>
          <TextField
            label="Ваше имя"
            name="name"
            value={data.name}
            error={errors.name}
            onChange={handleChange}
            isRequired={true}
          />
        </div>

        <div className={style.feedback_form__field}>
          <TextField
            label="Контактный телефон"
            name="telephone"
            error={errors.telephone}
            value={data.telephone}
            onChange={handleChange}
            isRequired={true}
          />
        </div>

        <div className={style.feedback_form__field}>
          <TextAreaField
            label="Комментарий"
            name="content"
            error={errors.content}
            value={data.content}
            onChange={handleChange}
          />
        </div>

        <div className={style.feedback_form__action}>
          <div className={style.feedback_form__action_agreement}>
            Нажимая кнопку «Отправить заявку» вы даете согласие на{" "}
            <span>Обработку персональных данных</span>
          </div>

          <ButtonAction title="Отправить заявку" handleAction={handleSubmit} />
        </div>
      </form>
    </ModalForm>
  );
};

export default FeedbackForm;
