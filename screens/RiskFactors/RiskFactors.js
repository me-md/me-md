import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Card, CardItem, Item, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { getCommonRiskFactors } from '../../utils/apiCalls/apiCalls';

export default function RiskFactors({ navigation }) {
  const [factors, setFactors] = useState([]);

  const getRiskFactors = async () => {
    const riskFactors = await getCommonRiskFactors();
    setFactors(riskFactors.data);
  };

  const riskFactorAnswers = factors.map((factor, index) => {
    return (
      <Card key={index} style={styles.riskFactorCard}>
        <CardItem>
          <Body>
            <Text style={styles.riskFactorQuestionCheckbox}>
              {factor.question}
            </Text>
            <CheckBox center></CheckBox>
            <CheckBox center></CheckBox>
          </Body>
        </CardItem>
      </Card>
    );
  });

  useEffect(() => {
    getRiskFactors();
  }, []);

  return (
    <View style={styles.riskFactorsContainer}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.childRiskFactorsContainer}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.navigate('LocationScreen')}
          />
          <View style={styles.riskFactorsContentContainer}>
            <Text style={styles.riskFactorsHeader}>Common Risk Factors:</Text>
            {riskFactorAnswers}
          </View>
          <Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() => navigation.navigate('SearchSymptoms')}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  riskFactorsContainer: {
    flex: 1
  },
  childRiskFactorsContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  gradientBackground: {
    flex: 1
  },
  riskFactorsContentContainer: {
    alignItems: 'center',
    flex: 0.75,
    justifyContent: 'space-evenly',
    width: '100%'
  },
  riskFactorsHeader: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold'
  },
  riskFactorQuestionCheckbox: {
    alignSelf: 'flex-start',
    fontSize: 14,
    margin: 10
  },
  riskFactorCard: {
    width: '100%'
  },
  riskFactorsQuestions: {}
});
