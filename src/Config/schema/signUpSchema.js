/* eslint-disable prettier/prettier */
import * as yup from 'yup';
import {validatePhone, validateUF} from 'validations-br';

const signUpSchema = yup.object({
  name: yup.string().required('Digite o seu nome').min(3, 'O nome deve ter no mínimo 3 dígitos'),
  userName: yup
    .string()
    .required('Digite seu nome de usuário')
    .min(6, 'O nome de usuário deve ter no mínimo 6 dígitos')
    .max(15, 'O nome de usuário deve ter no maxímo 15 dígitos'),
  email: yup.string().required('Digite o seu e-mail').email('Digite um e-mail válido'),
  password: yup
    .string()
    .required('Digite uma senha')
    .min(8, 'A senha deve ter no minímo 8 dígitos '),
  passwordConfirm: yup
    .string()
    .required('Digite a senha novamente')
    .min(8, 'A senha deve ter no minímo 8 dígitos ')
    .oneOf([yup.ref('password')], 'A confirmação de senha não confere'),
  phone: yup
    .string()
    .required('Digite o seu telefone')
    .test('isPhone', 'Telefone inválido', value => validatePhone(value)),
  address: yup.string().required('Digite seu endereço'),
  bairro: yup.string().required('Digite o seu bairro'),
  city: yup.string().required('Digite sua cidade'),
  uf: yup
    .string()
    .required('Digite o seu estado')
    .max(2, 'O UF deve ter 2 dígitos')
    .min(2, 'O UF deve ter 2 dígitos')
    .test('is-uf', 'UF inválido', value => validateUF(value))
});

export default signUpSchema;
