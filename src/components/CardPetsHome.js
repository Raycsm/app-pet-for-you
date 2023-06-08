import React from 'react';
import { View, Linking} from 'react-native';
import { Box, HStack,Heading, Image, Stack, Text, AspectRatio, Button} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SolidButton } from './Buttons/SolidButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CardPets({item}) {

   const callPhone = (number) => {
    const phoneNumber = `tel:${number}`; 
       Linking.openURL(phoneNumber);
       };
  
  return (
      <View>
        <Box key={item.key} alignItems="center" width={'80'} marginLeft={4}justifyContent="space-around">
                  <Box
                    width={'100%'}
                   height={480}
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
                          <Text>{item.nomeUsuario}</Text>

                        </HStack>
                        <HStack space={15} justifyContent="space-between">
                          <Text fontWeight={600}>{item.raça}</Text>
                          <Text fontWeight={600}>{item.idade}</Text>
                          <Text fontWeight={600}>{item.peso}</Text>
                          <Text fontWeight={600}>{item.sexoPet}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight={600}>{item.porte}</Text>
                        </HStack>
                        <HStack >
                          <Text>{item.descrição}</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                          <View>
                            <TouchableOpacity>
                            <Button backgroundColor='#DB652F' 
                                    borderRadius={40} 
                                    onPress={()=>callPhone(item.telefone)}
                                    width={60}
                                    mt={4}
                                    >
                              <Icons
                                name={'phone'}
                                size={24}
                                color={"white"}
                              />
                            </Button>
                            </TouchableOpacity>
                          </View>
                        </HStack>
                      </Stack>
                    </Stack>
                  </Box>
              </Box>
        </View>
  );
}
