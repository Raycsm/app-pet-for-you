/* eslint-disable react/no-string-refss */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, Heading, Image, ScrollView, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import BackAction from '../components/BackAction';
import { TextGrey } from '../components/TextGrey';

export default function AboutUs({ navigation }: any) {
  return (
    <ScrollView flex={1}>
      <BackAction title="" onPress={navigation.goBack} />
      <Center px={6} marginBottom={20}>
        <View style={styles.container} alignItems="center">
          <View alignItems="center" justifyContent="center" textAlign="center">
            <Heading marginTop={30} fontSize={40} bold>
              Sobre nós
            </Heading>
            <TextGrey
              style={{
                marginX: 30,
                fontSize: 18,
                marginTop: 30,
              }}>
              Somos acadêmicos do cursos de análise e desenvolvimento de
              sistemas da faculdade Insted.
              <br />
              Como projeto integrador, idealizamos o desenvolvimento de um
              aplicativo de adoção de animais que funcionará como um
              intermediador entre o doador e adotante, facilitando a busca por
              um animalzinho.
            </TextGrey>
          </View>
          <View style={styles.container}>
            <Heading marginTop={30} fontSize={40} bold>
              Integrantes
            </Heading>
          </View>
          <View justifyContent="center" alignContent="center">
            <View
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <Image
                style={styles.foto}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FbarbaraMarchetiFiorin.jpg?alt=media&token=99c35825-c3a2-447e-a839-e13486eb7fd5',
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18,
                  }}>
                  Bárbara Marcheti Fiorin
                </TextGrey>
                <View
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={4}>
                  {/* <Image
                    source={{
                      uri:"https://www.linkedin.com/in/barbara-marcheti-fiorin/"
                    }}
                  > */}

                    <IconAntDesign
                      name="linkedin-square"
                      size={24}
                      color="blue"
                    />
                  {/* </Image> */}
                  <IconAntDesign
                    name="github"
                    size={24}
                    color="black"
                    ref="https://github.com/Bamarcheti"
                  />
                </View>
              </View>
            </View>

            <View
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <Image
                style={styles.foto}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FphelipeGomesDeMelo.jpeg?alt=media&token=01114aaf-14c9-4a5b-912a-f88927dd4c75',
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18,
                  }}>
                  Phelipe Gomes de Melo
                </TextGrey>
                <View
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={4}>
                  <IconAntDesign
                    name="linkedin-square"
                    size={24}
                    color="blue"
                    ref="https://www.linkedin.com/in/phelipe-gomes-de-melo-806015190"
                  />
                  <IconAntDesign
                    name="github"
                    size={24}
                    color="black"
                    ref="https://github.com/PhelipeMelo"
                  />
                </View>
              </View>
            </View>

            <View
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <Image
                style={styles.foto}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FrayaneAssisMagalhaes.jpeg?alt=media&token=d7c3d5c8-4166-4c48-ad2d-7b15ae7fd82f',
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18,
                  }}>
                  Rayane Assis Magalhães
                </TextGrey>
                <View
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={4}>
                  <IconAntDesign
                    name="linkedin-square"
                    size={24}
                    color="blue"
                    ref="https://www.linkedin.com/in/rayassismagalhaes/"
                  />
                  <IconAntDesign
                    name="github"
                    size={24}
                    color="black"
                    ref="https://github.com/Raycsm"
                  />
                </View>
              </View>
            </View>

            <View
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <Image
                style={styles.foto}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FrayllaSolDias.jpeg?alt=media&token=a5d3f272-fec9-4f15-8ec0-3db00ea757fb',
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18,
                  }}>
                  Raylla do Sol Dias
                </TextGrey>
                <View
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={4}>
                  <IconAntDesign
                    name="linkedin-square"
                    size={24}
                    color="blue"
                    ref="https://www.linkedin.com/in/raylla-do-sol-dias-858164231"
                  />
                  <IconAntDesign
                    name="github"
                    size={24}
                    color="black"
                    ref="https://github.com/Bamarcheti"
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center">
              <TextGrey style={{ marginTop: 30, fontSize: 20 }}>
                Para mais informações entre em contato.
              </TextGrey>
              <View flexDirection="row" justifyContent="center" marginTop={30}>
                <IconMaterialCommunity
                  name="gmail"
                  size={24}
                  color="red"
                  ref="https://github.com/Bamarcheti"
                />
                <TextGrey style={{ fontSize: 18 }}>
                  petForYou@outlook.com
                </TextGrey>
              </View>
            </View>
          </View>
        </View>
      </Center>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  foto: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 100,
  },
});
