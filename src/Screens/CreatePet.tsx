/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Center,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  VStack,
  Radio,
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
import BackAction from '../components/BackAction';
import 'firebase/storage';
import { petInterface } from '../Config/dto/petInterface';

export default function CreatePet({navigation}: any) {
  const [show, setShow] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<petInterface>({
    resolver: yupResolver(signUpSchema),
  });

  return (
    <VStack flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView>
              <BackAction title="Criar Pet" onPress={navigation.goBack} />
          </SafeAreaView>
        <ScrollView>
          <Center px={10}>
            <View style={{marginBottom:25}} />
            <Controller
              name="namePet"
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  InputLeftElement={
                    <Icon
                      as={<IconmaterialIcons name="person" />}
                      size={5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  placeholder="Nome do pet"
                  onChangeText={onChange}
                  errorMessage={errors.namePet?.message}
                />
              )}
            />
            <Controller
              name="sexPet"
              control={control}
              render={({field: onChange}) => (
                <Radio.Group defaultValue="femea" name="sexoPet"
                onChange={(value) => onChange(value)}>
                <Radio colorScheme="orange" value="femea" my={1}>
                  Fêmea
                </Radio>
                <Radio colorScheme="orange" value="macho" my={1}>
                  Macho
                </Radio>
                
              </Radio.Group>
              )}
              errorMessage={errors.sexPet?.message}
            />
            <Controller
              name="age"
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
                  errorMessage={errors.age?.message}
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
            />
            <OutlineButtonOrange
              mt={12}
              mb={8}
              title="Deletar conta"
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


