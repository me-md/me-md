import React from 'react';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

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
    flex: 0.2
  }
})