/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/exhaustive-deps */

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Center, Icon, KeyboardAvoidingView, Pressable, VStack, Avatar} from 'native-base';
import * as React from 'react';
import {Alert, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackAction from '../components/BackAction';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import ImagePicker from 'react-native-image-crop-picker';



export default function Profile({navigation, route}) {
  const [show, setShow] = React.useState(false);
  const {userData, defaultValue} = route.params;
  const [defaultValues, setDefaultValues] = React.useState({});
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


  const userAuth = auth().currentUser;

  if (userAuth != null) {

    const updateUser = () => {
      if (userAuth != null) {
        const uid = userAuth.uid;

        React.useEffect(() => {
          setDefaultValues({
            ...defaultValues,
            bairro: userData.bairro,
            city: userData.cidade
          });
        }, [defaultValue]);

        const updateData = {};

        if (password) {
          updateData.senha = password;
        }

        if (bairro) {
          updateData.bairro = bairro;
        }

        if (city) {
          updateData.cidade = city;
        }

        if (uf) {
          updateData.uf = uf;
        }

        if (image) {
          updateData.userImg = image;
        }

        firestore()
          .collection('usuario')
          .doc(uid)
          .update(updateData)
          .then(() => Alert.alert('Atualizado com sucesso!'))
          .catch(error => {
            console.log('Erro ao atualizar:', error);
          });
      }
    };

    function getUser({userId}) {
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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView>
            <BackAction title="Meu perfil" onPress={navigation.goBack} />
          </SafeAreaView>
          <ScrollView>
            <Center px={10}>

              <TouchableOpacity onPress={choosePhoto}>
                <Avatar style={style.photoUser} source={{uri: image}} alt="petPhoto" 
               />
              </TouchableOpacity>
            
            <SolidButton
              mt={3}
              mb={6}
              title="Selecionar foto"
              width={180}
              onPress={choosePhoto}
            />

             
              <Input
                isDisabled
                placeholder="Nome"
                onChangeText={setName}
                value={name}
              />
            
              <Input
                isDisabled
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
              />

              <Input
                type={show ? 'text' : 'password'}
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
                onChangeText={setPassword}
                value={password}
                defaultValue={password}
              />
            
              <Input
                placeholder="Bairro"
                onChangeText={setBairro}
                value={bairro}
                defaultValue={bairro}
              />
          
              <Input
                placeholder="Cidade"
                onChangeText={setCity}
                value={city}
                defaultValue={city}
              />
          
              <Input
                placeholder="UF"
                onChangeText={setUf}
                value={uf}
                defaultValue={uf}
               />

              <SolidButton mt={3} mb={16} title="Atualizar" onPress={updateUser} />
            </Center>
          </ScrollView>
        </KeyboardAvoidingView>
      </VStack>
    );
  }
}

const style = StyleSheet.create({
  photoUser:{
    marginBottom: 15,
    width:180,
    height:180,
    marginTop:30 
  },
});

