import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { searchAllSymptoms } from '../../utils/apiCalls/apiCalls';
import { cleanInitialUserReport } from '../../utils/helpers/helpers';

const height = Dimensions.get('window').height;

export default function SymptomsScreen({ navigation }) {
  const {
    age,
    location,
    presentFactors,
    sex,
    stateAbbreviation
  } = navigation.state.params;
  const [symptoms, setSymptoms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchSymptoms = async text => {
    if (text.length > 2) {
      const searchResults = await searchAllSymptoms(text);
      setSearchResults(searchResults.data);
    } else {
      setSearchResults([]);
    }
  };

  const displaySelectedSymptoms =
    symptoms.map((symptom, index) => {
      return (
        <CardItem key={index} style={styles.selectedSymptom}>
          <Text>{symptom.common_name}</Text>
          <AntDesign
            name='closecircle'
            id={symptom.id}
            size={26}
          // onPress={() => {
          // }}
          />
        </CardItem>)
    })



  const findSymptom = result => {
    let existingSymptom = symptoms.find(symptom => symptom.id == result.id);
    existingSymptom ? removeSymptom(result) : addSymptom(result);
  };

  const addSymptom = result => {
    let found = searchResults.find(symptom => symptom.id == result.id);
    setSymptoms([...symptoms, { ...result, present: true }]);
  };

  const removeSymptom = result => {
    let filteredSymptoms = symptoms.filter(symptom => symptom.id !== result.id);
    setSymptoms(filteredSymptoms);
  };

  const sendInitialSymptoms = () => {
    const userInfo = { age, presentFactors, symptoms, sex };
    let cleanedData = cleanInitialUserReport(userInfo);
    navigation.navigate('SymptomsQA', {
      cleanedData,
      location,
      stateAbbreviation
    });
  };

  const displaySymptoms = searchResults.map((result, index) => {
    let found = symptoms.find(symptom => symptom.id == result.id);
    return (
      <View key={index} style={styles.checkboxes}>
        <Text style={styles.symptomText}>{result.common_name}?</Text>
        <AntDesign
          name={found ? 'checkcircle' : 'pluscircleo'}
          id={result.id}
          style={styles.add}
          size={26}
          color='black'
          onPress={() => {
            findSymptom(result);
          }}
        />
      </View>
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
          <Text style={styles.title}>Symptoms</Text>
          <Item style={styles.searchBox}>
            <Input
              placeholder='Search all symptoms'
              placeholderTextColor="#f8f8f8"
              style={styles.input}
              onChangeText={text => searchSymptoms(text)}
            />
            <Ionicons
              active
              name='ios-search'
              size={36}
              style={styles.searchIcon}
            />

          </Item>
          <View style={styles.searchResultsContainer}>
            <Text style={styles.hint}>
              Select all that apply (at least 3):
            </Text>
            <ScrollView style={styles.selected}>
              <Card style={styles.selectedContainer}>
                {displaySelectedSymptoms}
              </Card>
            </ScrollView>
            <ScrollView style={styles.searchResults}>
              {displaySymptoms}
            </ScrollView>
          </View>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() => sendInitialSymptoms()}
          />
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
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
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
    marginBottom: height * 0.06,
    marginTop: height * 0.06,
    width: '100%'
  },
  input: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  hint: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: height * 0.025
  },
  selected: {
    flex: 1
  },
  searchResultsContainer: {
    alignItems: 'center',
    flex: 1,
    height: height * 0.65,
    justifyContent: 'space-evenly',
    marginBottom: height * 0.016,
    width: '100%'
  },
  selectedContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(256, 256, 256, 0)',
    flex: 1,
    flexGrow: 1,
    width: '100%',
  },
  selectedSymptom: {
    backgroundColor: 'rgba(256, 256, 256, 0.9)',
    borderRadius: 50,
    height: 80,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
  },
  searchResults: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    marginTop: height * 0.02,
    padding: 0,
    width: '90%'
  },
  symptomText: {
    fontSize: 18,
    width: '70%'
  },
  checkboxes: {
    alignItems: 'center',
    backgroundColor: 'rgba(256, 256, 256, 0.7)',
    borderBottomWidth: 2,
    borderColor: 'grey',
    height: 80,
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 10
  }
});
