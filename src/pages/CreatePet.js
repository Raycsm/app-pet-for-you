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


export default function CreatePet({navigation}) {

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [namePet, setNamePet] = useState('');
  const [typePet, setTypePet] = useState('');
  const [weight, setWeight] = useState('');
  const [sexPet, setSexPet] = useState('');
  const [age, setAge] = useState('');
  const [porte, setPorte] = useState('');
  const [race, setRace] = useState('');
  const [description, setDescription] = useState('');
  const [bairro, setBairro] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

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
    

  const addPet = async () => {
    setIsLoading(true)
    const imagePetUrl = await uploadImage();
    console.log('Image Url: ', imagePetUrl);

    if ((namePet, typePet, sexPet, age, weight, porte, race, description, bairro, city, uf !== '')){

      firestore()
      .collection('animal')
      .add({
        nomePet: namePet,
        tipoPet: typePet,
        sexoPet: sexPet,
        idade: age,
        peso: weight,
        porte: porte,
        raça: race,
        descrição: description,
        bairro: bairro,
        cidade: city,
        uf: uf,
        petImg: imagePetUrl,
      })
      .then(()=> Alert.alert('Pet criado com sucesso!'));
      navigation.navigate('MyPets')
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
    } else {
      Alert.alert('Preencha todos os campos!');
    }
  };

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
              <BackAction title="Criar Pet" onPress={navigation.goBack} />
          </SafeAreaView>
        <ScrollView>
          <Center px={10}>

            <View style={{marginBottom:25}} />
            
            <TouchableOpacity onPress={choosePhoto}>
            <Avatar style={style.photoPet} source={{uri: image}} alt="petPhoto" />
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
              onChangeText={setNamePet}
              value={namePet}
            />

            <Select width={310}
                    bg={'#dfdfdf'}
                    fontSize="md"
                    mb={6}
                    isRequired
                    value={porte}
                    onValueChange={setPorte}
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
                    value={typePet}
                    onValueChange={setTypePet}
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
                    value={sexPet}
                    onValueChange={setSexPet}
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
              onChangeText={setAge}
              value={age}
            />

            <Input
              placeholder="Raça"
              onChangeText={setRace}
              value={race}
            />

            <Input
              placeholder="Peso"
              onChangeText={setWeight}
              value={weight}
            />

            <Input
              placeholder="Bairro"
              onChangeText={setBairro}
              value={bairro}
            />

            <Input
              placeholder="Cidade"
              onChangeText={setCity}
              value={city}
            />

            <Input
              placeholder="UF"
              onChangeText={setUf}
              value={uf}
            />

            <Box alignItems="center" w="100%">
              <TextArea
              h={20}
              placeholder="Descrição"
              isRequired
              onChangeText={(val) => setDescription(val)}
              value={description}
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
              title="Cadastrar"
              onPress={addPet}
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
    width:180,
    height:180
    
  },
});


