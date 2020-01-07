import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Card, CardItem, Item, Input } from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { getCommonRiskFactors } from '../../utils/apiCalls/apiCalls';

const height = Dimensions.get('window').height;

export default function RiskFactors({ navigation }) {
  const { age, location, sex, stateAbbreviation } = navigation.state.params;
  const [factors, setFactors] = useState([]);
  const [presentFactors, setPresentFactors] = useState([
    {
      id: 'p_7',
      present: false
    },
    {
      id: 'p_8',
      present: false
    },
    {
      id: 'p_9',
      present: false
    },
    {
      id: 'p_10',
      present: false
    },
    {
      id: 'p_28',
      present: false
    }
  ]);

  const getRiskFactors = async () => {
    const riskFactors = await getCommonRiskFactors();
    setFactors(riskFactors.data);
  };

  const findRiskToUpdate = id => {
    let found = presentFactors.findIndex(factor => factor.id == id);
    setPresentFactors([
      ...presentFactors,
      (presentFactors[found].present = !presentFactors[found].present)
    ]);
  };

  const riskFactorAnswers = factors.map(factor => {
    let foundIndex = presentFactors.findIndex(
      question => factor.id == question.id
    );
    return (
      <Card key={factor.id} style={styles.riskFactorCard}>
        <View style={styles.checkboxes}>
          <Text style={styles.questionText}>{factor.question}</Text>
          <AntDesign
            name={presentFactors[foundIndex].present ? 'checkcircle' : 'pluscircleo'}
            id={factor.id}
            color={presentFactors[foundIndex].present ? 'green' : 'black'}
            style={styles.add}
            size={26}
            onPress={() => {
              findRiskToUpdate(factor.id);
            }}
          />
        </View>
      </Card>
    );
  });

  useEffect(() => {
    getRiskFactors();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.screenContainer}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.goBack()}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Common Risk Factors</Text>
            {riskFactorAnswers}
          </View>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() =>
              navigation.push('SearchSymptoms', {
                age,
                location,
                sex,
                presentFactors,
                stateAbbreviation
              })
            }
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screenContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: height * 0.06,
    marginTop: height * 0.06
  },
  gradientBackground: {
    flex: 1
  },
  contentContainer: {
    alignContent: 'space-between',
    alignItems: 'center',
    flex: 0.95,
    justifyContent: 'space-around',
    marginBottom: height * 0.01,
    marginTop: height * 0.015,
    width: '100%'
  },
  header: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: height * 0.001,
    marginTop: height * 0.001
  },
  questionText: {
    alignSelf: 'flex-start',
    fontSize: 14
  },
  riskFactorCard: {
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    flex: 0.15,
    marginBottom: height * 0.001,
    marginTop: height * 0.001,
    width: '75%'
  },
  checkboxes: {
    alignContent: 'center',
    flexDirection: 'row',
    fontSize: 12,
    justifyContent: 'space-between',
    padding: 10,
    width: '100%'
  }
});
