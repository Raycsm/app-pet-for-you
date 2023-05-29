/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon, VStack, Pressable, Center, FormControl} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {Alert} from 'react-native';
import {Input} from '../components/Input';
import {SolidButton} from '../components/Buttons/SolidButton';
import {OutlineButtonOrange} from '../components/Buttons/OutlineButton';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import ROUTES from '../Constants/routes';
import signInSchema from '../Config/schema/signInSchema';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const [show, setShow] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  function signInAuth(data) {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => Alert.alert('Logado com sucesso!'))
      .catch(error => Alert.alert('Senha ou e-mail errados!', error.message));
  }

  return (
    <VStack flex={1} px={10}>
      <Center>
        <Logo />
        <FormControl>
          <Controller
            name="email"
            control={control}
            render={({field: {onChange}}) => (
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

          <Controller
            name="password"
            control={control}
            render={({field: {onChange}}) => (
              <Input
                type={show ? 'text' : 'password'}
                InputLeftElement={
                  <Icon as={<IconMaterialIcons name="lock" />} size={5} ml="3" color="muted.400" />
                }
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={<IconMaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                      size={5}
                      mr="5"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Senha"
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
            <Text
              style={{
                color: '#DB652F',
                marginLeft: 200
              }}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>
        </FormControl>

        <SolidButton mt={4} mb={2} title="Entrar" onPress={handleSubmit(signInAuth)} />

        <OutlineButtonOrange
          mt={8}
          mb={16}
          title="Criar Conta"
          onPress={() => navigation.navigate(ROUTES.SIGNUP)}
        />

        <PetsImage />
      </Center>
    </VStack>
  );
}
