/* eslint-disable react-hooks/exhaustive-deps */
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
import { DialogDelete } from '../components/DialogDelete';

export default function EditPet({route, navigation}) {

  console.log(route.params.pets);

  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uid, setUid] = useState('');
  const [nomePet, setNomePet] = useState('');
  const [tipoPet, setTipoPet] = useState('');
  const [peso, setPeso] = useState('');
  const [sexoPet, setSexoPet] = useState('');
  const [idade, setIdade] = useState('');
  const [porte, setPorte] = useState('');
  const [raça, setRaça] = useState('');
  const [descrição, setDescrição] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect (()=> {
    setUid(route.params.pets.uid);
    setNomePet(route.params.pets.nomePet);
    setTipoPet(route.params.pets.tipoPet);
    setPeso(route.params.pets.peso);
    setSexoPet(route.params.pets.sexoPet);
    setIdade(route.params.pets.idade);
    setPorte(route.params.pets.porte);
    setRaça(route.params.pets.raça);
    setDescrição(route.params.pets.descrição);
    setBairro(route.params.pets.bairro);
    setCidade(route.params.pets.cidade);
    setUf(route.params.pets.uf);
    setImage(route.params.pets.petImg);
  },[]);

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

  const deletePet  = async () => {
   await firestore()
    .collection('animal')
    .doc(uid)
    .delete()
    .then(() => {
      Alert.alert('Pet deletado com sucesso!')
      navigation.navigate('Adoption')
    });
  }

  const updatePet = async () => {

    setIsLoading(true)
    const imageUserUrl = await uploadImage();
    console.log('Image Url: ', imageUserUrl);

      firestore()
        .collection('animal')
        .doc(uid)
        .set(
          {
          nomePet: nomePet,
          peso: peso,
          idade: idade,
          porte:porte,
          raça: raça,
          sexoPet:sexoPet,
          tipoPet:tipoPet,
          petImg:image,
          descrição:descrição,
          bairro:bairro,
          cidade:cidade,
          uf:uf,
          },
          { merge: true },
        )
        .then(() => Alert.alert('Atualizado com sucesso!'))
        .catch(error => {
          console.log('Erro ao atualizar:', error)
        .finally(isLoading(false));
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
            <Avatar style={style.photoUser} size={180} source={{uri: image ? image : 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/assets%2Ficons8-avatar-96.png?alt=media&token=a7943aa1-ff8d-4eda-8c44-7c3186ec1234'}} alt="petPhoto"> + </Avatar>
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
              value={nomePet}
              onChangeText={(v) => setNomePet(v)}
            />
            {porte !== "" && (
              <Select width={310}
                      bg={'#dfdfdf'}
                      fontSize="md"
                      mb={6}
                      isRequired
                      value={porte}
                      selectedValue={porte}
                      onChange={(v)=> setPorte(v)}
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
              )}
            {tipoPet !== "" && (      
                <Select width={310}
                value={tipoPet}
                selectedValue={tipoPet}
                onChange={(v) => setTipoPet(v)}
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
              )}
             {sexoPet !== "" && (
                <Select width={310}
                bg={'#dfdfdf'}
                fontSize="md"
                mb={6}
                selectedValue={sexoPet}
                value={sexoPet}
                onValueChange={(v) => setSexoPet(v)}
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
             )}       

            <Input
              placeholder="Idade do pet"
              value={idade}
              onChangeText={(v) => setIdade(v)}
            />

            <Input
              placeholder="Raça"
              value={raça}
              onChangeText={(v) => setRaça(v)}
            />

            <Input
              placeholder="Peso"
              value={peso}
              onChangeText={(v) => setPeso(v)} 
            />

            <Input
              placeholder="Bairro"
              value={bairro}
              onChangeText={(v) => setBairro(v)} 
            />

            <Input
              placeholder="Cidade"
              value={cidade}
              onChangeText={(v) => setCidade(v)} 
            />

            <Input
              placeholder="UF"
              value={uf}
              onChangeText={(v) => setUf(v)} 
            />

            <Box alignItems="center" w="100%">
              <TextArea
              h={20}
              placeholder="Descrição"
              isRequired
              value={descrição}
              onChangeText={(v) => setDescrição(v)}
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
              mb={3}
              title="Atualizar"
              onPress={updatePet}
            />
            <DialogDelete isOpen={isOpen} setIsOpen={setIsOpen} onPress={deletePet} />
            <SolidButton
            backgroundColor={'#b00202'}
              mt={8}
              mb={16}
              title="Deletar"
              onPress={() => setIsOpen(true)}
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
    backgroundColor: '#f5f5f5',
  },
});