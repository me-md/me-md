import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class SelectAge extends Component {
  render() {
    return (
      <View style={styles.selectAgeContainer}>
        <LinearGradient
          style={styles.gradientBackground}
          colors={['#004EFF', '#88CCF1']}
        >
          <View style={styles.container}>
            <Entypo name='chevron-thin-up' size={36} color='black' />
            <View style={styles.selectAgeChildContainer}>
              <Text style={styles.selectAgeHeader}>Age</Text>
              <Item style={styles.selectAgeInput}>
                <Input
                  placeholder='Enter your age'
                  style={styles.selectAgeInputText}
                />
              </Item>
            </View>
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
    justifyContent: 'space-evenly'
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
  },
  selectAgeChildContainer: {
    flex: 0.75
  }
});
