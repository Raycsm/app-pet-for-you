/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext} from 'react';
import {SafeAreaView, ScrollView, FlatList, View} from 'react-native';
import BackAction from '../components/BackAction';
import CardPet from '../components/CardPet'
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


export default function MyPets({navigation}) {
  const [pets, setPets] = useState([]);

  const getPet = () => {
      
      const unsubscriber = firestore()
          .collection('animal')
          .onSnapshot(
          querySnapshot => {
              const petsData = []
              querySnapshot.forEach((doc)=>{
                console.log(doc)
              petsData.push({
                  id: doc.id,
                  ...doc.data(),
              })
              })
              setPets(petsData)
          }
          )
      return () => unsubscriber();

  }

  React.useEffect(()=>{
    getPet()
  }, []);

  const routePet = (item) => {
    console.log(item)
    navigation.dispatch(
      CommonActions.navigate({
        name: 'EditPet',
        params: {id: item},
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
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
