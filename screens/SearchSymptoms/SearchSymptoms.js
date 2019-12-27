import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { searchAllSymptoms } from '../../utils/apiCalls/apiCalls';

const height = Dimensions.get('window').height;

export default function SymptomsScreen({ navigation }) {
  console.log(navigation.state.params);
  const [state, setState] = useState({
    symptoms: []
  });
  const [searchResults, setSearchResults] = useState([]);

  const searchSymptoms = async text => {
    if (text.length > 2) {
      const searchResults = await searchAllSymptoms(text);
      setSearchResults(searchResults.data);
    } else {
      null;
    }
  };

  const displaySymptoms = searchResults.map(result => {
    console.log('search result', result);
    return (
      <Card key={result.id} style={styles.searchResultCard}>
        <CardItem>
          <Body>
            <Text style={styles.symptomText}>{result.name}</Text>
            <Text style={styles.symptomText}>{result.common_name}</Text>
            <View style={styles.checkboxes}>
              <CheckBox
                center
                id={result.id}
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
  console.log('results?', searchResults);

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
          <View style={styles.searchResults}>{displaySymptoms}</View>
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
    marginTop: height * 0.05,
    width: '100%'
  },
  symptomsScreenSearchInput: {
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  },
  searchResults: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: 16,
    overflow: 'scroll',
    width: '100%'
  },
  searchResultCard: {
    flex: 1,
    marginBottom: 14,
    marginTop: 14,
    width: '75%'
  },
  symptomText: {
    alignSelf: 'flex-start',
    fontSize: 16
  }
});
