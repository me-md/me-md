import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function SelectAge({ navigation }) {
  console.log(navigation.state.params)

  const [state, setState] = useState({
    age: '',
    sex: navigation.state.params
  })

  return (
    <View style={styles.selectAgeContainer} >
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.contentContainer}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.navigate('BiologicalInformation')}
          />
          <View style={styles.selectAgeChildContainer}>
            <Text style={styles.selectAgeHeader}>Age</Text>
            <FontAwesome name='birthday-cake' size={48} color='white' />
            <Item style={styles.selectAgeInput}>
              <Input
                placeholder='Enter your age'
                style={styles.selectAgeInputText}
                onChangeText={text => setState({ age: text })}
              />
            </Item>
          </View>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() => navigation.navigate('LocationScreen')}
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
    marginBottom: 20,
    marginTop: 20
  },
  selectAgeContainer: {
    flex: 1
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  selectAgeHeader: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold'
  },
  selectAgeInput: {
    color: '#FFF',
    width: '35%'
  },
  selectAgeChildContainer: {
    alignItems: 'center',
    flex: 0.75,
    justifyContent: 'space-evenly'
  }
});
