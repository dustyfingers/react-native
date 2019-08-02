import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      };
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          changeHandler={this.placeNameChangedHandler}
          submitHandler={this.placeSubmitHandler}
          text={this.state.placeName} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
