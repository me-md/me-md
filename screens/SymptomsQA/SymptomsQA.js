import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import SingleQ from '../../components/SingleQ';
import GroupSingleQ from '../../components/GroupSingleQ';
import { sendInitialUserSymptoms } from '../../utils/apiCalls/Infermedica/sendInitialUserSymptoms';

const height = Dimensions.get('window').height;

export default function SymptomsQA({ navigation }) {
  const { cleanedData, location, stateAbbreviation } = navigation.state.params;
  const [question, setQuestion] = useState({});
  const [userInfo, setUserInfo] = useState(cleanedData);

  useEffect(() => {
    getQA();
  }, [userInfo]);

  const getQA = async () => {
    try {
      let symptomFollowup = await sendInitialUserSymptoms(userInfo);
      setQuestion(symptomFollowup);
      console.log(symptomFollowup);
      symptomFollowup.should_stop
        ? navigation.push('Results', {
          userInfo,
          symptomFollowup,
          location,
          stateAbbreviation
        })
        : null;
    } catch (error) {
      throw new Error(error);
    }
  };

  const displayQuestion = () => {
    switch (question.question.type) {
      case 'single':
        return (
          <SingleQ
            style={styles.question}
            question={question}
            answerQuestion={answerQuestion}
          />
        );
      case 'group_single':
        return (
          <GroupSingleQ
            style={styles.question}
            question={question}
            answerQuestion={answerQuestion}
          />
        );
      case 'group_multiple':
        return (
          <GroupSingleQ
            style={styles.question}
            question={question}
            answerQuestion={answerQuestion}
          />
        );
      default:
        <></>;
    }
  };

  const answerQuestion = answers => {
    const newUserInfo = { ...userInfo };
    newUserInfo.evidence.push(...answers);
    setUserInfo(newUserInfo);
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
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.symptomText}>Regarding your symptoms</Text>
          <ScrollView style={styles.card}>
            <View style={styles.cardContainer}>
              {question.question && displayQuestion()}
            </View>
          </ScrollView>
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
    marginBottom: height * 0.05,
    marginTop: height * 0.05,
    width: '100%'
  },
  parentContainer: {
    alignContent: 'center',
    flex: 1,
    width: '100%'
  },
  symptomText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    padding: 0
  },
  cardContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  card: {
    padding: 0,
    width: '100%'
  },
  question: {
    width: '80%'
  }
});
