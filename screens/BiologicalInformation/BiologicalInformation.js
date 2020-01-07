import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default function BiologicalInformation({ navigation }) {
  const [sex, setSex] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.biologicalInformationContainer}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.goBack()}
          />
          <View style={styles.buttonContainer}>
            <Text style={styles.question}>What is your biological sex?</Text>
            <Button
              rounded
              style={
                sex === 'female'
                  ? styles.pressed
                  : styles.biologicalInformationButtons
              }
              onPress={() => (sex === 'female' ? setSex('') : setSex('female'))}
            >
              <MaterialCommunityIcons
                name='gender-female'
                size={64}
                color='white'
              />
              <Text style={styles.biologicalInformationButtonText}>Female</Text>
            </Button>
            <Button
              rounded
              style={
                sex === 'male'
                  ? styles.pressed
                  : styles.biologicalInformationButtons
              }
              onPress={() => (sex === 'male' ? setSex('') : setSex('male'))}
            >
              <MaterialCommunityIcons
                name='gender-male'
                size={64}
                color='white'
              />
              <Text style={styles.biologicalInformationButtonText}>Male</Text>
            </Button>
          </View>
          {sex !== '' ?
            <Entypo
              name='chevron-thin-down'
              size={36}
              color='white'
              onPress={() => {
                navigation.push('SelectAge', { sex })
              }}
            /> : <Entypo
              name='chevron-thin-down'
              size={36}
              style={{ opacity: 0 }}
              color='grey'
            />}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradientBackground: {
    flex: 1
  },
  biologicalInformationContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: height * 0.06,
    marginTop: height * 0.06,
  },
  buttonContainer: {
    justifyContent: 'space-between'
  },
  question: {
    color: '#FFFFFF',
    fontSize: 48,
    marginBottom: height * 0.07
  },
  biologicalInformationButtons: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 100,
    margin: 25,
    padding: 20,
    width: 225
  },
  pressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 100,
    margin: 25,
    padding: 20,
    width: 225
  },
  biologicalInformationButtonText: {
    color: '#FFFFFF',
    fontSize: 36
  }
});
