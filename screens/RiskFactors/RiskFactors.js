import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Card, CardItem, Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { getCommonRiskFactors } from '../../utils/apiCalls/apiCalls';

const height = Dimensions.get('window').height;

export default function RiskFactors({ navigation }) {
  const { age, location, sex } = navigation.state.params;
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
        <CardItem>
          <Body>
            <Text style={styles.questionText}>{factor.question}</Text>
            <View style={styles.checkboxes}>
              <CheckBox
                center
                id={factor.id}
                title={<Text>Yes</Text>}
                checked={presentFactors[foundIndex].present}
                onPress={() => {
                  findRiskToUpdate(factor.id);
                }}
              ></CheckBox>
            </View>
          </Body>
        </CardItem>
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
            onPress={() => navigation.navigate('Location')}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Common Risk Factors:</Text>
            {riskFactorAnswers}
          </View>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() =>
              navigation.navigate('SearchSymptoms', {
                age,
                location,
                sex,
                present
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
    justifyContent: 'center'
  },
  gradientBackground: {
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    flex: 0.9,
    justifyContent: 'space-evenly',
    marginBottom: height * 0.015,
    marginTop: height * 0.015,
    width: '100%'
  },
  header: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: height * 0.01
  },
  questionText: {
    alignSelf: 'flex-start',
    fontSize: 16
  },
  riskFactorCard: {
    flex: 1,
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
    width: '75%'
  },
  checkboxes: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    fontSize: 14,
    marginTop: height * 0.01
  }
});
