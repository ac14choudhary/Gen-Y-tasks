import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import axios from 'axios';

export default function Home({navigation}) {
  const [userData, setUserData] = useState();

  const fetchDetails = async () => {
    try {
      const dataSet = await axios.get(
        'https://app-api-geny.herokuapp.com/products/all/2',
      );
      setUserData(dataSet.data);
      console.log(dataSet.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.FABUPDATE}
        onPress={() => navigation.navigate('Update')}>
        <Icon name="pencil" style={styles.FABIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.FABADD}
        onPress={() => navigation.navigate('Add')}>
        <Icon name="plus" style={styles.FABIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  FABADD: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#ff6666',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
    elevation: 10,
  },
  FABIcon: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 30,
  },
  FABUPDATE: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#FFCA28',
    justifyContent: 'center',
    bottom: 120,
    right: 20,
    elevation: 10,
  },
});
