import React from 'react';
import { Button, Image, StyleSheet, Text, View, Alert } from 'react-native';
import { Header } from '../../components/Header';

export default function TermsOfConditionsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('../../assets/images/terms-and-conditions.png')}
        style={styles.icon}
      />
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
  }
});
