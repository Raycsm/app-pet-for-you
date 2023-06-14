import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Box, HStack, Heading, Image, Stack, Text, AspectRatio,} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function CardPet({item, onPress}) {
  
  return (
      <View>
        <TouchableOpacity onPress={onPress}>
            <Box key={item.key} alignItems="center">
                <Box
                style={style.box}
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
                          <Text fontWeight={600}>{item.raça}</Text>
                          <Text fontWeight={600}>{item.idade}</Text>
                          <Text fontWeight={600}>{item.peso}</Text>
                          <Text fontWeight={600}>{item.sexoPet}</Text>
                    </HStack>
                    <HStack>
                          <Text fontWeight={600}>{item.porte}</Text>
                    </HStack>
                    <HStack space={15}>
                        <Text>{item.descrição}</Text>
                    </HStack>
                    </Stack>
                </Stack>
                </Box>
            </Box>
            </TouchableOpacity>
        </View>
  );
}

const style = StyleSheet.create({
    box: {
      width: wp('80%'),
      height: hp('55%'),
      marginTop:20
    }
  });
  
