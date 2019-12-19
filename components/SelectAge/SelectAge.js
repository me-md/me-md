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
          <Text style={styles.selectAgeHeader}>Age</Text>
          <Item style={styles.selectAgeInput}>
            <Input
              placeholder='Enter your age'
              style={styles.selectAgeInputText}
            />
          </Item>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectAgeContainer: {
    flex: 1
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  selectAgeHeader: {
    color: '#fff',
    flex: 1,
    fontSize: 48,
    fontWeight: 'bold'
  },
  selectAgeInput: {
    color: '#FFF'
  }
});
