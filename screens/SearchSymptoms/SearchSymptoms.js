import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { searchAllSymptoms } from '../../utils/apiCalls/apiCalls';

const height = Dimensions.get('window').height;

export default function SymptomsScreen({ navigation }) {
  const { age, location, presentFactors, sex } = navigation.state.params;
  const [symptomIds, setSymptomIds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchSymptoms = async text => {
    if (text.length > 2) {
      const searchResults = await searchAllSymptoms(text);
      setSearchResults(searchResults.data);
    } else {
      null;
    }
  };

  const findSymptom = id => {
    if (!symptomIds.includes(id)) {
      let found = searchResults.find(symptom => symptom.id == id);
      setSymptomIds([...symptomIds, found.id]);
    } else {
      let filteredSymptoms = symptomIds.filter(symptom => symptom !== id);
      setSymptomIds(filteredSymptoms);
    }
  };

  const displaySymptoms = searchResults.map(result => {
    return (
      <Card key={result.id} style={styles.searchResultCard}>
        <CardItem>
          <Body>
            <Text style={styles.symptomText}>{result.common_name}?</Text>
            <View style={styles.checkboxes}>
              <CheckBox
                center
                id={result.id}
                title={<Text>Yes</Text>}
                // checked={}
                onPress={() => {
                  findSymptom(result.id);
                }}
              ></CheckBox>
              <CheckBox
                center
                id={result.id}
                title={<Text>No</Text>}
                // checked={}
                onPress={() => {
                  // do something, maybe?
                }}
              ></CheckBox>
            </View>
          </Body>
        </CardItem>
      </Card>
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
            onPress={() => navigation.navigate('RiskFactors')}
          />
          <Text style={styles.title}>Symptoms:</Text>
          <Item style={styles.searchBox}>
            <Input
              placeholder='Search all symptoms'
              style={styles.input}
              onChangeText={text => searchSymptoms(text)}
            />
            <FontAwesome
              active
              name='search'
              size={36}
              style={styles.searchIcon}
            />
          </Item>
          <View style={styles.searchResultsContainer}>
            <Text style={styles.input}>Select all that apply:</Text>
            <ScrollView style={styles.searchResults}>
              {displaySymptoms}
            </ScrollView>
          </View>
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
  searchBox: {
    width: '75%'
  },
  container: {
    flex: 1,
    width: '100%'
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: height * 0.05,
    marginTop: height * 0.05,
    width: '100%'
  },
  input: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: height * 0.025
  },
  searchResultsContainer: {
    alignItems: 'center',
    flex: 1,
    height: height * 0.65,
    justifyContent: 'space-evenly',
    marginBottom: height * 0.016,
    width: '100%'
  },
  searchResults: {
    flex: 1,
    padding: 0,
    width: '80%'
  },
  searchResultCard: {
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
    width: '100%'
  },
  symptomText: {
    alignSelf: 'flex-start',
    fontSize: 16,
    padding: 0
  },
  checkboxes: {
    flex: 1,
    flexDirection: 'row'
  }
});
