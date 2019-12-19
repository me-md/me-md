import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

export default class LocationScreen extends Component {
  render() {
    return (
      <View style={styles.locationContainer}>
        <LinearGradient
          style={styles.gradientBackground}
          colors={['#004EFF', '#88CCF1']}
        >
          <View style={styles.container}>
            <Entypo name='chevron-thin-up' size={36} color='black' />
            <Text style={styles.locationTitle}>Location</Text>
            <TextInput
              style={styles.locationInput}
              value='City, State'
            ></TextInput>
            <Entypo name='chevron-thin-down' size={36} color='black' />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: '35%'
  },
  locationContainer: {
    flex: 1
  },
  locationInput: {
    color: '#fff',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 24
  },
  locationTitle: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold'
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  }
});