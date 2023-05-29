/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigation from './components/AuthNavigation';
import auth from '@react-native-firebase/auth';
import UserAutheticated from './components/UserAutheticated';
import firestore from '@react-native-firebase/firestore';

export default function Navigation() {
  const [user, setUser] = React.useState(null);

  function getUser({ userId }) {

    React.useEffect(() => {
      const subscriber = firestore()
        .collection('usuario')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
        });

      return () => subscriber();
    }, [userId]);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);
  return (
    <NavigationContainer independent={true}>
      {user ? <UserAutheticated/> : <AuthNavigation />}
    </NavigationContainer>
  );
}
