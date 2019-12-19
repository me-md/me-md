import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';

export default class SelectAge extends Component {
  render() {
    return (
      <View style={styles.selectAgeContainer}>
        <LinearGradient
          style={styles.gradientBackground}
          colors={['#004EFF', '#88CCF1']}
        >
          <View style={styles.container}>
            <Text style={styles.selectAgeHeader}>Age</Text>
            <Item style={styles.selectAgeInput}>
              <Input
                placeholder='Enter your age'
                style={styles.selectAgeInputText}
              />
            </Item>
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
    height: '50%',
    justifyContent: 'space-evenly',
    marginTop: '35%',
    width: '50%'
  },
  selectAgeContainer: {
    flex: 1
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  selectAgeHeader: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold'
  },
  selectAgeInput: {
    color: '#FFF'
  }
});
