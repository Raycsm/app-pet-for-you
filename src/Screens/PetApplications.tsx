/* eslint-disable prettier/prettier */
import {Box, Image, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import PessoaCard from '../components/Candidates';

export default function MyApplications() {
  return (
    <ScrollView>
      <VStack alignItems="center" mt={8} mb={4}>
        <Image
          source={{uri: 'https://via.placeholder.com/200'}}
          alt="Pet"
          size="2xl"
          borderRadius={100}
          resizeMode="cover"
        />
        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Nome do Pet
        </Text>
      </VStack>
      <Box>
        <PessoaCard
          imageUrl="https://via.placeholder.com/100"
          nome="João Silva"
          endereco="Rua Principal, 123"
        />
        <PessoaCard
          imageUrl="https://via.placeholder.com/100"
          nome="Maria Santos"
          endereco="Av. Brasil, 456"
        />
        <PessoaCard
          imageUrl="https://via.placeholder.com/100"
          nome="Ana Oliveira"
          endereco="Rua 1º de Maio, 789"
        />
        <PessoaCard
          imageUrl="https://via.placeholder.com/100"
          nome="Carlos Pereira"
          endereco="Praça Central, 111"
        />
      </Box>
    </ScrollView>
  );
}
