/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { v4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './components/Header';
import TodoList from './components/TodoList';
import GroupDeletion from './components/GroupDeletion';


const data = [
	{ id: 123, title: "title1", description: "description 1", done: false, },
	{ id: 1234, title: "title1", description: "description 1", done: false, },
	{ id: 12345, title: "title1", description: "description 1", done: true, },
	{ id: 123456, title: "title1", description: "description 1", done: true, }
]

const App = () => {
  const [items, setItems] = useState(null);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async() => {
			if (items === null) {
				const jsonValue = await AsyncStorage.getItem("items");
				jsonValue !== null ? setItems(JSON.parse(jsonValue)) : [];
			} else {
				await AsyncStorage.setItem("items", JSON.stringify(items));
			}
		}
		if (isMounted) fetchData();
		return () => isMounted = false;
	}, [items])

	const saveItem = ({id, title, description}) => {
		const initialItem = {
			id: null,
			title: "",
			description: "",
			done: false
		}
		if (id === null || id === undefined) {
			const newItem = { ...initialItem, id: v4(), title, description }
			setItems(prev => [...prev, newItem])
		} else {
			setItems(prev => prev.map(item => item.id === id ? {...initialItem, id: item.id, title, description} : item));
		}
	}

	const deleteItem = (id) => {
		setItems(prev => prev.filter(item => item.id !== id));
	}

	const toggleDoneItem = (id) => {
		setItems(prev => prev.map(item => item.id === id ? {...item, done: !item.done} : item));
	}

	const deleteAll = () => setItems([]);

	const deleteDone = () => setItems(prev => prev.filter(item => item.done === false));

  return (
		<SafeAreaView style={{alignItems: "center"}}>
			<Header />
			<TodoList items={items}
				onItemSave={saveItem}
				onItemDelete={deleteItem}
				onItemCheck={toggleDoneItem}
			></TodoList>
			<GroupDeletion
				onItemsDelete={deleteAll}	
				onDoneItemsDelete={deleteDone}	
			></GroupDeletion>
		</SafeAreaView>
  );
};

export default App;
