import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListItem extends Component{
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Pré-estreia Alita: Anjo de Combate</Text>
        <Text style={styles.subtitle}>O RSVP do Omelete Company!</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 20
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#555'
  }
})