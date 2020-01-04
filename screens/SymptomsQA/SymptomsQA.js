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
  const [question, setQuestion] = useState({});
  const [userInfo, setUserInfo] = useState(cleanedData);

  useEffect(() => { getQA() }, [userInfo]);
  useEffect(() => console.log('question', question), [question]);
  useEffect(() => console.log('userInfo', userInfo), [userInfo]);

  const getQA = async () => {
    try {
      let symptomFollowup = await
        sendInitialUserSymptoms(userInfo);
      console.log('symptom follow up?', symptomFollowup);
      setQuestion(symptomFollowup);
      symptomFollowup.should_stop ? navigation.navigate('Welcome') : null;
    } catch (error) {
      throw new Error(error);
    }
  }

  const displayQuestion = () => {
    switch (question.question.type) {
      case 'single':
        return <SingleQ style={styles.question} question={question} answerQuestion={answerQuestion} />
      case 'group_single':
        return <GroupSingleQ style={styles.question} question={question} answerQuestion={answerQuestion} />
      case 'group_multiple':
        return <GroupSingleQ style={styles.question} question={question} answerQuestion={answerQuestion} />
      default:
        <></>
    }
  }

  const answerQuestion = (answers) => {
    console.log('oldUserInfo', userInfo)
    const newUserInfo = { ...userInfo };
    newUserInfo.evidence.push(...answers);
    console.log('newUserInfo', newUserInfo)
    setUserInfo(newUserInfo);
  }

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
          <ScrollView style={styles.card}>
            {question.question && displayQuestion()}
          </ScrollView>
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
  card: {
    flex: 1,
    padding: 0,
    width: '100%'
  },
  question: {
    width: '80%'
  }
});