/* eslint-disable prettier/prettier */
import * as yup from 'yup';
import {validateUF} from 'validations-br';

const petSchema = yup.object({
  namePet: yup.string().required('Digite o seu nome').min(3, 'O nome deve ter no mínimo 3 dígitos'),
  type: yup
    .string()
    .required('Digite seu nome de usuário')
    .min(6, 'O nome de usuário deve ter no mínimo 6 dígitos')
    .max(15, 'O nome de usuário deve ter no maxímo 15 dígitos'),
  age: yup.string().required('Digite a idade do pet'),
  weight: yup.string().required('Digite o peso do pet'),
  race: yup.string().required('Digitea raça do pet'),
  porte: yup.string().required('Digite o porte do pet'),

  bairro: yup.string().required('Digite o seu bairro'),
  city: yup.string().required('Digite sua cidade'),
  uf: yup
    .string()
    .required('Digite o seu estado')
    .max(2, 'O UF deve ter 2 dígitos')
    .min(2, 'O UF deve ter 2 dígitos')
    .test('is-uf', 'UF inválido', value => validateUF(value))
});

export default petSchema;
