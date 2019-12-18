import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class BiologicalInformation extends Component {
  render() {
    return (
      <View style={styles.biologicalInformationContainer}>
        <LinearGradient colors={['#004EFF', '#88CCF1']}>
          <Text style={styles.biologicalInformationQuestion}>
            What is your biological sex?
          </Text>
          <Button>
            <MaterialCommunityIcons
              name='gender-female'
              size={32}
              color='black'
            />
          </Button>
          <Button>
            <MaterialCommunityIcons
              name='gender-male'
              size={32}
              color='black'
            />
          </Button>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  biologicalInformationContainer: {
    flex: 1
  },
  biologicalInformationQuestion: {}
});
