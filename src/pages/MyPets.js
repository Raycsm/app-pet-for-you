/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import BackAction from '../components/BackAction';
import { Box, HStack, Heading, Image, Stack, Text, AspectRatio, View} from 'native-base';
import firestore from '@react-native-firebase/firestore';


export default function MyPets({navigation}) {
  const [pets, setPets] = React.useState([]);

  React.useEffect(async () => {
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
  return (
    <SafeAreaView>
      <BackAction title="Meus Pets" onPress={navigation.goBack} />
      <ScrollView>
      <View>
        <FlatList
            data={pets}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>  (
              <Box alignItems="center">
                <TouchableOpacity>
                  <Box
                    width={300}
                    height={300}
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
                        <Image source={{uri: item.petImg}} alt="imagePet" />
                      </AspectRatio>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          {item.nomePet}
                        </Heading>
                        <HStack space={15} justifyContent="space-between">
                          <Text>{item.raça}</Text>
                          <Text>{item.idade}</Text>
                          <Text>{item.sexoPet}</Text>
                          <Text>{item.porte}</Text>
                        </HStack>
                      </Stack>
                    </Stack>
                  </Box>
                </TouchableOpacity>
              </Box>
            )}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
