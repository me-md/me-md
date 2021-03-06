import React, { useState, Fragment } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Button, Text } from 'native-base';
import { Header } from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';
import Checkbox from '../../components/Checkbox';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function TermsAndConditionsScreen({ navigation }) {
  const [enabled, setEnabled] = useState(false);

  const changeButton = checked => {
    setEnabled(checked);
  };

  return (
    <Fragment>
      <Header />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <AntDesign
            name='close'
            size={24}
            color='black'
            style={styles.close}
            onPress={() => navigation.push('Welcome')}
          />
          <Image
            source={require('../../assets/images/terms-and-conditions.png')}
            style={styles.icon}
          />
          <Text style={styles.heading}>Terms and Conditions</Text>
          <View style={styles.scrollContainer}>
            <ScrollView style={styles.scrollText}>
              <Text style={styles.legal}>
                This app is not intended to be a substitute for professional
                medical advice, diagnosis, or treatment. Always read the label
                before taking any over-the-counter (OTC) medications. The label
                identifies the active ingredient(s) and contains other important
                information including warnings about possible drug interactions
                and side effects. Always seek the advice of your physician or
                other qualified health provider with any questions you may have
                regarding a medical condition. Never disregard professional
                medical advice or delay in seeking it because of something you
                have read on MeMD! If you think you may have a medical
                emergency, call your doctor or 911 immediately. MeMD does not
                recommend or endorse any specific products or services. Reliance
                on any information provided by MeMD is solely at your own risk.
              </Text>
            </ScrollView>
          </View>
          <View>
            <Checkbox changeButton={changeButton} />
          </View>
          {enabled ? (
            <Button
              rounded
              style={styles.button}
              onPress={() => navigation.push('BiologicalInformation')}
            >
              <Text style={styles.buttonText}>Continue</Text>
              <Feather
                name='arrow-right-circle'
                size={30}
                color='white'
                style={styles.nextIcon}
              />
            </Button>
          ) : (
            <Button disabled rounded style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
              <Feather
                name='arrow-right-circle'
                size={30}
                color='white'
                style={styles.nextIcon}
              />
            </Button>
          )}
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
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
  icon: {
    borderWidth: 0,
    borderRadius: 50,
    height: height * 0.1,
    width: height * 0.1
  },
  heading: {
    alignSelf: 'center',
    margin: height * 0.02,
    marginBottom: height * 0.0005,
    fontSize: width * 0.07,
    fontWeight: 'bold'
  },
  scrollContainer: {
    height: height * 0.35,
    marginBottom: height * 0.0005
  },
  scrollText: {
    alignSelf: 'center',
    backgroundColor: '#CCCCCC',
    borderColor: '#FFFFFF',
    paddingLeft: height * 0.02,
    paddingRight: height * 0.02,
    margin: height * 0.02
  },
  legal: {
    fontSize: height * 0.018,
    lineHeight: height * 0.035,
    marginBottom: height * 0.02,
    marginTop: height * 0.02
  },
  agreement: {
    alignSelf: 'flex-start',
    fontSize: 14,
    margin: height * 0.015
  },
  button: {
    alignSelf: 'center',
    height: height * 0.07,
    justifyContent: 'space-around',
    marginBottom: height * 0.02,
    marginTop: -height * 0.25,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: width * 0.65
  },
  checkbox: {
    height: 30,
    width: 30
  },
  buttonText: {
    fontSize: height * 0.025,
    fontWeight: 'bold'
  },
  nextIcon: {
    marginRight: height * 0.02
  }
});
