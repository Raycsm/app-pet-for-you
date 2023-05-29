/* eslint-disable prettier/prettier */
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, HStack, Icon, Image, Spacer, Text, VStack} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const PessoaCard = ({imageUrl, nome, endereco}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Box width={screenWidth} py={4} bg="white">
      <HStack px={4} alignItems="center">
        <Image
          source={{uri: imageUrl}}
          alt="Person"
          size="lg"
          borderRadius={100}
          resizeMode="cover"
        />
        <Text fontSize="lg" fontWeight="bold" ml={4}>
          {nome}
        </Text>
        <Spacer />
        <VStack alignItems="flex-end">
          <Text fontSize="sm" color="gray.500">
            {endereco}
          </Text>
          <HStack mt={2} space={4}>
            <Icon as={<IconMaterialCommunityIcons name="email" />} size="sm" color="blue.500" />
            <Icon as={<IconMaterialCommunityIcons name="whatsapp" />} size="sm" color="green.500" />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PessoaCard;
