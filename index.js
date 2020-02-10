// imports
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import Header from './src/components/header';
import List from './src/components/list';



// components
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Home Page'} />
    <List/>
  </View>
);


// render
AppRegistry.registerComponent('PokemonApp', () => App);
