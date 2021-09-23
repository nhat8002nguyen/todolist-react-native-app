import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';


export default function Header() {

	return (
		<View style={styles.header}>
			<Text style={styles.title}>Todo List</Text>
			<TouchableOpacity>
				<SimpleLineIcon name="options-vertical" size={20} color="#4184d1"/>
			</TouchableOpacity>
			
		</View>
	)
}