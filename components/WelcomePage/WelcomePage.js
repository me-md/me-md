import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/doctor.png')}
        style={styles.icon}
      />
      <LinearGradient
        colors={['#004EFF', '#FFF']}
        style={styles.header}
      ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  header: {
    flex: 0.25
  },
  icon: {
    alignSelf: center,
    borderWidth: 1,
    borderRadius: 5,
    height: 100,
    width: 100
  }
});
