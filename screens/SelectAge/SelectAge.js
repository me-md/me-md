import React, { useState } from 'react';
import { Dimensions, Picker, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NumericInput from 'react-native-numeric-input';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { ageData } from '../../utils/ageData/ageData';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function SelectAge({ navigation }) {
  const sex = navigation.state.params.sex;
  const [age, setAge] = useState('');



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
            <Text style={styles.title}>Age</Text>
            <MaterialIcons name='cake' size={80} color='white' />
            <NumericInput
              value={age}
              onChange={(itemValue) =>
                setAge(itemValue)}
              minValue={1}
              maxValue={99}
              // initValue={35}
              totalHeight={height * 0.1}
              totalWidth={width * 0.75}
              textColor='white'
            />
          </View>
          {age !== '' ? (<Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() => navigation.push('Location', { sex, age })}
          />) : (<Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            style={{ opacity: 0 }}
          />)}
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
    marginBottom: height * 0.06,
    marginTop: height * 0.06,
  },
  container: {
    flex: 1
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold'
  },
  input: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%'
  },
  childContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: height * 0.30
  }
});
