/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import 'firebase/storage';
import {
  Box,
  Center,
  CheckIcon,
  FormControl,
  Image,
  KeyboardAvoidingView,
  Select,
  TextArea,
  VStack,
  WarningOutlineIcon
} from 'native-base';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import BackAction from '../components/BackAction';
import { SolidButton } from '../components/Buttons/SolidButton';
import { Input } from '../components/Input';
import petSchema from '../config/schema/petSchema';
import { ROUTES } from '../constants';

export default function CreatePet({ navigation }) {
  const [image, setImage] = useState();

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true
    })
      .then(photo => {
        if ('path' in photo) {
          console.log(photo.path);
          setImage(photo.path);
        }
      })
      .catch(err => console.log(err));
  };

  const addPet = async data => {
    const imagePetUrl = await uploadImage();
    console.log('Image Url: ', imagePetUrl);

    firestore()
      .collection('animal')
      .add({
        IdUser: data.uid,
        nomePet: data.namePet,
        tipoPet: data.type,
        sexoPet: data.sexPet,
        idade: data.age,
        peso: data.weight,
        porte: data.porte,
        raça: data.race,
        descrição: data.description,
        email: data.email,
        telefone: data.phone,
        bairro: data.bairro,
        cidade: data.city,
        uf: data.uf,
        petImg: imagePetUrl
      })
      .then(() => Alert.alert('Pet criado com sucesso!'));
    navigation.navigate(ROUTES.MY_PETS).catch(error => console.log(error));
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }

    const reference = storage().ref(`PetPhoto/${image}`);
    await reference.putFile(image);
    const url = await storage().ref(`PetPhoto/${image}`).getDownloadURL();

    return url;
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(petSchema)
  });

  return (
    <VStack flex={1}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView>
          <BackAction title="Criar Pet" onPress={navigation.goBack} />
        </SafeAreaView>
        <ScrollView>
          <Center px={10}>
            <View style={{ marginBottom: 25 }} />

            {image != null ? (
              <Image style={style.photoPet} source={{ uri: image }} alt="petPhoto" />
            ) : null}

            <SolidButton mt={3} mb={6} title="Selecionar foto" width={180} onPress={choosePhoto} />

            <Controller
              name="namePet"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Nome do pet"
                  onChangeText={onChange}
                  errorMessage={errors.namePet?.message}
                />
              )}
            />
            <Controller
              name="porte"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl isRequired>
                  <Select
                    width={310}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    selectedValue={value}
                    onValueChange={itemValue => {
                      onChange(itemValue);
                    }}
                    style={style.select}
                    variant="rounded"
                    accessibilityLabel="Tipo de pet"
                    placeholder="Porte do pet"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />
                    }}
                    mt="1">
                    <Select.Item label="Pequeno" value="pequeno" />
                    <Select.Item label="Médio" value="medio" />
                    <Select.Item label="Grande" value="grande" />
                  </Select>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Selecione o porte do pet
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              name="type"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl isRequired>
                  <Select
                    width={310}
                    selectedValue={value}
                    onValueChange={itemValue => {
                      onChange(itemValue);
                    }}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    style={style.select}
                    variant="rounded"
                    accessibilityLabel="Tipo de pet"
                    placeholder="Tipo de pet"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />
                    }}
                    mt="1">
                    <Select.Item label="Cachorro" value="cachorro" />
                    <Select.Item label="Gato" value="gato" />
                    <Select.Item label="Passáro" value="passaro" />
                    <Select.Item label="Roedor" value="roedor" />
                    <Select.Item label="Outros" value="outros" />
                  </Select>

                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Selecione um tipo de pet
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              name="sexPet"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl isRequired>
                  <Select
                    width={310}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    selectedValue={value}
                    onValueChange={itemValue => {
                      onChange(itemValue);
                    }}
                    style={style.select}
                    variant="rounded"
                    accessibilityLabel="Sexo do pet"
                    placeholder="Sexo do pet"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />
                    }}
                    mt="1">
                    <Select.Item label="Fêmea" value="femea" />
                    <Select.Item label="Macho" value="macho" />
                  </Select>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Selecione o porte do pet
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              name="age"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Idade do pet"
                  onChangeText={onChange}
                  errorMessage={errors.age?.message}
                />
              )}
            />

            <Controller
              name="race"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Raça"
                  onChangeText={onChange}
                  errorMessage={errors.race?.message}
                />
              )}
            />

            <Controller
              name="weight"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Peso"
                  onChangeText={onChange}
                  errorMessage={errors.weight?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Telefone"
                  onChangeText={onChange}
                  errorMessage={errors.phone?.message}
                />
              )}
            />

            <Controller
              name="bairro"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
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
                <Input placeholder="UF" onChangeText={onChange} errorMessage={errors.uf?.message} />
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Box alignItems="center" w="100%">
                  <TextArea
                    h={20}
                    placeholder="Descrição"
                    isRequired
                    onChangeText={val => onChange(val)}
                    defaultValue={value}
                    width="300"
                    autoCompleteType={undefined}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    _light={{
                      _hover: {
                        bg: 'coolGray.200',
                        borderColor: 'orange.400'
                      },
                      _focus: {
                        bg: 'coolGray.200:alpha.70',
                        borderColor: 'orange.700'
                      }
                    }}
                    _dark={{
                      bg: 'coolGray.800',
                      _hover: {
                        bg: 'coolGray.900'
                      },
                      _focus: {
                        bg: 'coolGray.900:alpha.70'
                      }
                    }}
                  />
                </Box>
              )}
            />

            <SolidButton mt={8} mb={16} title="Cadastrar" onPress={handleSubmit(addPet)} />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row'
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
    marginTop: 50
  },
  exit: {
    width: 40,
    height: 40,
    marginLeft: 60,
    marginTop: 60,
    backgroundColor: '#DB652F',
    borderRadius: 5
  },
  filter: {
    marginLeft: 30,
    marginTop: 60,
    width: 40,
    height: 40,
    borderRadius: 5
  },
  switch: {
    flexDirection: 'row'
  },
  select: {
    marginRight: 10
  },
  photoPet: {
    marginBottom: 15,
    width: '100%',
    height: 250,
    borderRadius: 50
  }
});
