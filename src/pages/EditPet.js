import {StyleSheet, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  Center,
  KeyboardAvoidingView,
  VStack,
  Select,
  CheckIcon,
  Box,
  TextArea,
  Avatar
} from 'native-base';
import  React, {useState, useEffect} from 'react';
import {Platform, ScrollView, Alert} from 'react-native';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import BackAction from '../components/BackAction';
import 'firebase/storage';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';

export default function EditPet({navigation, props}) {

  console.log(props);

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [petData, setPetData] = React.useState(null);
  const [uid, setUid] = React.useState('');

  const choosePhoto = () =>{
    ImagePicker.openPicker({
      width:500,
      height:500,
      cropping:true,
    }).then((photo) => {
      console.log(photo);
      const imageUri = Platform.OS === 'ios' ? photo.sourceURL : photo.path;
      setImage(imageUri);
    }).catch(err => console.log(err));
  };

    const updatePet = async (animal) => {
      const imageUserUrl = await uploadImage();
      console.log('Image Url: ', imageUserUrl);

      const updateData = {}

        if (petData.namePet) {
          updateData.nomePet = petData.namePet;
        }

        if (petData.age) {
          updateData.idade = petData.age;
        }

        if (petData.race) {
          updateData.raça = petData.race;
        }

        if (petData.weight) {
          updateData.peso = petData.weight;
        }

        if (petData.porte) {
          updateData.porte = petData.porte;
        }

        if (petData.uf) {
          updateData.uf = petData.uf;
        }

        if (petData.typePet) {
          updateData.tipoPet = petData.typePet;
        }

        if (petData.description) {
          updateData.descrição = petData.description;
        }

        if (petData.petImg) {
          updateData.petImg = petData.petImg;
        }

        if (petData.bairro) {
          updateData.bairro = petData.bairro;
        }

        if (petData.city) {
          updateData.cidade = petData.city;
        }

        if (petData.uf) {
          updateData.uf = petData.uf;
        }

        firestore()
          .collection('animal')
          .doc(uid)
          .update(updateData)
          .then(() => Alert.alert('Atualizado com sucesso!'))
          .catch(error => {
            console.log('Erro ao atualizar:', error);
          });
      }

  const uploadImage = async () => {
    if ( image == null ) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    try {
      await task;

      const url = await storageRef.getDownloadURL();
      setImage(null);

      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  return (
    <VStack flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView>
              <BackAction title="Editar Pet" onPress={navigation.goBack} />
          </SafeAreaView>
        <ScrollView>
          <Center px={10}>

            <View style={{marginBottom:25}} />
            
            <TouchableOpacity onPress={choosePhoto}>
            <Avatar style={style.photoUser} size={180} source={{uri: image}} alt="petPhoto"> + </Avatar>
            </TouchableOpacity>
            <SolidButton
              mt={3}
              mb={6}
              title="Selecionar foto"
              width={180}
              onPress={choosePhoto}
            />

            <Input
              placeholder="Nome do pet"
              value={petData ? petData.nome : ''}
              onChangeText={(txt) => setPetData({...petData, nomePet: txt})}
            />

            <Select width={310}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    isRequired
                    value={petData ? petData.porte : ''}
                    onChange={(txt) => setPetData({...petData, porte: txt})}
                    style={style.select}
                    variant="rounded"
                    accessibilityLabel="Tipo de pet"
                    placeholder="Porte do pet"
                    _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size={5} />,
                    }} mt="1">
              <Select.Item label="Pequeno" value="pequeno" />
              <Select.Item label="Médio" value="medio" />
              <Select.Item label="Grande" value="grande" />
            </Select>

            <Select width={310}
                    value={petData ? petData.tipoPet : ''}
                    onValueChange={(txt) => setPetData({...petData, tipoPet: txt})}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    style={style.select}
                    variant="rounded"
                    accessibilityLabel="Tipo de pet"
                    placeholder="Tipo de pet"
                    _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size={5} />,
                    }} mt="1">

              <Select.Item label="Cachorro" value="cachorro" />
              <Select.Item label="Gato" value="gato" />
              <Select.Item label="Passáro" value="passaro" />
              <Select.Item label="Roedor" value="roedor" />
              <Select.Item label="Outros" value="outros" />
            </Select>

            <Select width={310}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    value={petData ? petData.sexoPet : ''}
                    onValueChange={(txt) => setPetData({...petData, sexoPet: txt})}
                    style={style.select}
                    variant="rounded"
                    accessibilityLabel="Sexo do pet"
                    placeholder="Sexo do pet"
                    _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size={5} />,
                    }} mt="1">
              <Select.Item label="Fêmea" value="femea" />
              <Select.Item label="Macho" value="macho" />
            </Select>

            <Input
              placeholder="Idade do pet"
              value={petData ? petData.idade : ''}
              onChangeText={(txt) => setPetData({...petData, idade: txt})}
            />

            <Input
              placeholder="Raça"
              value={petData ? petData.raça : ''}
              onChangeText={(txt) => setPetData({...petData, raça: txt})}
            />

            <Input
              placeholder="Peso"
              value={petData ? petData.peso : ''}
              onChangeText={(txt) => setPetData({...petData, peso: txt})}
            />

            <Input
              placeholder="Bairro"
              value={petData ? petData.bairro : ''}
                onChangeText={(txt) => setPetData({...petData, bairro: txt})}
            />

            <Input
              placeholder="Cidade"
              value={petData ? petData.cidade : ''}
              onChangeText={(txt) => setPetData({...petData, cidade: txt})}
            />

            <Input
              placeholder="UF"
              value={petData ? petData.uf : ''}
              onChangeText={(txt) => setPetData({...petData, uf: txt})}
            />

            <Box alignItems="center" w="100%">
              <TextArea
              h={20}
              placeholder="Descrição"
              isRequired
              value={petData ? petData.descrição : ''}
              onChangeText={(txt) => setPetData({...petData, descrição: txt})}
              width="300"
              autoCompleteType={undefined}
              bg={'#dfdfdf'}
              fontSize="md"
              _light={{
                _hover: {
                  bg: 'coolGray.200',
                  borderColor: 'orange.400',
                },
                _focus: {
                  bg: 'coolGray.200:alpha.70',
                  borderColor: 'orange.700',
                },
              }} _dark={{
                bg: 'coolGray.800',
                _hover: {
                  bg: 'coolGray.900',
                },
                _focus: {
                  bg: 'coolGray.900:alpha.70',
                },
              }}
              />
            </Box>

            <SolidButton
              mt={8}
              mb={16}
              title="Atualizar"
              onPress={updatePet}
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
    alignContent: 'center',
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
  switch:{
    flexDirection:'row',
  },
  select:{
    marginRight:10,
  },
  photoPet:{
    marginBottom: 15, 
  },
});