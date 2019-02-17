import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 2
  }
});
