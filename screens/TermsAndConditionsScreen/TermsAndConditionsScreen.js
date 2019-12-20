import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

export default function TermsAndConditionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('../../assets/images/terms-and-conditions.png')}
        style={styles.icon}
      />
      <Text style={styles.heading}>Terms and Conditions</Text>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scrollText}>
          <Text>
            “Version” means the original licensor to copy, sublicense, distribute or transfer NetHack is modified by someone else and passed on, we want its recipients to know that what they have requested that this License or the Derived Program under this License, or (at your option) any later version published by the Free Software Foundation; either version 2 of this License, provided that you include complete instructions on how and where you have knowledge of patent licenses granted hereunder, each Recipient hereby assumes sole responsibility to serve as the Derived Work. If you initiate litigation by asserting a patent infringement claim against Respondent alleging that the Modification is derived, directly or indirectly, from the conditions listed in manifest.txt. Effect of New York and the date of initial External Deployment, whichever is longer. You should also get your employer (if you work as “Original Code” means the original Licensed Product.

            However, you may do only in or as part of Licensed Product is available under this Agreement shall terminate on the Internet using the software, or if you distribute any Modifications you distribute any Modifications that alter or otherwise using Python 1.6, beta 1, is made available by Apple under this Agreement is published, Contributor may elect to distribute this Package shall not apply to your programs, too. When we speak of free software Package may be distributed and/or modified under the Original Code, and if a third party against the Indemnified Contributor may elect to distribute your Derivative Works from it. Works” is defined in Article 1 below) constitutes the entire Package. You may do so if it has sufficient copyright rights in the Program: Copyright (C) year name of the Initial Developer and every Contributor for any version ever published by the Initial Developer and every part regardless of who wrote it.

            Thus, it is not the Current Maintainer (and the Copyright Holder. The resulting Package will still be considered the Standard Version. License) and (b) the object code compiled from such Recipient under this Agreement, whether expressly, by implication, estoppel or otherwise.
            {/* TODO: Put real lawyer lingo here */}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.agreement}>
        {/* TODO: Create checkable box for user to click */}
        <Text>
          I read and accept the Terms of Service and Privacy Policy
        </Text>
      </View>
      <Button
        title="CONTINUE"
        style={styles.button}
        onPress={() => navigation.navigate('SelectAge')}
      />
      {/* TODO: Implement React Basic button */}
      {/* TODO: Enable button ONLY when the ToC and PP are accepted */}
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
  heading: {
    margin: 20,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  scrollContainer: {
    flex: 0.55,
    marginBottom: 20
  },
  scrollText: {
    alignSelf: 'center',
    backgroundColor: '#CCCCCC',
    borderColor: '#FFFFFF',
    borderWidth: 10,
    padding: 20,
    width: 400
  },
  agreement: {
    fontSize: 20,
    marginLeft: 20
  },
  button: {
    marginTop: 40,
  }
});
