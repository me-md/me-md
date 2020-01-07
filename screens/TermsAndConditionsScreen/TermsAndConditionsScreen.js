import React, { useState, Fragment } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Header } from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default function TermsAndConditionsScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState({
    checked: false,
    isButtonEnabled: false
  });

  return (
    <Fragment>
      <Header />
      <ScrollView style={styles.container}>
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
                have read on meMD! If you think you may have a medical
                emergency, call your doctor or 911 immediately. meMD does not
                recommend or endorse any specific products or services. Reliance
                on any information provided by meMD is solely at your own risk.
              </Text>
            </ScrollView>
          </View>
          <View>
            <CheckBox
              center
              title={
                <Text style={styles.agreement}>
                  I read and accept the Terms of Service and Privacy Policy
                </Text>
              }
              checked={isChecked.checked}
              onPress={() =>
                setIsChecked({
                  checked: !isChecked.checked,
                  isButtonEnabled: !isChecked.isButtonEnabled
                })
              }
            />
          </View>
          {isChecked.isButtonEnabled ? (
            <Button
              block
              style={styles.button}
              onPress={() => navigation.push('BiologicalInformation')}
            >
              <Text>CONTINUE</Text>
            </Button>
          ) : (
              <Button disabled block style={styles.button}>
                <Text>CONTINUE</Text>
              </Button>
            )}
        </View>
      </ScrollView>
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
    alignSelf: 'flex-start',
    margin: height * 0.02,
    marginBottom: height * 0.0005,
    fontSize: height * 0.04,
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
    marginBottom: height * 0.03,
    marginTop: height * 0.02,
    width: '75%'
  }
});
