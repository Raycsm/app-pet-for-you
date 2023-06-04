import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigation from './AuthNavigation';
import UserAutheticated from './UserAutheticated';

export default function Routes() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);
  return (
    <NavigationContainer independent={true}>
      {user ? <UserAutheticated /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
