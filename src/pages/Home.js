/* eslint-disable react-hooks/exhaustive-deps */
import auth from '@react-native-firebase/auth';
import {Button, Icon, ScrollView,  Box, HStack, Heading, Image, Stack, Text, AspectRatio} from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Pressable} from 'react-native';
import Foundations from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carrousel from '../components/Carrousel/carrousel';
import {TextGrey} from '../components/TextGrey';
import firestore from '@react-native-firebase/firestore';
import { SolidButton } from '../components/Buttons/SolidButton';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_cat.jpg?alt=media&token=efac84f3-96b7-44c8-8cea-b5003f7546a5',
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_dog.jpg?alt=media&token=2a579fc8-c108-41b8-8e41-92eb678495f2'
];

const petsCategories = [
  {name: 'Gatos', icon: 'cat'},
  {name: 'Cachorros', icon: 'dog'},
  {name: 'Pássaros', icon: 'bird'},
  {name: 'Roedores', icon: 'rodent'},
  {name: 'Outros', icon: 'rabbit'}
];

export default function Home(navigation) {
  const [selectcategory, setselectCategory] = React.useState(0);
  const [pets, setPets] = React.useState([]);
  const [favorite, setFavorite] = React.useState();

  React.useEffect( () => {
        firestore()
        .collection('animal')
        .onSnapshot(
          querySnapshot => {
            const petsData = []
            querySnapshot.forEach((doc)=>{
              const { nomePet, 
                      peso, 
                      idade,  
                      porte,
                      raça,
                      sexoPet,
                      tipoPet,
                      descrição,
                      bairro,
                      cidade,
                      uf,
                      petImg
              } = doc.data()
              petsData.push({
                id: doc.id,
                nomePet, 
                peso, 
                idade, 
                petImg, 
                porte,
                raça,
                sexoPet,
                tipoPet,
                descrição,
                bairro,
                cidade,
                uf,
              })
            })
            setPets(petsData)
          }
        )
  }, []);

  const signOutAuth = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      });
  };

  return (
    <View>
      <ScrollView>
        <View style={style.containerHeader}>
          <Button
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
            onPress={() => signOutAuth()}
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
              <Box alignItems="center" width={'80'} marginLeft={4}justifyContent="space-around">
                  <Box
                    width={320}
                    height={450}
                    mb={8}
                    mt={8}
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _light={{
                      backgroundColor: 'gray.50'
                    }}>
                    <Box>
                      <AspectRatio w="120%" ratio={16 / 9}>
                        <Image source={{uri: item.petImg}} alt="imagePets" />
                      </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Stack flexDirection={'row'} justifyContent="space-between">
                          <Heading size="md" >
                            {item.nomePet}
                          </Heading>
                          <Text fontSize={12} ml="-1" mt={1} 
                          color={'#000'}>
                            {item.bairro}, {item.cidade}/{item.uf}
                          </Text>
                        </Stack>
                        <HStack space={15} justifyContent="space-between">
                          <Text>Rayane Assis</Text>

                        </HStack>
                        <HStack space={15} justifyContent="space-between">
                          <Text fontWeight={600}>{item.raça}</Text>
                          <Text fontWeight={600}>{item.idade}</Text>
                          <Text fontWeight={600}>{item.peso}</Text>
                          <Text fontWeight={600}>{item.sexoPet}</Text>
                          <Text fontWeight={600}>{item.porte}</Text>
                        </HStack>
                        <HStack space={15}>
                          <Text>{item.descrição}</Text>
                        </HStack>
                        <HStack alignItems="center" mt={5}justifyContent="space-between">
                          <SolidButton
                            title="Chat"
                            width={130}
                            height={30}
                            fontSize={10}
                            paddingBottom={1}
                            paddingTop={1}
                            textAlign="center"
                          />
                          <View>
                            <Button backgroundColor='#DB652F' borderRadius={40}>
                            <Pressable onPress={() => setFavorite((isfavorite) => !isfavorite)}>
                              <Icons
                                name={favorite? "heart" : "heart-outline"}
                                size={24}
                                color={favorite ? "red" : "white"}
                              />
                            </Pressable>
                            </Button>
                          </View>
                        </HStack>
                      </Stack>
                    </Stack>
                  </Box>
              </Box>
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
