import { Center, Image, Link, ScrollView, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import BackAction from '../components/BackAction';
import { TextGrey } from '../components/TextGrey';
import { Title } from '../components/Title';

export default function AboutUs({ navigation }) {
  return (
    <ScrollView flex={1}>
      <BackAction title="Sobre nós" onPress={navigation.goBack} />
      <Center px={6} marginBottom={20}>
        <View style={styles.container} alignItems="center">
          <View alignItems="center" justifyContent="center" textAlign="center">
            <TextGrey
              style={{
                fontSize: 17,
                marginTop: 30,
                textAlign: 'center'
              }}>
              Somos acadêmicos do cursos de análise e desenvolvimento de sistemas da faculdade
              Insted.
            </TextGrey>
            <TextGrey
              style={{
                fontSize: 17,
                marginTop: 30,
                textAlign: 'center'
              }}>
              Como projeto integrador, idealizamos o desenvolvimento de um aplicativo de adoção de
              animais que funcionará como um intermediador entre o doador e adotante, facilitando a
              busca por um animalzinho.
            </TextGrey>
          </View>
          <Title
            style={{
              marginTop: 30,
              flexDirection: 'column',
              justifyContent: 'center',
              fontSize: 26
            }}>
            Integrantes
          </Title>
          <View justifyContent="center" alignContent="center">
            <View flexDirection="column" justifyContent="center" alignItems="center">
              <Image
                style={styles.foto}
                alt='imageBarbara'
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FbarbaraMarchetiFiorin.jpg?alt=media&token=99c35825-c3a2-447e-a839-e13486eb7fd5'
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18
                  }}>
                  Bárbara Marcheti Fiorin
                </TextGrey>
                <View flexDirection="row" justifyContent="center" alignItems="center" marginTop={4}>
                  <Link href='https://www.linkedin.com/in/barbara-marcheti-fiorin'>

                    <IconAntDesign name="linkedin-square" size={24} color="blue" />
                  </Link>
                  <Link href='https://github.com/Bamarcheti'>

                    <IconAntDesign name="github" size={24} color="black" />
                  </Link>
                </View>
              </View>
            </View>

            <View flexDirection="column" justifyContent="center" alignItems="center">
              <Image
                style={styles.foto}
                alt='imagePhelipe'
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FphelipeGomesDeMelo.jpeg?alt=media&token=01114aaf-14c9-4a5b-912a-f88927dd4c75'
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18
                  }}>
                  Phelipe Gomes de Melo
                </TextGrey>
                <View flexDirection="row" justifyContent="center" alignItems="center" marginTop={4}>
                  <Link href='https://www.linkedin.com/in/phelipe-gomes-de-melo-806015190'>
                    <IconAntDesign name="linkedin-square" size={24} color="blue" />
                  </Link>
                  <Link href='https://github.com/PhelipeMelo'>
                    <IconAntDesign name="github" size={24} color="black" />
                  </Link>
                </View>
              </View>
            </View>

            <View flexDirection="column" justifyContent="center" alignItems="center">
              <Image
                style={styles.foto}
                alt='imageRayane'
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FrayaneAssisMagalhaes.jpeg?alt=media&token=d7c3d5c8-4166-4c48-ad2d-7b15ae7fd82f'
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18
                  }}>
                  Rayane Assis Magalhães
                </TextGrey>
                <View flexDirection="row" justifyContent="center" alignItems="center" marginTop={4}>
                  <Link href='https://www.linkedin.com/in/rayassismagalhaes'>
                    <IconAntDesign name="linkedin-square" size={24} color="blue" />
                  </Link>
                  <Link href='https://github.com/Raycsm'>
                    <IconAntDesign name="github" size={24} color="black" />
                  </Link>
                </View>
              </View>
            </View>

            <View flexDirection="column" justifyContent="center" alignItems="center">
              <Image
                style={styles.foto}
                alt='imageRaylla'
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Fotos%2FrayllaSolDias.jpeg?alt=media&token=a5d3f272-fec9-4f15-8ec0-3db00ea757fb'
                }}
              />
              <View flexDirection="column">
                <TextGrey
                  style={{
                    marginTop: 10,
                    fontSize: 18
                  }}>
                  Raylla do Sol Dias
                </TextGrey>
                <View flexDirection="row" justifyContent="center" alignItems="center" marginTop={4}>
                  <Link href='https://www.linkedin.com/in/raylla-do-sol-dias-858164231'>
                    <IconAntDesign name="linkedin-square" size={24} color="blue" />
                  </Link>
                </View>
              </View>
            </View>
            <View
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center">
              <TextGrey style={{ marginTop: 30, fontSize: 18, textAlign: 'center' }}>
                Para mais informações entre em contato.
              </TextGrey>
              <View flexDirection="row" justifyContent="center" marginTop={30}>
                <IconMaterialCommunity name="gmail" size={24} color="red" marginRight={6} />
                <TextGrey style={{ fontSize: 18 }}>petforyou@gmail.com</TextGrey>
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
    justifyContent: 'center'
  },
  foto: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 100
  }
});
