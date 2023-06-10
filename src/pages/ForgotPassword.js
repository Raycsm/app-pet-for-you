import auth from '@react-native-firebase/auth';
import {Center, VStack} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';
import {OutlineButtonOrange} from '../components/Buttons/OutlineButton';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import {Title} from '../components/Title';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const forgotPasswordAuth = () => {
    setIsLoading(true)
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('E-mail enviado com sucesso!', 'Verifique a caixa de entrada do seu e-mail'))
      .catch(error => Alert.alert('Erro','E-mail não enviado,', error))
      .finally(()=> setIsLoading(false));
  };

  return (
    <VStack flex={1} px={10}>
      <Center>
        <Logo />

        <Title style={{marginBottom: 40, marginTop: 10}}> Redefinir a Senha</Title>

              <Input
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
              />
        <SolidButton mt={4} title="Enviar" onPress={(forgotPasswordAuth)} isLoading={isLoading}/>

        <OutlineButtonOrange
          mt={8}
          mb={20}
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />

        <PetsImage />
      </Center>
    </VStack>
  );
}
