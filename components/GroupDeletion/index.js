import { PROPERTY_TYPES } from '@babel/types';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import styles from './styles';


export default function GroupDeletion(props) {

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={props.onItemsDelete}>
				<Text style={{color: colors.RED}}>Delete All</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={props.onDoneItemsDelete}>
				<Text style={{color: colors.BLUE}}>Delete Done</Text>
			</TouchableOpacity>
		</View>
	)
}