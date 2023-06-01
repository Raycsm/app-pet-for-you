/* eslint-disable no-undef */
import {AspectRatio, Box, HStack, Heading, Image, Stack, Text} from 'native-base';
import React from 'react';
import {SolidButton} from './Buttons/SolidButton';

export function CardPetHome(nomePet, petImg,raça,idade,sexoPet,porte) {

  return (
    <Box alignItems="center">
    <Box
      width={300}
      height={330}
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
          <Image source={{uri: petImg}} alt="imagePet" />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {nomePet}
          </Heading>
          <HStack space={15} justifyContent="space-between">
            <Text>{raça}</Text>
            <Text>{idade}</Text>
            <Text>{sexoPet}</Text>
            <Text>{porte}</Text>
          </HStack>
          <HStack alignItems="center">
            <SolidButton
              title="Detalhes"
              width={140}
              height={30}
              fontSize={10}
              paddingBottom={1}
              paddingTop={4}
              textAlign="center"
            />
          </HStack>
        </Stack>
      </Stack>
    </Box>
</Box>
  );
}
