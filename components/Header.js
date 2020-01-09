import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height;

export function Header() {
  return (
    <LinearGradient colors={['#004EFF', '#88CCF1']} style={styles.header}>
      <Image
        source={require('../assets/images/name.png')}
        style={styles.icon}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: height * 0.15
  },
  icon: {
    alignSelf: 'center',
    borderWidth: 0,
    height: height * 0.1,
    marginBottom: height * 0.01,
    marginTop: height * 0.045,
    width: height * 0.1
  }
});
