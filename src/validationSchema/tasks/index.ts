import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  briefing: yup.string().required(),
  project_id: yup.string().nullable(),
  creator_id: yup.string().nullable(),
});
