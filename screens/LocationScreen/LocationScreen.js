import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default function LocationScreen({ navigation }) {
  const sex = navigation.state.params.sex;
  const age = navigation.state.params.age;
  const [location, setLocation] = useState('');

  return (
    <View style={styles.locationContainer}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.container}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.navigate('SelectAge')}
          />
          <Text style={styles.locationTitle}>Location</Text>
          <Item style={styles.locationInput}>
            <Input
              style={styles.locationInput}
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
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: '35%'
  },
  locationContainer: {
    flex: 1
  },
  locationInput: {
    color: '#fff',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 24
  },
  locationTitle: {
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
