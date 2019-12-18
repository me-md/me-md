import React from 'react';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#004EFF', '#88CCF1']}
        style={styles.header}
      ></LinearGradient>
      <Image
        source={require('../../assets/images/doctor.png')}
        style={styles.icon}
      />
      <View style={styles.welcome}>
        <Text style={styles.greeting}>HELLO!</Text>
        <Text style={styles.message}>
          Welcome to MeMD, an online platform designed to help diagnose symptoms
          and locate potential doctors. Please click BEGIN to start your health
          checkup.
        </Text>
        <Button
          title='BEGIN'
          color='#8CDEDC'
          onPress={() => Alert.alert('Oh my GOD')}
          style={styles.button}
          // TODO: Link to Terms of Service and Privacy Policy page
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  header: {
    flex: 0.2
  },
  icon: {
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 50,
    height: 200,
    marginTop: 35,
    width: 200
  },
  welcome: {
    flex: 0.5
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 25
  },
  message: {
    fontSize: 27,
    margin: 25
  },
  button: {
    color: '#FFF',
    height: 100,
    margin: 10,
    width: '75%'
  }
});
