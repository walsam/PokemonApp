//imports
import React, { Component } from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import Details from './details';

//make component
class List extends Component {
  state = { pokemons: [] };

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(response => this.setState({pokemons: response.data.pokemon}));
  }

  renderPokemons(){
    return this.state.pokemons.map(pokemon =>
      <Details key={pokemon.id} pokemon={pokemon}/>);
  }

  render() {
    return (
      <ScrollView>
        {this.renderPokemons()}
      </ScrollView>
    );
  }
}


//export
export default List;
