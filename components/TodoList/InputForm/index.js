import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ProgressViewIOSComponent, ToastAndroid } from 'react-native';
import styles from './styles';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../../../constants/colors';

export default function InputForm(props) {
	const [title, setTitle] = useState(props.title || "")
	const [description, setDescription] = useState(props.description || "")
	const [error, setError] = useState(false);

	const handleChangeTitle = (text) => {
		setTitle(text);
		error && setError(false);
	}

	const handleDeleteItem = () => {
		props.onItemDelete(props.id);
	}

	const handleSaveItem = () => {
		if (title.length === 0) {
			setError(true);
			ToastAndroid.show("Please enter title !", ToastAndroid.SHORT);
			return;
		}
		props.onItemSave({id: props.id, title, description});
		props.onCancel();
	}
	console.log(props.id);

	return (
		<View style={[styles.container, error && styles.errorBorder]}>
			<View>
				<TextInput placeholder="Enter title" value={title} onChangeText={handleChangeTitle}/>
				<TextInput placeholder="Enter Description (optional)" 
					value={description} 
					onChangeText={setDescription}
				/>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.delete} onPress={handleDeleteItem}>
					{props.id && <AntDesignIcon name="delete" size={25} color={colors.RED} />}
				</TouchableOpacity>
				<TouchableOpacity style={styles.save} onPress={handleSaveItem}>
					<AntDesignIcon  name="save" size={25} color={colors.BLUE}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.cancel} onPress={props.onCancel}>
					<MaterialIcon name="cancel" size={25} />
				</TouchableOpacity>
			</View>
		</View>
	)
}