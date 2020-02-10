import React from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button.js';
import AlertExample from './showAlert';

const Details = (props) => {
  const Types = JSON.stringify(props.pokemon.type);
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={{width: 250, height: 250, flex: 1}} source={{ uri: props.pokemon.img}}/>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text>Pokedex : {props.pokemon.num}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text>Name : {props.pokemon.name}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text>Types : {Types}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Button onPress={() => console.log(props.pokemon.name)} text="Select"/>
      </CardSection>
      <CardSection>
        <AlertExample/>
      </CardSection>
      </Card>
  );

};





export default Details;
