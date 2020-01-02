import React, { useState } from 'react';
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

const height = Dimensions.get('window').height;

export default function SymptomsQA({ navigation }) {
  // const { age, location, presentFactors, sex, symptomFollowup } = navigation.state.params;
  // const [currentQuestion, setCurrentQuestion] = useState({})

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
          {/* <SingleQ style={styles.question} question={mockSingle} /> */}
          {/* <GroupSingleQ style={styles.question} question={mockGroupSingle} /> */}
          <GroupMultipleQ
            style={styles.question}
            question={mockGroupMultiple}
          />
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
