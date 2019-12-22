import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { Header } from '../../components/Header';

const height = Dimensions.get('window').height;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('../../assets/images/doctor.png')}
        style={styles.icon}
      />
      <View style={styles.welcome}>
        <Text style={styles.greeting}>Hello!</Text>
        <Text style={styles.message}>
          Welcome to MeMD, an online platform designed to help diagnose symptoms
          and locate potential doctors. Please click BEGIN to start your health
          checkup.
        </Text>
        <Button
          block
          style={styles.button}
          onPress={() => navigation.navigate('TermsAndConditions')}
        >
          <Text>BEGIN CHECKUP</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  icon: {
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 50,
    height: height * 0.2,
    marginBottom: 10,
    marginTop: 35,
    width: height * 0.2
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 25
  },
  message: {
    fontSize: 26,
    marginLeft: 25,
    marginBottom: 25
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    width: '75%'
  }
});
