import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, TextInput, Button, Text } from 'react-native';

export default function NewDebt() {

  return (
    <View style={styles.container}>
      <Text>Hello I am in newDebt screen</Text>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});