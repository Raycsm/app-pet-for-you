import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Box, HStack, Heading, Image, Stack, Text, AspectRatio,} from 'native-base';

export default function CardPet({item, onPress}) {
  
  return (
      <View>
        <TouchableOpacity onPress={onPress}>
            <Box key={item.key} alignItems="center">
                <Box
                width={300}
                height={360}
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
                    </Stack>
                </Stack>
                </Box>
            </Box>
            </TouchableOpacity>
        </View>
  );
}
