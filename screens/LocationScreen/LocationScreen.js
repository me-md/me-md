import React, { useState } from 'react';
import { Dimensions, Picker, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { statesData } from '../../utils/statesData/statesData';

const height = Dimensions.get('window').height;

export default function LocationScreen({ navigation }) {
  const { age, sex } = navigation.state.params;
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');


  navigator.geolocation.getCurrentPosition(
    position => {
      const location = JSON.stringify(position);

      setLocation(location);
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  console.log(location)

  const stateAbbreviations = statesData.map(state => {
    return <Picker.Item style={styles.item} label={state.abbreviation} value={state.abbreviation} />
  })

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
          <Picker
            selectedValue={state}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setState(itemValue)
            }>
            {stateAbbreviations}
          </Picker>
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
    </View >
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
  picker: {
    color: 'white',
    height: 100,
    width: 200
  },
  item: {
    color: 'white'
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
