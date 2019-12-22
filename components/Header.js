import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height;

export function Header(props) {
  return (
    <LinearGradient
      colors={['#004EFF', '#88CCF1']}
      style={styles.header}
    ></LinearGradient>
  );

}

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
  }
})