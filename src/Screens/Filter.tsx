/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import BackAction from '../components/BackAction';

export default function Filter({ navigation }: any) {

	return (
		<SafeAreaView>
			<BackAction title="Filtro" onPress={navigation.goBack} />
		</SafeAreaView>
	);
}
