import { View } from 'native-base';
import * as React from 'react';
import { Dialog, Portal, Text, Checkbox } from 'react-native-paper';
import {SolidButton} from '../components/Buttons/SolidButton';

const DialogFilter = ({visible, setVisible}) => {
  const hideDialog = () => setVisible(false);
  const [checkedMacho, setCheckedMacho] = React.useState(false);
  const [checkedFemea, setCheckedFemea] = React.useState(false);
  const [checkedPequeno, setCheckedPequeno] = React.useState(false);
  const [checkedMedio, setCheckedMedio] = React.useState(false);
  const [checkedGrande, setCheckedGrande] = React.useState(false);
  
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
                        labelStyle={{fontSize:15, fontWeight:400, color:"#424242"}}
                        color='#DB652F'
                        label='Macho'
                        status={checkedMacho ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedMacho(!checkedMacho);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle={{fontSize:15, fontWeight:400, color:"#424242"}}
                        color='#DB652F'
                        label='Fêmea'
                        status={checkedFemea ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedFemea(!checkedFemea);
                        }}
                    />
                </View>
                <View display="flex" flexDirection="row">
                    <Text style={{fontSize:15, fontWeight:400}}>
                        Porte
                    </Text>
                </View>
                <View display="flex" flexDirection="row">
                    <Checkbox.Item
                        labelStyle={{fontSize:15, fontWeight:400, color:"#424242"}}
                        color='#DB652F'
                        label='Pequeno'
                        status={checkedPequeno ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedPequeno(!checkedPequeno);
                        }}
                    />
                    <Checkbox.Item
                        labelStyle={{fontSize:15, fontWeight:400, color:"#424242"}}
                        color='#DB652F'
                        label='Médio'
                        status={checkedMedio ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedMedio(!checkedMedio);
                        }}
                    />
                </View>
                <View display="flex" flexDirection="row" mb="3">
                    <Checkbox.Item
                        labelStyle={{fontSize:15, fontWeight:400, color:"#424242"}}
                        color='#DB652F'
                        label='Grande'
                        status={checkedGrande ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedGrande(!checkedGrande);
                        }}
                    />
                </View>

                <View>
                    <SolidButton mt={4} mb={2} title="Buscar" onPress={hideDialog}/>
                </View>
            </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default DialogFilter;