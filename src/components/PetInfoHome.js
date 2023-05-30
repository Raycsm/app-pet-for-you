import {AspectRatio, Box, HStack, Heading, Image, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';

const PetInfoHome = ({
  onPress,
  item
}) => {
  
  return (
    <Box alignItems="center">
      <TouchableOpacity onPress={onPress}>
        <Box
          width={300}
          height={300}
          mb={16}
          mt={8}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700'
          }}
          _web={{
            shadow: 2,
            borderWidth: 0
          }}
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
                <Text>{idade} anos</Text>
                <Text>{sexo}</Text>
                <Text>{porte}</Text>
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default PetInfoHome;
