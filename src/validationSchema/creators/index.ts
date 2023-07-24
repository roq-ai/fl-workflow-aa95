import * as yup from 'yup';

export const creatorValidationSchema = yup.object().shape({
  social_media_credentials: yup.string().required(),
  user_id: yup.string().nullable(),
});
