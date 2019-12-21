import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { CheckBox } from 'react-native-elements'
import { Header } from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default function TermsAndConditionsScreen({ navigation }) {

  const [state, setState] = useState({
    checked: false,
    isButtonEnabled: false
  })

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <AntDesign
          name="close"
          size={32}
          color="black"
          style={styles.close}
          onPress={() => navigation.navigate('Welcome')} />
        <Image
          source={require('../../assets/images/terms-and-conditions.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Terms and Conditions</Text>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scrollText}>
            <Text style={styles.legal}>
              “Version” means the original licensor to copy, sublicense, distribute or transfer NetHack is modified by someone else and passed on, we want its recipients to know that what they have requested that this License or the Derived Program under this License, or (at your option) any later version published by the Free Software Foundation; either version 2 of this License, provided that you include complete instructions on how and where you have knowledge of patent licenses granted hereunder, each Recipient hereby assumes sole responsibility to serve as the Derived Work. If you initiate litigation by asserting a patent infringement claim against Respondent alleging that the Modification is derived, directly or indirectly, from the conditions listed in manifest.txt. Effect of New York and the date of initial External Deployment, whichever is longer. You should also get your employer (if you work as “Original Code” means the original Licensed Product.

              However, you may do only in or as part of Licensed Product is available under this Agreement shall terminate on the Internet using the software, or if you distribute any Modifications you distribute any Modifications that alter or otherwise using Python 1.6, beta 1, is made available by Apple under this Agreement is published, Contributor may elect to distribute this Package shall not apply to your programs, too. When we speak of free software Package may be distributed and/or modified under the Original Code, and if a third party against the Indemnified Contributor may elect to distribute your Derivative Works from it. Works” is defined in Article 1 below) constitutes the entire Package. You may do so if it has sufficient copyright rights in the Program: Copyright (C) year name of the Initial Developer and every Contributor for any version ever published by the Initial Developer and every part regardless of who wrote it.

              Thus, it is not the Current Maintainer (and the Copyright Holder. The resulting Package will still be considered the Standard Version. License) and (b) the object code compiled from such Recipient under this Agreement, whether expressly, by implication, estoppel or otherwise.
            {/* TODO: Put real lawyer lingo here */}
            </Text>
          </ScrollView>
        </View>
        <View>
          <CheckBox
            center
            title={<Text style={styles.agreement}>I read and accept the Terms of Service and Privacy Policy</Text>}
            checked={state.checked}
            onPress={() => setState({
              checked: !state.checked,
              isButtonEnabled: !state.isButtonEnabled
            })}
          />
        </View>
        {state.isButtonEnabled ?
          <Button
            block
            style={styles.button}
            onPress={() => navigation.navigate('BiologicalInformation')}>
            <Text>CONTINUE</Text>
          </Button> :
          <Button
            disabled
            block
            style={styles.button}>
            <Text>CONTINUE</Text>
          </Button>}
      </View>
    </ScrollView >
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
    marginRight: 20,
    marginTop: 20,
  },
  icon: {
    borderWidth: 0,
    borderRadius: 50,
    height: height * 0.15,
    width: height * 0.15
  },
  heading: {
    alignSelf: 'flex-start',
    margin: 20,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  scrollContainer: {
    height: height * 0.4,
    marginBottom: 10
  },
  scrollText: {
    alignSelf: 'center',
    backgroundColor: '#CCCCCC',
    borderColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20
  },
  legal: {
    lineHeight: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  legal: {
    lineHeight: 20
  },
  agreement: {
    alignSelf: 'flex-start',
    fontSize: 14,
    margin: 10
  },
  button: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 25,
    width: '75%'
  }
});
