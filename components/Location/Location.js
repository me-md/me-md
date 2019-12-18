import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Location extends Component {
  render() {
    return (
      <View style={styles.locationContainer}>
        <LinearGradient
          style={styles.gradientBackground}
          colors={['#004EFF', '#88CCF1']}
        >
          <Text style={styles.locationTitle}>Location</Text>
          <TextInput
            style={styles.locationInput}
            value='City, State'
          ></TextInput>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1
  },
  locationInput: {
    color: '#fff',
    flex: 0.05,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 36,
    width: '75%'
  },
  locationTitle: {
    color: '#FFF',
    flex: 1,
    fontSize: 48,
    fontWeight: 'bold'
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  }
});
