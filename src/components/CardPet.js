 
import React from 'react';
import { View, Pressable, TouchableOpacity} from 'react-native';
import { Box, HStack, Heading, Image, Stack, Text, AspectRatio, Button, VStack} from 'native-base';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function CardPet({item, onPress}) {
  
  return (
      <View>
        <TouchableOpacity onPress={onPress}>
            <Box alignItems="center">
                <Box
                width={300}
                height={380}
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
                    <HStack space={15}>
                        <Text>{item.descrição}</Text>
                    </HStack>
                    <HStack>
                        <Button backgroundColor='#DB652F' borderRadius={30}>
                        <Pressable >
                            <Icons
                            name= "pencil"
                            size={18}
                            color="white"
                            />
                        </Pressable>
                        </Button>
                        <VStack>
                        <Button marginLeft={3} 
                                backgroundColor='#DB652F' 
                                borderRadius={30}>
                            <Icons
                            name= "delete"
                            size={18}
                            color="white"
                            />
                        </Button>
                
                        </VStack>
                    
                    </HStack>
                    </Stack>
                </Stack>
                </Box>
            </Box>
            </TouchableOpacity>
        </View>
  );
}
