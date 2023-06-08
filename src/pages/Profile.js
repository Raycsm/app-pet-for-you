 /* eslint-disable react-hooks/exhaustive-deps */

import auth from '@react-native-firebase/auth';
import {Center, Icon, KeyboardAvoidingView, Pressable, VStack, Avatar} from 'native-base';
import * as React from 'react';
import {Alert, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackAction from '../components/BackAction';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


export default function Profile({navigation}) {
  const [show, setShow] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [image, setImage] = React.useState(null);
  

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

  const authUser = auth();
  const user = authUser.currentUser;

  const getUser = async() => {
     firestore()
    .collection('usuario')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

    const updateUser = async () => {
      const imageUserUrl = await uploadImage();
      console.log('Image Url: ', imageUserUrl);

      const updateData = {}

        if (userData.name) {
          updateData.nome = userData.name;
        }

        if (userData.email) {
          updateData.email = userData.email;
        }

        if (userData.password) {
          updateData.senha = userData.password;
        }

        if (userData.phone) {
          updateData.telefone = userData.phone;
        }

        if (image) {
          updateData.usuarioImg = image
        }

        firestore()
          .collection('usuario')
          .doc(user.uid)
          .update(updateData)
          .then(() => getUser())
          .then(Alert.alert('Atualizado com sucesso!'))
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

      React.useEffect(() => {
        getUser();
      }, []);
    
    return (
      <VStack flex={1}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SafeAreaView>
            <BackAction title="Meu perfil" onPress={navigation.goBack} />
          </SafeAreaView>
          <ScrollView>
            <Center px={10}>

              <TouchableOpacity onPress={choosePhoto}>
                <Avatar style={style.photoUser} 
                source={{uri: image
                  ? image
                  : userData ? userData.usuarioImg || 
                  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/assets%2Ficons8-avatar-96.png?alt=media&token=a7943aa1-ff8d-4eda-8c44-7c3186ec1234' 
                  :'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/assets%2Ficons8-avatar-96.png?alt=media&token=a7943aa1-ff8d-4eda-8c44-7c3186ec1234'}} 
                  alt="userPhoto" 
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
                placeholder="Nome"
                value={userData ? userData.nome : ''}
                onChangeText={(txt) => setUserData({...userData, nome: txt})}
              />
            
              <Input
                placeholder="E-mail"
                value={userData ? userData.email : ''}
                onChangeText={(txt) => setUserData({...userData, email: txt})}
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
                value={userData ? userData.senha : ''}
                onChangeText={(txt) => setUserData({...userData, senha: txt})}
              />

              <Input
                placeholder="Telefone"
                value={userData ? userData.telefone : ''}
                onChangeText={(txt) => setUserData({...userData, telefone: txt})}
              />

              <SolidButton mt={3} mb={16} title="Atualizar" onPress={updateUser} />
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
    height:180,
    marginTop:30,
    backgroundColor: '#f5f5f5'
  },
});

