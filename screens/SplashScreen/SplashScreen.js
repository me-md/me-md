import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#004EFF' }}>
        {setTimeout(() => {
          navigation.push('Welcome')
        }, 5000)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004EFF',
    flex: 1,
    justifyContent: 'center',
  }
});
