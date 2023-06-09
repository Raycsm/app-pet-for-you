/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Button, Icon, ScrollView,Image,Text} from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carrousel from '../components/Carrousel/carrousel';
import {TextGrey} from '../components/TextGrey';
import firestore from '@react-native-firebase/firestore';
import { UserContext } from '../context/UserProvider';
import CardPetsHome from '../components/CardPetsHome';
import auth from '@react-native-firebase/auth';

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
  const [selectcategory, setselectCategory] = React.useState();
  const [pets, setPets] = React.useState([]);
  const {logout} = React.useContext(UserContext);
  const [userData, setUserData] = React.useState([]);

  React.useEffect( () => {
        firestore()
        .collection('animal')
        .onSnapshot(
          querySnapshot => {
            const petsData = []
            if(querySnapshot)
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
     const catsRef = firestore().collection('animal')
     const snapshot = await catsRef.where('tipoPet', '==', 'gato').get();    
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
   const dogsRef = firestore().collection('animal')
   const snapshot = await dogsRef.where('tipoPet', '==', 'cachorro').get();    
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
  const birdsRef = firestore().collection('animal')
  const snapshot = await birdsRef.where('tipoPet', '==', 'passaros').get();    
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
  const rodentsRef = firestore().collection('animal')
  const snapshot = await rodentsRef.where('tipoPet', '==', 'roedor').get();    
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
  const othersRef = firestore().collection('animal')
  const snapshot = await othersRef.where('tipoPet', '==', 'outros').get();    
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

  const authUser = auth();
  const user = authUser.currentUser;

  const getUser = async() => {
    firestore()
   .collection('usuario')
   .doc(user.uid)
   .get()
   .then((documentSnapshot) => {
     if( documentSnapshot.exists ) {
       setUserData(documentSnapshot.data());
     }
   })
 }

  React.useEffect(() => {
    getUser();
  }, []);
    

  return (
    <View>
      <ScrollView>
        <View style={style.containerHeader}>
        <View style={{flexDirection:'row', marginTop:70, marginLeft:20}}>
            <Text style={style.saudacao}>Olá, </Text>
            <Text style={style.nome}>{userData.nome} </Text>
        </View>
      
          <Button
            style={style.exit}
            onPress={() => logout()}
            backgroundColor={'#DB652F'}
            leftIcon={<Icon as={Ionicons} name="ios-exit" size="xl" marginLeft={1} />}
          />
        </View>
        <Text style={{marginLeft:20, color: '#434242'}}>Bem vindo ao Pet for You! </Text>

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
  nome:{
    fontWeight:'bold', 
    fontSize:22,
    color: '#434242'
  },
  saudacao:{
    fontSize:22,
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
    marginLeft: 150,
    marginTop: 50
  },
  exit: {
    width: 40,
    height: 40,
    marginLeft: 120,
    marginTop: 60,
    backgroundColor: '#DB652F',
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
