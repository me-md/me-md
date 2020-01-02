import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;

export default function SymptomsQA({ navigation }) {
  // const { age, location, presentFactors, sex, symptomFollowup } = navigation.state.params;
  // const [currentQuestion, setCurrentQuestion] = useState({})
  const mockData = {
    conditions: [
      {
        common_name: 'Gastroenteritis',
        id: 'c_10',
        name: 'Gastroenteritis',
        probability: 0.3477
      },
      {
        common_name: 'Food poisoning',
        id: 'c_138',
        name: 'Food poisoning',
        probability: 0.2861
      },
      {
        common_name: 'Irritable bowel',
        id: 'c_142',
        name: 'Irritable bowel syndrome',
        probability: 0.2477
      },
      {
        common_name: 'Abdominal pain, unspecified',
        id: 'c_969',
        name: 'Abdominal pain, unspecified',
        probability: 0.1785
      },
      {
        common_name: 'Gastritis',
        id: 'c_515',
        name: 'Gastritis',
        probability: 0.1542
      },
      {
        common_name: 'Stomach ulcer',
        id: 'c_20',
        name: 'Peptic ulcer',
        probability: 0.1189
      }
    ],
    extras: {},
    question: {
      extras: {},
      items: [
        {
          choices: [
            {
              id: 'present',
              label: 'Yes'
            },
            {
              id: 'absent',
              label: 'No'
            },
            {
              id: 'unknown',
              label: "Don't know"
            }
          ],
          id: 's_1782',
          name: 'Mild'
        },
        {
          choices: [
            {
              id: 'present',
              label: 'Yes'
            },
            {
              id: 'absent',
              label: 'No'
            },
            {
              id: 'unknown',
              label: "Don't know"
            }
          ],
          id: 's_1783',
          name: 'Moderate'
        },
        {
          choices: [
            {
              id: 'present',
              label: 'Yes'
            },
            {
              id: 'absent',
              label: 'No'
            },
            {
              id: 'unknown',
              label: "Don't know"
            }
          ],
          id: 's_1195',
          name: 'Severe'
        }
      ],
      text: 'How strong is your abdominal pain?',
      type: 'group_single'
    },
    should_stop: false
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.symptomText}>Regarding your symptoms:</Text>
          <Text style={styles.symptomText}>{mockData.question.text}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = {
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
  }
};
