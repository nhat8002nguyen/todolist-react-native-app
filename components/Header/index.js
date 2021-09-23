import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';


export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Todo List</Text>
			<SimpleLineIcon name="options-vertical" size={20} color="#4184d1"/>
		</View>
	)
}