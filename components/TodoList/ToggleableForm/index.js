import React from 'react';
import styles from './styles';
import { View, TouchableOpacity } from 'react-native';
import Ionicon from "react-native-vector-icons/Ionicons";

import InputForm from '../InputForm';

export default function ToggleableForm(props) {
	return (
		<View style={styles.container}>
			{props.isFormOpen ? <InputForm {...props}/>
			:<TouchableOpacity style={styles.addBox} onPress={props.onFormOpen}>
				<Ionicon name="add" size={40} />
			</TouchableOpacity>}
		</View>
	)
}