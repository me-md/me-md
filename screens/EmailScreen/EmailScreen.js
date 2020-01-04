import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { Header } from '../../components/Header';

const height = Dimensions.get('window').height;

export default function EmailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})