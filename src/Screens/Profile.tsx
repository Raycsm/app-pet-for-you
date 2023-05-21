/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Center,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  VStack,
} from 'native-base';
import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Platform, ScrollView} from 'react-native';
import {IFormValue} from '../Config/dto/IFormValue';
import signUpSchema from '../Config/schema/signUpSchema';
import {ROUTES} from '../Constants';
import {OutlineButtonOrange} from '../components/Buttons/OutlineButton';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import {Title} from '../components/Title';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

export default function Profile({navigation}: any) {
  const [show, setShow] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValue>({
    resolver: yupResolver(signUpSchema),
  });


  return (
    <VStack flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Center px={10}>

          <UserAvatar size={130} name="Rayane Assis" bgColor="#DB652F" style={style.avatar} />

            <Controller
              name="name"
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  isDisabled
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
              render={({field: {onChange}}) => (
                <Input
                  isDisabled
                  InputLeftElement={
                    <Icon
                      as={<IconAntDesign name="idcard" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
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
              render={({field: {onChange}}) => (
                <Input
                  isDisabled
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
              render={({field: {onChange}}) => (
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
                        as={
                          <IconmaterialIcons
                            name={show ? 'visibility' : 'visibility-off'}
                          />
                        }
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
              name="phone"
              control={control}
              render={({field: {onChange}}) => (
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
              render={({field: {onChange}}) => (
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
              render={({field: {onChange}}) => (
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
              render={({field: {onChange}}) => (
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
              render={({field: {onChange}}) => (
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

            <SolidButton
              mt={3}
              title="Salvar"
              onPress={handleSubmit}
            />
            <OutlineButtonOrange
              mt={8}
              mb={8}
              title="Login"
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
            />

          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center'
  },
  logo_home: {
    width: 100,
    height: 60,
    marginLeft: 90,
    marginTop: 50,
  },
  exit: {
    width: 40,
    height: 40,
    marginLeft: 60,
    marginTop: 60,
    backgroundColor:'#DB652F',
    borderRadius:5,
  },
  filter: {
    marginLeft: 30,
    marginTop: 60,
    width: 40,
    height: 40,
    borderRadius:5,
  },
});

