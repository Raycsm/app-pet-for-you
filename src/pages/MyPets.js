/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext} from 'react';
import {SafeAreaView, ScrollView, FlatList, View} from 'react-native';
import BackAction from '../components/BackAction';
import CardPet from '../components/CardPet'
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


export default function MyPets({navigation, route}) {
  const [pets, setPets] = useState([]);
  const [petData, setUserData] = useState(null);

  const authUser = auth();
  const user = authUser.currentUser;

  const fetchPets = async () => {
    try {
      const list = [];

      await firestore()
        .collection('animal')
        .where('IdUsuario', '==', route.params ? route.params.IdUsuario : user.uid)
        .orderBy('nomePet', 'desc')
        .get()
        .then((querySnapshot) => {

          querySnapshot.forEach((doc) => {
            const {
              nomePet,
              IdUsuario,
              peso,
              idade,
              porte,
              raça,
              sexoPet,
              tipoPet,
              petImg,
              descrição,
              bairro,
              cidade,
              uf,
            } = doc.data();
            list.push({
              uid: doc.id,
              IdUsuario,
              nomePet,
              peso,
              idade,
              porte,
              raça,
              sexoPet,
              tipoPet,
              petImg,
              descrição,
              bairro,
              cidade,
              uf,
            });
          });
        });

      setPets(list);

      console.log('Pets: ', pets);
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async() => {
    await firestore()
    .collection('usuario')
    .doc( route.params ? route.params.IdUsuario : user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  React.useEffect(() => {
    getUser();
    fetchPets();
  }, []);


  const routePet = (item) => {
    console.log(item)
    navigation.dispatch(
      CommonActions.navigate({
        name: 'EditPet',
        params: {pets: item},
      })
    );
  };

  const renderItem = ({item}) => (
    <CardPet item={item} onPress={() => routePet(item)} />
  );

 
  return (
    <SafeAreaView>
      <BackAction title="Meus Pets" onPress={navigation.goBack} />
      <ScrollView>
      <View>
        <FlatList
            data={pets}        
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
