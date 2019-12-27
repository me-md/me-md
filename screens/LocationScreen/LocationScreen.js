import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default function LocationScreen({ navigation }) {
  const { age, sex } = navigation.state.params;
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.contentContainer}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.navigate('SelectAge')}
          />
          <Text style={styles.title}>Location</Text>
          <Item style={styles.input}>
            <Input
              style={styles.input}
              placeholder='City, State'
              onChangeText={text => setLocation(text)}
            />
          </Item>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() =>
              navigation.navigate('RiskFactors', { sex, age, location })
            }
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: height * 0.075,
    marginBottom: height * 0.05
  },
  container: {
    flex: 1
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    height: 40,
    width: '75%'
  },
  title: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold'
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  }
});
