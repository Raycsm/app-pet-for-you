import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            
          } catch (error) {
            Alert.alert('Senha ou e-mail errados!', error)
          }
        },
        SignUp: async (email, password, name, bairro, city, uf,) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              firestore().collection('usuario').doc(auth().currentUser.uid)
              .set({
                nome: name,
                email: email,
                senha: password,
                bairro: bairro,
                cidade: city,
                uf: uf,
              })
              .catch(error => {
                  console.log('Erro ao Cadastrar: ', error);
              })
            })
            .catch(error => {
                console.log('Erro ao cadastrar usuário: ', error);
            });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};