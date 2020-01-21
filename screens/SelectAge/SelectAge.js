import React, { useState } from 'react';
import { Dimensions, Picker, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ageData } from '../../utils/ageData/ageData';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function SelectAge({ navigation }) {
  const sex = navigation.state.params.sex;
  const [age, setAge] = useState('35');

  const ages = ageData.map((age, index) => {
    return (
      <Picker.Item
        style={{ color: 'white' }}
        label={`${age}`}
        value={`${age}`}
        key={index}
      />
    );
  });

  console.log(ages)

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.contentContainer}>
          <Entypo
            name='chevron-thin-up'
            size={50}
            color='white'
            onPress={() => navigation.goBack()}
          />
          <View style={styles.childContainer}>
            <Text style={styles.title}>What is your age?</Text>
            <MaterialIcons name='cake' size={80} color='white' />
            <Picker
              selectedValue={age}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setAge(itemValue)
              }
            >
              {ages}
            </Picker>
          </View>
          {age !== '' ? (
            <Entypo
              name='chevron-thin-down'
              size={50}
              color='white'
              onPress={() => navigation.push('Location', { sex, age })}
            />
          ) : (
              <Entypo
                name='chevron-thin-down'
                size={50}
                color='white'
                style={{ opacity: 0 }}
              />
            )}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.06,
    marginTop: height * 0.06
  },
  container: {
    flex: 1
  },
  gradientBackground: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: width * 0.09,
    fontWeight: 'bold'
  },
  picker: {
    color: 'white',
    width: 200
  },
  childContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  }
});
