/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Header from './components/Header';
import TodoList from './components/TodoList';


const data = [
	{ id: 123, title: "title1", description: "description 1", done: false, },
	{ id: 124, title: "title1", description: "description 1", done: false, },
	{ id: 125, title: "title1", description: "description 1", done: true, },
	{ id: 126, title: "title1", description: "description 1", done: true, }
]

const App = () => {
  const [items, setItems] = useState(data);

  return (
		<SafeAreaView style={{alignItems: "center"}}>
			<Header />
			<TodoList items={items}></TodoList>
		</SafeAreaView>
  );
};

export default App;
