


/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Center, Icon, KeyboardAvoidingView, Pressable, VStack } from 'native-base';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Platform, ScrollView } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import signUpSchema from '../Config/schema/signUpSchema';
import { OutlineButtonOrange } from '../components/Buttons/OutlineButton';
import { SolidButton } from '../components/Buttons/SolidButton';
import { Input } from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import { Title } from '../components/Title';
import { ROUTES } from '../constants';

export default function SignUp({ navigation, getUsers }) {
  const [show, setShow] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  function signUpAuth(data) {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        firestore()
          .collection('usuario')
          .doc(res.user.uid)
          .set({
            nome: data.name,
            email: data.email,
            senha: data.password,
            confirmarSenha: data.passwordConfirm,
            bairro: data.bairro,
            cidade: data.city,
            uf: data.uf
          })
          .then(() => Alert.alert('Conta criada com sucesso!'));
        navigation.navigate(ROUTES.LOGIN).catch(error => console.log(error));
      });
  }

  return (
    <VStack flex={1}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Center px={10}>
            <Logo />

            <Title style={{ marginBottom: 30, marginTop: 10 }}>Criar Conta</Title>

            <Controller
              name="name"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="person" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="Nome"
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              name="userName"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon as={<IconAntDesign name="idcard" />} size={5} ml="3" color="muted.400" />
                  }
                  placeholder="Nome de Usuário"
                  onChangeText={onChange}
                  errorMessage={errors.userName?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="email" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
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
              render={({ field: { onChange } }) => (
                <Input
                  type={show ? 'text' : 'password'}
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="lock" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={<IconmaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
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

            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  type={show ? 'text' : 'password'}
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="lock" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={<IconmaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                        size={5}
                        mr="5"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Confirme a senha"
                  onChangeText={onChange}
                  errorMessage={errors.passwordConfirm?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="smartphone" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="Telefone"
                  onChangeText={onChange}
                  errorMessage={errors.phone?.message}
                />
              )}
            />

            <Controller
              name="address"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="location-pin" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="Rua"
                  onChangeText={onChange}
                  errorMessage={errors.address?.message}
                />
              )}
            />

            <Controller
              name="bairro"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="location-on" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="Bairro"
                  onChangeText={onChange}
                  errorMessage={errors.bairro?.message}
                />
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="location-city" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="Cidade"
                  onChangeText={onChange}
                  errorMessage={errors.city?.message}
                />
              )}
            />

            <Controller
              name="uf"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="add-location" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="UF"
                  onChangeText={onChange}
                  errorMessage={errors.uf?.message}
                />
              )}
            />

            <SolidButton mt={3} title="Criar Conta" onPress={handleSubmit(signUpAuth)} />
            <OutlineButtonOrange
              mt={8}
              mb={8}
              title="Login"
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
            />
            <PetsImage />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
