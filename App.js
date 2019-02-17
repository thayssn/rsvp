import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Omelete Convida</Text>
        <Text style={styles.subtitle}>O RSVP do Omelete Company!</Text>
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
