import React from 'react';
import { View, TextInput, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';
import styles from './styles';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../../../constants/colors';

export default function InputForm(props) {
	return (
		<View style={styles.container}>
			<View>
				<TextInput placeholder="Enter title"/>
				<TextInput placeholder="Enter Description (optional)"/>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.delete}>
				<AntDesignIcon name="delete" size={25} color={colors.RED} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.save}>
					<AntDesignIcon  name="save" size={25} color={colors.BLUE}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.cancel} onPress={props.onCancel}>
					<MaterialIcon name="cancel" size={25} />
				</TouchableOpacity>
			</View>
		</View>
	)
}