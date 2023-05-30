import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  appbar: {
    shadowColor: '#000',
    backgroundColor: 'white',
    height: 33,
    marginBottom: 18
  },
  menu: {
    marginTop: 75,
    marginLeft: 15
  },
  avatar: {
    alignItems: 'center',
    justifycontent: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignContent: 'center'
  },
  conteudo: {
    backgroundColor: 'white'
  },
  conta: {
    marginBottom: 15,
    alignSelf: 'center',
    color: '#837F7F'
  },
  content: {
    display: 'flex',
    flex: 1
  },
  filtro: {
    marginTop: 85,
    marginLeft: 70
  },

  logo_home: {
    width: 100,
    height: 60,
    marginTop: 70,
    marginLeft: 90
  },

  itens: {
    marginBottom: 10,
    width: 310,
    alignSelf: 'center',
    fontsize: 14,
    backgroundColor: '#C3C3C3'
  },
  elements: {
    margin: 10
  },
  elementscenter: {
    margin: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    padding: '10px'
  }
});

export default style;
