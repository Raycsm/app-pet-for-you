/* eslint-disable prettier/prettier */
import * as yup from 'yup';

const signInSchema = yup.object({
  email: yup
    .string()
    .required('Digite o seu e-mail')
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .required('Digite uma senha')
    .min(8, 'A senha deve ter no minímo 8 dígitos '),
});

export default signInSchema;
