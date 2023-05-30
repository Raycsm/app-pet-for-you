/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import IconmaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Alert} from 'react-native';

import {
  Center,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  VStack,
} from 'native-base';
import * as React from 'react';
import {Platform, ScrollView} from 'react-native';
import {ROUTES} from '../Constants';
import {OutlineButtonOrange} from '../components/Buttons/OutlineButton';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import {Title} from '../components/Title';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default function SignUp({navigation}) {
  const [show, setShow] = React.useState(false);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bairro, setBairro] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  

   function signUpAuth (data) {
      auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            firestore()
            .collection('usuario')
            .doc(res.user.uid)
            .set({
              nome: data.name,
              email: data.email,
              senha: data.password,
              bairro: data.bairro,
              cidade: data.city,
              uf: data.uf,
            })
            .then(()=> Alert.alert('Conta criada com sucesso!'));
            navigation.navigate( ROUTES.LOGIN)
            .catch((error) => console.log(error));
         });
  }

  return (
    <VStack flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Center px={10}>
            <Logo />

            <Title style={{marginBottom: 30, marginTop: 10}}>Criar Conta</Title>
          
            <Input
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />

            <Input
              placeholder="E-mail"
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
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
            />
            <PetsImage />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
