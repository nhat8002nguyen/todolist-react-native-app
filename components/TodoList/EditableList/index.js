import React from 'react';
import { View, Text } from 'react-native';

import EditableItem from '../EditableItem';
import styles from './styles';

export default function EditableList(props) {
	return (
		<View style={styles.container}>
			{props.items.map(item => <EditableItem key={item.id} {...props} {...item}/>)}
		</View>
	)
}