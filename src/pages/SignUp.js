import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Alert} from 'react-native';

import {
  Center,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  VStack,
  Avatar
} from 'native-base';
import * as React from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';
import {OutlineButtonOrange} from '../components/Buttons/OutlineButton';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import {Title} from '../components/Title';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthContext } from '../navigation/components/AuthProvider';

export default function SignUp({navigation}) {
  const [show, setShow] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [city, setCity] = React.useState('');
  const [uf, setUf] = React.useState('');

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

  
  const signUpAuth = async() => {

    const imagePetUrl = await uploadImage();
    console.log('Image Url: ', imagePetUrl);

    if ((name, email, password, bairro, city, uf !== '')){

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
          firestore()
          .collection('usuario')
          .doc(res.user.uid)
          .set({
            nome: name,
            email: email,
            senha: password,
            bairro: bairro,
            cidade: city,
            uf: uf,
            userImg: imagePetUrl,
          })
          .then(()=> Alert.alert('Conta criada com sucesso!'));
          navigation.navigate('Login')
          .catch((error) => console.log(error));
      
        });
    }else {
      Alert.alert('Preencha todos os campos!');
    }
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
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Center px={10}>
            <Logo />

            <Title style={{marginBottom: 30, marginTop: 10}}>Criar Conta</Title>

            {image != null ? <Avatar style={style.photoUser} source={{uri: image}} alt="userPhoto" /> : null}

            <SolidButton
              mt={3}
              mb={6}
              title="Selecionar foto"
              width={180}
              onPress={choosePhoto}
            />
          
            <Input
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />

            <Input
              placeholder="E-mail"
              type='email'
              onChangeText={setEmail}
              value={email}
            />

            <Input
              type={show ? 'text' : 'password'}
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
              onChangeText={setPassword}
              evalue={password}
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

            <SolidButton
              mt={3}
              title="Criar Conta"
              onPress={(signUpAuth)}
            />
            <OutlineButtonOrange
              mt={8}
              mb={8}
              title="Login"
              onPress={() => navigation.navigate('Login')}
            />
            <PetsImage />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}

const style = StyleSheet.create({
  photoUser:{
    marginBottom: 15,
    width:180,
    height:180
    
  },
});

