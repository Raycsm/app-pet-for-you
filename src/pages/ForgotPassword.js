/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import { Center, FormControl, Icon, VStack } from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { OutlineButtonOrange } from '../components/Buttons/OutlineButton';
import { SolidButton } from '../components/Buttons/SolidButton';
import { Input } from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import { Title } from '../components/Title';
import signUpSchema from '../config/schema/signUpSchema';

export default function ForgotPassword({ navigation }) {
  const forgotPasswordAuth = data => {
    auth()
      .sendPasswordResetEmail(data.email)
      .then(() => console.log(data))
      .catch(error => Alert.alert('E-mail não enviado,', error));
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  return (
    <VStack flex={1} px={10}>
      <Center>
        <Logo />

        <Title style={{ marginBottom: 40, marginTop: 10 }}> Recuperar Senha</Title>

        <FormControl>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                InputLeftElement={
                  <Icon as={<IconMaterialIcons name="email" />} size={5} ml="3" color="muted.400" />
                }
                placeholder="E-mail"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </FormControl>

        <SolidButton mt={4} title="Recuperar" onPress={handleSubmit(forgotPasswordAuth)} />

        <OutlineButtonOrange
          mt={8}
          mb={20}
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />

        <PetsImage />
      </Center>
    </VStack>
  );
}
