/* eslint-disable prettier/prettier */
import * as yup from 'yup';


const updateSchema = yup.object({

  name: yup
    .string(),
  userName: yup
    .string()
    .min(6, 'O nome de usuário deve ter no mínimo 6 dígitos')
    .max(15, 'O nome de usuário deve ter no maxímo 15 dígitos'),
  email: yup
    .string()
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .min(8, 'A senha deve ter no minímo 8 dígitos '),
  phone: yup
    .string(),
  address: yup.string(),
  bairro: yup.string(),
  city: yup.string(),
  uf: yup
    .string().max(2, 'O UF deve ter 2 dígitos')
    .min(2, 'O UF deve ter 2 dígitos'),
});

export default updateSchema;