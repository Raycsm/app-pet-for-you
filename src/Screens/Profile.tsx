/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Center,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  VStack,
  Button,
  Text,
} from 'native-base';
import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Platform, ScrollView} from 'react-native';
import {IFormValue} from '../Config/dto/IFormValue';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import Logo from '../components/Logo';
import firestore from '@react-native-firebase/firestore';
import updateSchema from '../Config/schema/updateSchema';
import BackAction from '../components/BackAction';
import auth from '@react-native-firebase/auth';

export default function Profile({navigation, route}: any) {
  const [show, setShow] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const { userData, defaultValue } = route.params;
  const [defaultValues, setDefaultValues] = React.useState<any>({});


  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValue>({
    resolver: yupResolver(updateSchema),
  });

  const userAuth = auth().currentUser;

    let uid:any;

    if (userAuth != null) {
      uid = userAuth.uid;

  const updateUser = (data: any | undefined) => {

    if (userAuth != null) {
      const uid = userAuth.uid;

      React.useEffect(() => {
        setDefaultValues({
          ...defaultValues,
          phone: userData.telefone,
        });
      }, [defaultValue]);

      const updateData: any = {};

      if (data.password) {
        updateData.senha = data.password;
      }

      if (data.phone) {
        updateData.telefone = data.phone;
      }

      if (data.address) {
        updateData.endereço = data.address;
      }

      if (data.bairro) {
        updateData.bairro = data.bairro;
      }

      if (data.city) {
        updateData.cidade = data.city;
      }

      if (data.uf) {
        updateData.uf = data.uf;
      }

      firestore()
        .collection('usuario')
        .doc(uid)
        .update(updateData)
        .then(() => Alert.alert('Atualizado com sucesso!'))
        .catch((error) => {
          console.log('Erro ao atualizar:', error);
        });
    }
  };

  function getUser({ userId }) {
    React.useEffect(() => {
      const subscriber = firestore()
        .collection('usuario')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          if (documentSnapshot.exists) {
            const data = documentSnapshot.data();
            setDefaultValues(data);
          }
        });

      return () => subscriber();
    }, []);
  }


  return (
    <VStack flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView>
              <BackAction title="Meu perfil" onPress={navigation.goBack} />
          </SafeAreaView>
        <ScrollView>
          <Center px={10}>
            <View style={{marginBottom:20}}>
              <Logo/>
            </View>
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
                  defaultValue={defaultValues.phone}
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
              mb={16}
              title="Atualizar"
              onPress={handleSubmit(updateUser)}
            />

          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
};

