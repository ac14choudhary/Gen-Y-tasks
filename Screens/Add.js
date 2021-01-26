import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Add({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Product"
        placeholderTextColor="#dddddd"
        keyboardType="default"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        placeholderTextColor="#dddddd"
        keyboardType="number-pad"></TextInput>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.addButtonText}>Add to List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: '5%',
    paddingLeft: 20,
    fontSize: 20,
    width: '80%',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  addButton: {
    marginTop: '8%',
    width: '60%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3CA88A',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
});
