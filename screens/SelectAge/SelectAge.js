import React, { Component } from 'react';
import { Dimensions, Slider, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default class SelectAge extends Component {
  render() {
    return (
      <View style={styles.selectAgeContainer}>
        <LinearGradient
          style={styles.gradientBackground}
          colors={['#004EFF', '#88CCF1']}
        >
          <View style={styles.contentContainer}>
            <Entypo name='chevron-thin-up' size={36} color='black' onPress={() => this.props.navigation.navigate('TermsAndConditions')} />
            <View style={styles.selectAgeChildContainer}>
              <Text style={styles.selectAgeHeader}>Age</Text>
              <Item style={styles.selectAgeInput}>
                <Input
                  placeholder='Enter your age'
                  style={styles.selectAgeInputText}
                />
              </Item>
              <Slider
                minimumValue={18}
                maximumValue={110}
                minimumTrackTintColor="#1EB1FC"
                maximumTractTintColor="#1EB1FC"
                step={1}
                value={40}
                // onValueChange={value => this.onValueChange(value)}
                style={styles.slider}
                thumbTintColor="#1EB1FC"
              />
            </View>
            <Entypo name='chevron-thin-down' size={36} color='black' />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
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
    fontWeight: 'bold',
    width: 200
  },
  selectAgeInput: {
    color: '#FFF'
  },
  selectAgeChildContainer: {
    flex: 0.75
  },
  slider: {
    marginTop: 25,
    width: 200
  }
});
