import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, CardItem } from 'native-base';
import { Header } from '../../components/Header';
import { specifyTargetCondition } from '../../utils/helpers/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import {
  getExplanation,
  getConditionById
} from '../../utils/apiCalls/apiCalls';

const height = Dimensions.get('window').height;

export default function SymptomsQA({ navigation }) {
  let {
    userInfo,
    symptomFollowup,
    location,
    stateAbbreviation
  } = navigation.state.params;
  console.log('symptomFollowup', symptomFollowup);

  const [explanation, setExplanation] = useState({});
  const [conditionDetails, setConditionDetails] = useState({});

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    try {
      userInfo = specifyTargetCondition(userInfo, symptomFollowup);
      let explanation = await getExplanation(userInfo);
      let conditionDetails = await getConditionById(
        symptomFollowup.conditions[0].id
      );
      setExplanation(explanation);
      setConditionDetails(conditionDetails);
    } catch (error) {
      throw new Error(error);
    }
  };

  const createTopDiagnosis = () => {
    return (
      <Card style={styles.topDiagnosis}>
        <CardItem>
          <Body>
            <Text>{conditionDetails.data.common_name}</Text>
            <Text>{conditionDetails.data.severity}</Text>
            <Text>{conditionDetails.data.triage_level}</Text>
            <Text>{conditionDetails.data.hint}</Text>
            <Text>Supporting Evidence:</Text>
            {createEvidence()}
          </Body>
        </CardItem>
      </Card>
    );
  };

  const createEvidence = () => {
    return explanation.supporting_evidence.map((evidence, index) => {
      return <Text key={index}>{evidence.common_name}</Text>;
    });
  };

  const getTopDiagnoses = () => {
    return symptomFollowup.conditions.slice(1, 4).map((condition, index) => {
      return (
        <Card key={index} style={styles.conditionCard}>
          <CardItem>
            <Body>
              <Text>Condition: {condition.common_name}</Text>
              <Text>Probability: {condition.probability}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.contentContainer}>
        {conditionDetails.data ? createTopDiagnosis() : null}
        {getTopDiagnoses()}
      </ScrollView>
      <Button
        onPress={() =>
          navigation.navigate('Doctors', { location, stateAbbreviation })
        }
      >
        <Text>Find Doctors</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    width: '100%'
  },
  contentContainer: {
    flex: 1,
    marginBottom: height * 0.05,
    marginTop: height * 0.05,
    width: '100%'
  },
  symptomText: {
    alignSelf: 'flex-start',
    fontSize: 16,
    padding: 0
  },
  card: {
    flex: 1,
    padding: 0,
    width: '100%'
  },
  question: {
    width: '80%'
  },
  conditionCard: {
    flex: 1,
    width: '100%'
  },
  topDiagnosis: {
    flex: 1,
    width: '100%'
  }
});
