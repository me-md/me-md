import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class BiologicalInformation extends Component {
  render() {
    return (
      <View style={styles.biologicalInformationContainer}>
        <LinearGradient
          style={styles.gradientBackground}
          colors={['#004EFF', '#88CCF1']}
        >
          <View style={styles.biologicalInformationAnswer}>
            <Entypo name='chevron-thin-up' size={36} color='black' />
            <Text style={styles.biologicalInformationQuestion}>
              What is your biological sex?
            </Text>
            <View style={styles.buttonContainer}>
              <Button iconLeft style={styles.biologicalInformationButtons}>
                <MaterialCommunityIcons
                  name='gender-female'
                  size={64}
                  color='black'
                />
                <Text style={styles.biologicalInformationButtonText}>
                  Female
                </Text>
              </Button>
              <Button iconLeft style={styles.biologicalInformationButtons}>
                <MaterialCommunityIcons
                  name='gender-male'
                  size={64}
                  color='black'
                />
                <Text style={styles.biologicalInformationButtonText}>Male</Text>
              </Button>
            </View>
            <Entypo name='chevron-thin-down' size={36} color='black' />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  biologicalInformationAnswer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  biologicalInformationButtons: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 50,
    height: 85,
    margin: 25,
    padding: 20,
    width: 225
  },
  biologicalInformationContainer: {
    flex: 1
  },
  biologicalInformationQuestion: {
    alignItems: 'center',
    color: '#fff',
    fontSize: 48,
    justifyContent: 'center'
  },
  biologicalInformationButtonText: {
    fontSize: 36
  },
  buttonContainer: {
    flex: 0.5
  },
  gradientBackground: {
    flex: 1
  }
});
