import React from 'react';
import { UserProvider } from '../context/UserProvider';
import Routes from './components/routes';
import { PetProvider } from '../context/PetProvider';

const Providers = () => {
  return (
    <UserProvider>
      <PetProvider>
      <Routes />
      </PetProvider>
    </UserProvider>
  );
}

export default Providers;