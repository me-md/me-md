import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Item } from 'native-base';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { searchAllSymptoms } from '../../utils/apiCalls/apiCalls';

export default function SymptomsScreen() {
  const [state, setState] = useState({
    symptoms: []
  });

  const searchSymptoms = async text => {
    const searchResults = await searchAllSymptoms(text);
    console.log('results?', searchResults);
  };

  return (
    <View style={styles.symptomsScreenContainer}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <Entypo name='chevron-thin-up' size={36} color='black' />
        <Text style={styles.symptomsScreenTitle}>Select all symptoms:</Text>
        <Item>
          <Input
            placeholder='Search all symptoms'
            style={styles.symptomsScreenSearchInput}
            onChangeText={text => searchSymptoms(text)}
          />
          <FontAwesome
            active
            name='search'
            size={48}
            style={styles.searchIcon}
          />
        </Item>
        <Entypo name='chevron-thin-down' size={36} color='black' />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  searchIcon: {
    color: 'white'
  },
  symptomsScreenContainer: {
    flex: 1
  },
  symptomsScreenSearchInput: {
    color: 'white'
  },
  symptomsScreenTitle: {
    color: 'white',
    fontSize: 36
  }
});
