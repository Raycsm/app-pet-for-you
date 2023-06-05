import {Center, Icon, Pressable, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {OutlineButtonOrange} from '../components/Buttons/OutlineButton';
import {SolidButton} from '../components/Buttons/SolidButton';
import {Input} from '../components/Input';
import Logo from '../components/Logo';
import PetsImage from '../components/PetsImage';
import { UserContext } from '../context/UserProvider';

export default function Login({navigation}) {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {login} = React.useContext(UserContext);

  return (
    <VStack flex={1} px={10}>
      <Center>
        <Logo />
          
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
                  as={<IconMaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
                  size={5}
                  mr="5"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
            <Text
              style={{
                color: '#DB652F',
                marginLeft: 200
              }}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>

        <SolidButton mt={4} mb={2} title="Entrar"  onPress={() => login(email, password)} />

        <OutlineButtonOrange
          mt={8}
          mb={16}
          title="Criar Conta"
          onPress={() => navigation.navigate('Signup')}
        />

        <PetsImage />
      </Center>
    </VStack>
  );
}
