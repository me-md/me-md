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
  const [stateAbbreviation, setStateAbbreviation] = useState('AL');

  navigator.geolocation.getCurrentPosition(
    position => {
      setLocation(position);
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  const stateAbbreviations = statesData.map((state, index) => {
    return (
      <Picker.Item
        style={styles.item}
        label={state.abbreviation}
        value={state.abbreviation}
        key={index}
      />
    );
  });

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
            onPress={() => navigation.goBack()}
          />
          <View style={styles.childContainer}>
            <Text style={styles.title}>State</Text>
            <Entypo
              name='location-pin'
              style={styles.pin}
              size={80}
              color='white'
            />
            <Picker
              selectedValue={stateAbbreviation}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setStateAbbreviation(itemValue)
              }
            >
              {stateAbbreviations}
            </Picker>
          </View>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() =>
              navigation.push('RiskFactors', {
                sex,
                age,
                location,
                stateAbbreviation
              })
            }
          />
        </View>
      </LinearGradient >
    </View >
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: height * 0.06,
    marginTop: height * 0.06,
  },
  container: {
    flex: 1
  },
  childContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.8,
    marginBottom: height * 0.18
  },
  pin: {

  },
  picker: {
    color: 'white',
    width: 200
  },
  item: {
    color: 'white',
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
