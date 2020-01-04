import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import SingleQ from '../../components/SingleQ';
import GroupSingleQ from '../../components/GroupSingleQ';
import GroupMultipleQ from '../../components/GroupMultipleQ';
import {
  mockSingle,
  mockGroupMultiple,
  mockGroupSingle
} from '../../utils/mockQuestions/mockQuestions';
import {
  sendInitialUserSymptoms
} from '../../utils/apiCalls/apiCalls';

const height = Dimensions.get('window').height;

export default function SymptomsQA({ navigation }) {
  // const { age, location, presentFactors, sex, symptomFollowup } = navigation.state.params;
  // const [currentQuestion, setCurrentQuestion] = useState({})
  const { cleanedData, location } = navigation.state.params;
  const [state, setState] = useState({});

  useEffect(() => { getQA() }, []);

  const getQA = async () => {
    try {
      console.log('uinfo before fetch', cleanedData)
      let symptomFollowup = await
        sendInitialUserSymptoms(cleanedData);
      console.log('symptom follow up?', symptomFollowup);
      setState(symptomFollowup);
    } catch (error) {
      throw new Error(error);
    }
  }

  const displayQuestion = () => {
    switch (state.question.type) {
      case 'single':
        return <SingleQ style={styles.question} question={state} answerQuestion={answerQuestion} />
      case 'group_single':
        return <GroupSingleQ style={styles.question} question={state} answerQuestion={answerQuestion} />
      case 'group_multiple':
        return <GroupMultipleQ style={styles.question} question={state} answerQuestion={answerQuestion} />
      default:
        <></>
    }
  }

  const answerQuestion = (answers) => {
    cleanedData.evidence.push(answers);
  }

  useEffect(() => console.log('state', state.should_stop), [state]);

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
            onPress={() => navigation.navigate('SearchSymptoms')}
          />
          <Text style={styles.symptomText}>Regarding your symptoms:</Text>
          {state.question && displayQuestion()}
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
          // onPress={() => }
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
  symptomText: {
    alignSelf: 'flex-start',
    fontSize: 16,
    padding: 0
  },
  question: {
    width: '80%'
  }
});
