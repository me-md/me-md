import React from 'react';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '../../components/Header';


export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
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
          onPress={() => navigation.navigate('TermsAndConditions')}
          style={styles.button}
        // TODO: Link to Terms of Service and Privacy Policy page
        />
        <View style={styles.welcome}>
          <Text style={styles.greeting}>HELLO!</Text>
          <Text style={styles.message}>
            Welcome to MeMD, an online platform designed to help diagnose
            symptoms and locate potential doctors. Please click BEGIN to start
            your health checkup.
          </Text>
          <Button
            title='BEGIN'
            color='#8CDEDC'
            onPress={() => this.props.navigation.navigate('TermsAndConditions')}
          // TODO: Link to Terms of Service and Privacy Policy page
          />
        </View>
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
