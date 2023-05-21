/* eslint-disable prettier/prettier */
import {
  AspectRatio,
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import ContextMenu from './ContextMenu';

interface PetInfoProps {
  imageUrl?: string;
  nome?: string;
  idade?: number;
  sexo?: string;
  porte?: string;
  tempo?: string;
}

const PetInfo: React.FC<PetInfoProps> = ({
  imageUrl = 'https://via.placeholder.com/',
  nome = 'Nome do Pet',
  idade = 0,
  sexo = 'Desconhecido',
  porte = 'Desconhecido',
  tempo = 'Desconhecido',
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuOptions = [
    'Visualizar candidaturas',
    'Editar pet',
    'Excluir pet',
    'Marcar como adotado',
  ];

  const handleMenuClick = () => {
    setMenuVisible(true);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  const handleOptionSelect = (option: string) => {
    console.log(option);
    setMenuVisible(false);
  };

  return (
    <Box alignItems="center">
      <TouchableOpacity onPress={handleMenuClick}>
        <Box
          maxW="80"
          w="full"
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
            <AspectRatio w="200%" ratio={16 / 9}>
              <Image source={{uri: imageUrl}} alt="image" />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {nome}
              </Heading>
              <HStack space={15} justifyContent="space-between">
                <Text
                  fontSize="base"
                  fontWeight="500"
                  _light={{color: 'orange.600'}}
                  _dark={{color: 'orange.500'}}>
                  {idade} anos
                </Text>
                <Text
                  fontSize="base"
                  fontWeight="500"
                  _light={{color: 'orange.600'}}
                  _dark={{color: 'orange.500'}}>
                  {sexo}
                </Text>
                <Text
                  fontSize="base"
                  fontWeight="500"
                  _light={{color: 'orange.600'}}
                  _dark={{color: 'orange.500'}}>
                  {porte}
                </Text>
              </HStack>
            </Stack>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400">
                  {tempo}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </TouchableOpacity>
      <ContextMenu
        isVisible={menuVisible}
        onRequestClose={handleMenuClose}
        onOptionSelect={handleOptionSelect}
        options={menuOptions}
      />
    </Box>
  );
};

export default PetInfo;
