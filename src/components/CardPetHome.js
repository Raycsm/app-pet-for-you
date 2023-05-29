/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {Box, AspectRatio, Stack, Heading, HStack, Image, Text, View} from 'native-base';
import React from 'react';
import { SolidButton } from './Buttons/SolidButton';

export function CardPetHome() {
  return (
    <Box alignItems="center">
      <Box
        width={300}
        height={320}
        mb={16}
        mt={8}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="imagePet"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading fontSize={25} size="md" ml="-1">
              Lila
            </Heading>
            </Stack>
            <Stack flexDirection={'row'}
                   justifyContent={'space-around'}
                   mb={2}>
            <Text fontSize={16}>
                  Sexo
                </Text>
                <Text fontSize={16}>
                  Idade
                </Text>
                <Text fontSize={16}>
                  Porte
                </Text>
            </Stack>
          <HStack alignItems="center">
            <HStack alignItems="center">
            <SolidButton
              title="Detalhes"
              width={140}
              height={30}
              fontSize={10}
              paddingBottom={1}
              paddingTop={1}
              textAlign="center"
            />
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
