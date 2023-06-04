import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
            if (( email, password !== '')){
                try {
                    await auth().signInWithEmailAndPassword(email, password);
                    Alert.alert('Logado com sucesso!')
                } catch (e) {
                    Alert.alert('Senha ou e-mail errados!')
                    console.log(e);
                    switch (e.code){
                      case 'auth/user-not-found':
                        Alert.alert('Erro', "Usuário não cadastrado.");
                        break;
                      case 'auth/wrong-password':
                        Alert.alert('Erro', "Senha errada.");
                        break;
                      case 'auth/invalid-email':
                        Alert.alert('Erro', "Email inválido.");
                        break;
                    }
                }
            }else{ Alert.alert('Preencha todos os campos!')}},
           
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </UserContext.Provider>
  );
};