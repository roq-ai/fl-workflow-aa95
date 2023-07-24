import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  delivery_scope: yup.string().required(),
  company_id: yup.string().nullable(),
});
