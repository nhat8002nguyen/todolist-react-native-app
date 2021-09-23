import React from 'react';
import { View, Text } from 'react-native';

import InputForm from '../InputForm';
import Item from '../Item';


export default function EditableItem(props) {
	return (
		<View>
			{props.openedFormId === props.id ? <InputForm {...props}/> : <Item {...props}/>}	
		</View>
	)
}