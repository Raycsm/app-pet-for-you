/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigation from './components/AuthNavigation';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import UserAutheticated from './components/UserAutheticated';

export default function Navigation() {
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);

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
