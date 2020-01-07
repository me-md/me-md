import React, { Fragment, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Input, Item, Text } from 'native-base';
import { Header } from '../../components/Header';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as EmailValidator from 'email-validator';
import { sendEmailReport } from '../../utils/apiCalls/SendEmail/sendEmailReport';

const height = Dimensions.get('window').height;

export default function EmailScreen({ navigation }) {
  const { location, report, stateAbbreviation } = navigation.state.params;
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const sendEmail = async () => {
    setEmailSent(true);
    return await sendEmailReport(email, report);
  };

  const validateEmail = email => {
    EmailValidator.validate(email) && setEnabled(true);
    setEmail(email);
  };

  return (
    <Fragment>
      <Header />
      <AntDesign
        name='close'
        size={24}
        color='black'
        style={styles.close}
        onPress={() =>
          navigation.push('Doctors', { location, stateAbbreviation })
        }
      />
      <View style={styles.container}>
        <Text style={styles.title}>Send Detailed Report:</Text>
        <Image
          source={require('../../assets/images/report.png')}
          style={styles.report}
        />
        {emailSent ? (
          <Fragment>
            <Text style={styles.response}>Thank you!</Text>
            <Text
              style={styles.thankYou}
            >{`A detailed report from today's session has been sent to: ${email}`}</Text>
            <Button
              rounded
              style={styles.button}
              onPress={() => navigation.push('Welcome')}
            >
              <Text style={styles.buttonText}>New Checkup</Text>
              <MaterialCommunityIcons
                name='stethoscope'
                style={styles.icon}
                size={26}
                color='white'
              />
            </Button>
          </Fragment>
        ) : (
            <Fragment>
              <Item style={styles.input}>
                <Input
                  placeholder='Enter your email address'
                  style={styles.input}
                  autoCapitalize='none'
                  onChangeText={text => validateEmail(text)}
                />
              </Item>
              <View style={styles.buttonContainer}>
                {enabled ? (
                  <Button
                    rounded
                    style={styles.button}
                    onPress={() => sendEmail()}
                  >
                    <Text style={styles.buttonText}>Send Report</Text>
                    <Ionicons
                      name='ios-send'
                      style={styles.icon}
                      size={26}
                      color='white'
                    />
                  </Button>
                ) : (
                    <Button
                      disabled
                      rounded
                      style={styles.button}
                      onPress={() => sendEmail()}
                    >
                      <Text style={styles.buttonText}>Send Report</Text>
                      <Ionicons
                        name='ios-send'
                        style={styles.icon}
                        size={26}
                        color='white'
                      />
                    </Button>
                  )}
                <Button
                  rounded
                  style={styles.button}
                  onPress={() => navigation.push('Welcome')}
                >
                  <Text style={styles.buttonText}>New Checkup</Text>
                  <MaterialCommunityIcons
                    name='stethoscope'
                    style={styles.icon}
                    size={26}
                    color='white'
                  />
                </Button>
              </View>
            </Fragment>
          )}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: height * 0.075,
    width: '100%'
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1
  },
  close: {
    alignSelf: 'flex-end',
    marginRight: height * 0.02,
    marginTop: height * 0.025
  },
  input: {
    fontSize: 16,
    textAlign: 'center',
    width: '60%'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: height * 0.025
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: height * 0.02,
    width: '60%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginBottom: height * 0.08
  },
  icon: {
    marginRight: height * 0.02
  },
  report: {
    alignSelf: 'center',
    borderWidth: 0,
    height: height * 0.17,
    marginBottom: height * 0.01,
    marginTop: height * 0.04,
    width: height * 0.17
  },
  response: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  thankYou: {
    marginLeft: height * 0.02,
    marginRight: height * 0.02
  }
});
