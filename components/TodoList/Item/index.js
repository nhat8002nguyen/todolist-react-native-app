import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../constants/colors';

export default function Item(props) {
	const openEditForm = () => props.onEditedFormOpen(props.id);

	const handleCheckItem = () => {
		props.onItemCheck(props.id)
	}

	return (
		<View style={styles.container}>
			<View style={styles.itemText}>
				<Text style={[styles.title, props.done && styles.ignore]}>{props.title}</Text>
				<Text style={[styles.desc, props.done && styles.ignore]}>{props.description}</Text>
			</View>
			<TouchableOpacity style={styles.editIcon} onPress={openEditForm}>
				<AntDesignIcon name="edit" size={25} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.checkIcon} onPress={handleCheckItem}>
				<AntDesignIcon name="checkcircle" size={25} color={props.done ? colors.RED : "black"} />
			</TouchableOpacity>
		</View>
	)
}