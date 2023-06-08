/* eslint-disable no-unused-vars */
import {Button, Icon, ScrollView,Image,Text} from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Linking} from 'react-native';
import Foundations from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carrousel from '../components/Carrousel/carrousel';
import {TextGrey} from '../components/TextGrey';
import DialogFilter from '../components/DialogFilter';
import firestore from '@react-native-firebase/firestore';
import { UserContext } from '../context/UserProvider';
import CardPetsHome from '../components/CardPetsHome';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_cat.jpg?alt=media&token=efac84f3-96b7-44c8-8cea-b5003f7546a5',
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_dog.jpg?alt=media&token=2a579fc8-c108-41b8-8e41-92eb678495f2'
];



const petsCategories = [
  {id:1, name: 'Gatos', icon: 'cat'},
  {id:2, name: 'Cachorros', icon: 'dog'},
  {id:3, name: 'Pássaros', icon: 'bird'},
  {id:4, name: 'Roedores', icon: 'rodent'},
  {id:5, name: 'Outros', icon: 'rabbit'}
];


export default function Home(navigation) {
  const [isLoading, setIsLoading] = React.useState(0);
  const [selectcategory, setselectCategory] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [gato, setGato] = React.useState(false);
  const [pets, setPets] = React.useState([]);
  const {logout} = React.useContext(UserContext);

  React.useEffect( () => {
        firestore()
        .collection('animal')
        .onSnapshot(
          querySnapshot => {
            const petsData = []
            querySnapshot.forEach((doc)=>{
              petsData.push({
                id: doc.id,
                ...doc.data(),
              })
            })
            setPets(petsData)
          }
        )
  }, []);


  async function getCats() {
      setPets([]);
     const cats = [];
     const citiesRef = firestore().collection('animal')
     const snapshot = await citiesRef.where('tipoPet', '==', 'gato').get();    
     snapshot.forEach( (c) => {cats.push({key: c.id, ...c.data()} )})                                      
     setPets(cats);
     if (snapshot.empty) {
      <Text>Nenhum dado encontrado!</Text>
      return;
     }  
  }

  async function getDogs() {
    setPets([]);
   const dogs = [];
   const citiesRef = firestore().collection('animal')
   const snapshot = await citiesRef.where('tipoPet', '==', 'cachorro').get();    
   snapshot.forEach( (d) => {dogs.push({key: d.id, ...d.data()} )})                                      
   setPets(dogs);
   console.log(dogs)
   if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
   }  
}

async function getBirds() {
  setPets([]);
 const birds = [];
 const citiesRef = firestore().collection('animal')
 const snapshot = await citiesRef.where('tipoPet', '==', 'passaros').get();    
 snapshot.forEach( (b) => {birds.push({key: b.id, ...b.data()} )})                                      
 setPets(birds);
 if (snapshot.empty) {
  <Text>Nenhum dado encontrado!</Text>
  return;
 }  
}

async function getRodents() {
  setPets([]);
 const rodents = [];
 const citiesRef = firestore().collection('animal')
 const snapshot = await citiesRef.where('tipoPet', '==', 'roedor').get();    
 snapshot.forEach( (r) => {rodents.push({key: r.id, ...r.data()} )})                                      
 setPets(rodents);
 if (snapshot.empty) {
  <Text>Nenhum dado encontrado!</Text>
  return;
 }  
}

async function getOthers() {
  setPets([]);
 const others = [];
 const citiesRef = firestore().collection('animal')
 const snapshot = await citiesRef.where('tipoPet', '==', 'outros').get();    
 snapshot.forEach( (o) => {others.push({key: o.id, ...o.data()} )})                                      
 setPets(others);
 if (snapshot.empty) {
  <Text>Nenhum dado encontrado!</Text>
  return;
 }  
}

const handleCategory = (index) => {
  
    if (index === 0) {
      getCats()
    }
     else if (index === 1) {
      getDogs()
    }
    else if (index === 2) {
      getBirds()
    }
    else if (index === 3) {
      getRodents()
    }
    else if (index === 4) {
      getOthers()
    }
    
}
  return (
    <View>
      <DialogFilter visible={visible} setVisible={setVisible}/>
      <ScrollView>
        <View style={style.containerHeader}>
          <Button
            onPress={() => setVisible(true)}
            style={style.filter}
            backgroundColor={'#DB652F'}
            rightIcon={<Icon as={Foundations} name="filter" size="xl" />}
          />

          <Image
            style={style.logo_home}
            alt='logo_home'
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/logo.png?alt=media&token=ed7ba77b-b2f7-4349-ad3c-34abbd26f5bb'
            }}
          />

          <Button
            style={style.exit}
            onPress={() => logout()}
            backgroundColor={'#DB652F'}
            leftIcon={<Icon as={Ionicons} name="ios-exit" size="xl" />}
          />
        </View>

        <Carrousel images={images} />

        <View style={style.categoryPet}>
          {petsCategories.map((item, index) => (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  setselectCategory(index); 
                  handleCategory(index)
                }}
                style={[
                  style.buttonCategories,
                  {
                    backgroundColor: selectcategory === index ? '#DB652F' : '#a1a1a1'
                  }
                ]}>
                <Icons name={item.icon} color={'white'} size={30} />
              </TouchableOpacity>
              <Text style={style.categoryName}>{item.name}</Text>
            </View>
          ))}
        </View>

        <TextGrey style={style.text}>Pets disponíveis</TextGrey>
        <View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={pets}
            scrollEventThrottle={16}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>  (
               <CardPetsHome item={item} />
             )}
            style={{ flex: 1 }}
          />
        </View>
        </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row'
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center'
  },
  logo_home: {
    width: 100,
    height: 60,
    marginLeft: 90,
    marginTop: 50
  },
  exit: {
    width: 40,
    height: 40,
    marginLeft: 60,
    marginTop: 60,
    backgroundColor: '#DB652F',
    borderRadius: 5
  },
  filter: {
    marginLeft: 30,
    marginTop: 60,
    width: 40,
    height: 40,
    borderRadius: 5
  },
  categoryPet: {
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'space-around',
    marginTop: 20
  },
  buttonCategories: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#DB652F'
  },
  categoryName: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold'
  }
});
