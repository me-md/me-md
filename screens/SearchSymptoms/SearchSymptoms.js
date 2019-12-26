import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { searchAllSymptoms } from '../../utils/apiCalls/apiCalls';

export default function SymptomsScreen({ navigation }) {
  const [state, setState] = useState({
    symptoms: []
  });

  const searchSymptoms = async text => {
    if (text.length > 2) {
      const searchResults = await searchAllSymptoms(text);
      displaySymptoms(searchResults);
    } else {
      null;
    }
  };

  const displaySymptoms = searchResults => {
    searchResults.data.map(symptom => {
      return (
        <Card key={symptom.id} style={styles.riskFactorCard}>
          <CardItem>
            <Body>
              <Text style={styles.questionText}>{symptom.common_name}</Text>
              <View style={styles.checkboxes}>
                <CheckBox
                  center
                  id={symptom.id}
                  title={<Text>Yes</Text>}
                  // checked={present.present}
                  // onPress={id => {
                  //   findRiskToUpdate(id);
                  // }}
                ></CheckBox>
              </View>
            </Body>
          </CardItem>
        </Card>
      );
    });
  };

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
            onPress={() => navigation.navigate('RiskFactors')}
          />
          <Text style={styles.title}>Select all symptoms:</Text>
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
          {searchSymptoms}
          <Entypo name='chevron-thin-down' size={36} color='white' />
        </View>
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
  container: {
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: '35%'
  },
  symptomsScreenSearchInput: {
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  }
});
