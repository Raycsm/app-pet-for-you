import {AspectRatio, Box, HStack, Heading, Image, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import ContextMenu from './ContextMenu';

const PetInfo = ({
  imageUrl = 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/cat.jpg?alt=media&token=9a3182f1-4f48-450d-a12c-875ac2db5e7a',
  nome = 'Lila',
  idade = 10,
  sexo = 'Macho',
  porte = 'Médio',
  raca = 'Vira-lata'
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuOptions = [
    'Visualizar candidaturas',
    'Editar pet',
    'Excluir pet',
    'Marcar como adotado'
  ];

  const handleMenuClick = () => {
    setMenuVisible(true);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  const handleOptionSelect = option => {
    console.log(option);
    setMenuVisible(false);
  };

  return (
    <Box alignItems="center">
      <TouchableOpacity onPress={handleMenuClick}>
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
              <Image source={{uri: imageUrl}} alt="imagePet" />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {nome}
              </Heading>
              <HStack space={15} justifyContent="space-between">
                <Text>{raca}</Text>
                <Text>{idade} anos</Text>
                <Text>{sexo}</Text>
                <Text>{porte}</Text>
              </HStack>
            </Stack>
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
