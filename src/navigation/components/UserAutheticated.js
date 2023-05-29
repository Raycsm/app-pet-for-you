/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MoreButton} from '../../components/Buttons/MoreButton';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import React from 'react';
import {Text} from 'react-native-paper';
import {ROUTES} from '../../Constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {Home, Favorites, Adoption, Profile, AboutUs, MyPets, CreatePet, MyApplications} from '../../Screens';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function AdoptionNavigation(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={ROUTES.ADOPTION} component={Adoption} />
      <Stack.Screen name={ROUTES.MY_PETS} component={MyPets} />
      <Stack.Screen name={ROUTES.CREATE_PET} component={CreatePet} />
      <Stack.Screen name={ROUTES.MY_APPLICATIONS} component={MyApplications} />
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
        tabBarStyle: {height: 60},
      }}>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <IconFeather
                name="home"
                size={20}
                color={focused ? '#DB652F' : '#8B8888'}
              />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES_TAB}
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <IconIonicons
                name="md-heart"
                size={20}
                color={focused ? '#DB652F' : '#8B8888'}
              />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Favoritos
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="AdoptionNavigation"
        component={AdoptionNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size}) => (
            <MoreButton size={size} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.ABOUTUS_TAB}
        component={AboutUs}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <IconIonicons
                name="ios-people"
                size={20}
                color={focused ? '#DB652F' : '#8B8888'}
              />
              <Text
                allowFontScaling={false}
                style={{
                  color: focused ? '#DB652F' : '#8B8888',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Sobre Nós
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE_TAB}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
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
                  textAlign: 'center',
                }}>
                Perfil
              </Text>
            </>
          ),
        }}
        initialParams={{ userData }}
      />
    </Tab.Navigator>
  );
}


