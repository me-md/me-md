import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { Header } from '../../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/images/doctor.png')}
          style={styles.icon}
        />
        <View style={styles.welcome}>
          <Text style={styles.greeting}>Hello!</Text>
          <Text style={styles.message}>
            Welcome to MeMD, a mobile platform designed to help diagnose
            conditions and locate potential doctors. Please click Start Checkup
            to start your health checkup.
          </Text>
          <Button
            rounded
            style={styles.button}
            onPress={() => navigation.push('TermsAndConditions')}
          >
            <Text style={styles.buttonText}>New Checkup</Text>
            <MaterialCommunityIcons
              name='stethoscope'
              style={styles.buttonIcon}
              size={26}
              color='white'
            />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: height * 0.075
  },
  contentContainer: {},
  icon: {
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 50,
    height: height * 0.2,
    marginBottom: height * 0.01,
    marginTop: height * 0.04,
    width: height * 0.2
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: width * 0.06
  },
  welcome: {
    textAlign: 'center'
  },
  message: {
    alignSelf: 'center',
    padding: width * 0.06,
    fontSize: 22
  },
  button: {
    alignSelf: 'center',
    fontWeight: 'bold',
    height: height * 0.07,
    justifyContent: 'space-around',
    marginTop: height * 0.02,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: width * 0.65,
  },
  buttonText: {
    fontSize: height * 0.025,
    fontWeight: 'bold'
  },
  buttonIcon: {
      marginRight: height * 0.02
  }
});
