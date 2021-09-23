import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function Item(props) {
	const openEditForm = () => props.onEditedFormOpen(props.id);

	return (
		<View style={styles.container}>
			<View style={styles.itemText}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.desc}>{props.description}</Text>
			</View>
			<TouchableOpacity style={styles.editIcon} onPress={openEditForm}>
				<AntDesignIcon name="edit" size={20} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.checkIcon}>
				<AntDesignIcon name="checkcircle" size={20} color={props.done && "red"} />
			</TouchableOpacity>
		</View>
	)
}