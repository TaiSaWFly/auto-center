import * as yup from "yup";

export const feedbackSchema = yup.object().shape({
  telephone: yup.string().required("Обязательное поле"),
  name: yup.string().required("Обязательное поле"),
});

export const registrationServiceSchema = yup.object().shape({
  telephone: yup.string().required("Обязательное поле"),
  name: yup.string().required("Обязательное поле"),
});
