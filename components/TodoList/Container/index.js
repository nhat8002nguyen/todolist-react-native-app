import React, { useState } from 'react';
import { View, Text } from 'react-native';

import EditableList from '../EditableList';
import styles from './styles';
import ToggleableForm from '../ToggleableForm';


export default function Container(props) {
	const [openedFormId, setOpenedFormId] = useState(null);
	const [isFormOpen, setFormOpen] = useState(false);

	const openEditedForm = (id) => {
		setFormOpen(false);
		setOpenedFormId(id);
	}

	const openAddForm = () => {
		setOpenedFormId(null);
		setFormOpen(true);
	}

	const cancelAddForm = () => {
		setFormOpen(false);
		setOpenedFormId(null);
	}

	return (
		<View style={styles.container}>
			<EditableList 
				{...props} 
				openedFormId={openedFormId} 
				onEditedFormOpen={openEditedForm}
				onCancel={cancelAddForm}
			/>
			<ToggleableForm 
				{...props}
				isFormOpen={isFormOpen} 
				onFormOpen={openAddForm}
				onCancel={cancelAddForm}
			/>
		</View>
	)
}