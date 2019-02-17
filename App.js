import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './views/List'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Omelete Convida</Text>
          <Text style={styles.subtitle}>O RSVP do Omelete Company!</Text>
        </View>
        <List></List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FF0',
    fontSize: 30,
    marginBottom: 20
  },
  subtitle:{
    color: '#ddd',
    fontSize: 18
  }

});
