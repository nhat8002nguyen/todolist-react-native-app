/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  

  return (
		<SafeAreaView>
			<Header />
			<TodoList></TodoList>
		</SafeAreaView>
  );
};

export default App;
