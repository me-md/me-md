import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Input, Item, Text } from 'native-base';
import { Header } from '../../components/Header';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Send Detailed Report:</Text>
      <Image
        source={require('../../assets/images/report.png')}
        style={styles.report}
      />
      <Item style={styles.input}>
        <Input
          placeholder='you@email.com'
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />
      </Item>
      <Button rounded style={styles.button}>
        <Text>Send Report</Text>
        <Ionicons name='ios-send' style={styles.icon} size={26} color='white' />
      </Button>
      <Button
        rounded
        style={styles.button}
        onPress={() => navigation.push('Welcome')}
      >
        <Text>New Checkup</Text>
        <MaterialCommunityIcons
          name='stethoscope'
          style={styles.icon}
          size={26}
          color='white'
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: height * 0.075
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1
  },
  input: {
    fontSize: 16,
    width: '80%'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: height * 0.025
  },
  button: {
    marginTop: height * 0.02,
    width: '50%'
  },
  icon: {
    marginRight: height * 0.02
  },
  report: {
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 50,
    height: height * 0.2,
    marginBottom: height * 0.01,
    marginTop: height * 0.04,
    width: height * 0.2
  }
});
