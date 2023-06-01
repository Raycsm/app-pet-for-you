
/* eslint-disable no-unused-vars */


/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-paper';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { MoreButton } from '../../components/Buttons/MoreButton';

import {
  AboutUs,
  Adoption,
  CreatePet,
  Favorites,
  Home,
  MyPets,
  Profile,
  Chat,
} from '../../pages';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function AdoptionNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Adoption'} component={Adoption} />
      <Stack.Screen name={'MyPets'} component={MyPets} />
      <Stack.Screen name={'CreatePet'} component={CreatePet} />
      <Stack.Screen name={'Favorites'} component={Favorites} />
    </Stack.Navigator>
  );
}

export default function UserAutheticated() {
  const [userData, setUserData] = React.useState(null);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 }
      }}>
      <Tab.Screen
        name='homeTab'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <IconFeather name="home" size={20} color={focused ? '#DB652F' : '#8B8888'} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center'
                }}>
                Home
              </Text>
            </>
          )
        }}
      />
      <Tab.Screen
        name='chatTab'
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <IconIonicons name="ios-chatbubble-ellipses" size={20} color={focused ? '#DB652F' : '#8B8888'} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center'
                }}>
                Chat
              </Text>
            </>
          )
        }}
      />
      <Tab.Screen
        name="AdoptionNavigation"
        component={AdoptionNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => <MoreButton size={size} focused={focused} />
        }}
      />

      <Tab.Screen
        name='AboutUsTab'
        component={AboutUs}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <IconIonicons name="ios-people" size={20} color={focused ? '#DB652F' : '#8B8888'} />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center'
                }}>
                Sobre Nós
              </Text>
            </>
          )
        }}
      />

      <Tab.Screen
        name='profileTab'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <IconIonicons
                name="person-circle-sharp"
                size={20}
                color={focused ? '#DB652F' : '#8B8888'}
              />

              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center'
                }}>
                Perfil
              </Text>
            </>
          )
        }}
        initialParams={{ userData }}
      />
    </Tab.Navigator>
  );
}
