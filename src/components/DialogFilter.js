import { View } from 'native-base';
import * as React from 'react';
import { Dialog, Portal, Text, Checkbox } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const DialogFilter = ({visible, setVisible, setPets}) => {
  const hideDialog = () => setVisible(false);
  const [checkedMacho, setCheckedMacho] = React.useState(false);
  const [checkedFemea, setCheckedFemea] = React.useState(false);
  const [checkedPequeno, setCheckedPequeno] = React.useState(false);
  const [checkedMedio, setCheckedMedio] = React.useState(false);
  const [checkedGrande, setCheckedGrande] = React.useState(false);

  async function getSexMacho() {
    setPets([]);
   const macho = [];
   const machoRef = firestore().collection('animal')
   const snapshot = await machoRef.where('sexoPet', '==', 'macho').get();    
   snapshot.forEach( (m) => {macho.push({key: m.id, ...m.data()} )})                                      
   setPets(macho);
   console.log('macho:', macho)
   if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
   }  
  }

  async function getSexFemea() {
    setPets([]);
   const femea = [];
   const femeaRef = firestore().collection('animal')
   const snapshot = await femeaRef.where('sexoPet', '==', 'femea').get();    
   snapshot.forEach( (f) => {femea.push({key: f.id, ...f.data()} )})                                      
   setPets(femea);
   console.log('femea:', femea)
   if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
   }  
  }

  async function getPortePequeno() {
    setPets([]);
   const pequeno = [];
   const pequenoRef = firestore().collection('animal')
   const snapshot = await pequenoRef.where('porte', '==', 'pequeno').get();    
   snapshot.forEach( (m) => {pequeno.push({key: m.id, ...m.data()} )})                                      
   setPets(pequeno);
   console.log('pequeno:', pequeno)
   if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
   }  
  }

  async function getPorteMedio() {
    setPets([]);
   const medio = [];
   const medioRef = firestore().collection('animal')
   const snapshot = await medioRef.where('porte', '==', 'medio').get();    
   snapshot.forEach( (m) => {medio.push({key: m.id, ...m.data()} )})                                      
   setPets(medio);
   console.log('medio:', medio)
   if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
   }  
  }

  async function getPorteGrande() {
    setPets([]);
   const grande = [];
   const grandeRef = firestore().collection('animal')
   const snapshot = await grandeRef.where('porte', '==', 'grande').get();    
   snapshot.forEach( (m) => {grande.push({key: m.id, ...m.data()} )})                                      
   setPets(grande);
   console.log('grande:', grande)
   if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
   }  
  }
  
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={{textAlign:"center"}}> Filtro </Dialog.Title>
        <Dialog.Content>
            <View display="flex" flexDirection="column">
                <View display="flex" flexDirection="row">
                    <Text style={{fontSize:15, fontWeight:400}}>
                        Sexo
                    </Text>
                </View>
                <View display="flex" flexDirection="row">
                    <Checkbox.Item
                        labelStyle={{fontSize:14, fontWeight:400, color:"#424242", marginLeft:-15}}
                        color='#DB652F'
                        label='Macho'
                        status={checkedMacho ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedMacho(!checkedMacho);
                            getSexMacho
                        }}
                    />
                    <Checkbox.Item
                        labelStyle={{fontSize:14, fontWeight:400, color:"#424242",}}
                        color='#DB652F'
                        label='Fêmea'
                        status={checkedFemea ? 'checked' : 'unchecked'}
                        onPress={() => {
                            getSexFemea;
                            setCheckedFemea(!checkedFemea)
                        }}
                    />
                </View>
                <View display="flex" flexDirection="row">
                    <Text style={{fontSize:15, fontWeight:400}}>
                        Porte
                    </Text>
                </View>
                <View  flexDirection="row" >
                    <Checkbox.Item
                    
                        labelStyle={{fontSize:14, fontWeight:400, color:"#424242", marginLeft:-15}}
                        color='#DB652F'
                        label='Pequeno'
                        status={checkedPequeno ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedPequeno(!checkedPequeno);
                            getPortePequeno
                        }}
                    />
                    <Checkbox.Item
                        labelStyle={{fontSize:14, fontWeight:400, color:"#424242"}}
                        color='#DB652F'
                        label='Médio'
                        status={checkedMedio ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedMedio(!checkedMedio);
                            getPorteMedio
                        }}
                    />
                     <Checkbox.Item
                        labelStyle={{fontSize:14, fontWeight:400, color:"#424242", marginRight:-5}}
                        color='#DB652F'
                        label='Grande'
                        status={checkedGrande ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedGrande(!checkedGrande);
                            getPorteGrande
                        }}
                    />
                </View>
            </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default DialogFilter;