import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList
} from 'react-native';
import {
  Accordion,
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Text
} from 'native-base';
import * as Progress from 'react-native-progress';
import { Header } from '../../components/Header';
import { specifyTargetCondition } from '../../utils/helpers/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { getExplanation } from '../../utils/apiCalls/Infermedica/getExplanation';
import { getConditionById } from '../../utils/apiCalls/Conditions/getConditionById';

const height = Dimensions.get('window').height;

export default function SymptomsQA({ navigation }) {
  let {
    userInfo,
    symptomFollowup,
    location,
    stateAbbreviation
  } = navigation.state.params;

  const [explanation, setExplanation] = useState({});
  const [conditionDetails, setConditionDetails] = useState({});
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    getResults();
    console.log(explanation);
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

  const renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#0960FF',
          width: '100%'
        }}
      >
        <Text style={{ fontWeight: '600', color: '#fff' }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18, color: '#fff' }} name='arrow-up' />
        ) : (
          <Icon style={{ fontSize: 18, color: '#fff' }} name='arrow-down' />
        )}
      </View>
    );
  };
  const renderSupportingContent = item => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          height: expanded ? null : 0,
          overflow: 'hidden'
        }}
      >
        <FlatList
          data={createSupportingEvidence()}
          style={{ padding: height * 0.005 }}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </SafeAreaView>
    );
  };

  const renderConflictingContent = item => {
    return explanation.conflicting_evidence.length ? (
      <SafeAreaView
        style={{
          flex: 1,
          height: expanded ? null : 0,
          overflow: 'hidden'
        }}
      >
        <FlatList
          data={createConflictingEvidence()}
          style={{ padding: height * 0.005 }}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </SafeAreaView>
    ) : (
      <Text>No conflicting evidence</Text>
    );
  };

  const createTopDiagnosis = () => {
    return (
      <Card style={styles.topDiagnosis}>
        <CardItem>
          <Body>
            <Text
              style={styles.conditionName}
            >{`${conditionDetails.data.name} (${conditionDetails.data.common_name})`}</Text>
            <Progress.Bar
              style={{ marginBottom: height * 0.01 }}
              progress={symptomFollowup.conditions[0].probability}
              width={200}
            />
            <Text style={styles.probability}>{`Probablity: ${(
              symptomFollowup.conditions[0].probability * 100
            ).toFixed(0)}%`}</Text>
            <Text
              style={styles.recommendation}
            >{`Recommendation: ${conditionDetails.data.triage_level}. ${conditionDetails.data.hint}`}</Text>
            <View style={styles.btnTextHolder}>
              <Accordion
                dataArray={[
                  {
                    title: 'Supporting Evidence'
                  }
                ]}
                renderHeader={renderHeader}
                renderContent={renderSupportingContent}
                style={styles.accordion}
              />
              <Accordion
                dataArray={[
                  {
                    title: 'Conflicting Evidence'
                  }
                ]}
                renderHeader={renderHeader}
                renderContent={renderConflictingContent}
                style={styles.accordion}
              />
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  };

  const createSupportingEvidence = () => {
    return explanation.supporting_evidence.map((evidence, index) => {
      return { key: `• ${evidence.common_name}` };
    });
  };

  const createConflictingEvidence = () => {
    return explanation.conflicting_evidence.map((evidence, index) => {
      return { key: `• ${evidence.common_name}` };
    });
  };

  const getTopDiagnoses = () => {
    return symptomFollowup.conditions.slice(1, 4).map((condition, index) => {
      return (
        <Card key={index} style={styles.conditionCard}>
          <CardItem>
            <Body>
              <Text
                style={styles.secondaryCondition}
              >{`${condition.name} (${condition.common_name})`}</Text>
              <Progress.Bar
                style={{ marginBottom: height * 0.01 }}
                progress={condition.probability}
                width={200}
              />
              <Text>{`Probability: ${(condition.probability * 100).toFixed(
                0
              )}%`}</Text>
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
        block
        style={styles.button}
        onPress={() =>
          navigation.push('Doctors', {
            location,
            stateAbbreviation,
            userInfo,
            symptomFollowup,
            conditionDetails,
            explanation
          })
        }
      >
        <Text style={styles.buttonText}>FIND DOCTORS</Text>
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
    marginTop: height * 0.02,
    width: '100%'
  },
  conditionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: height * 0.01
  },
  recommendation: {
    marginTop: height * 0.01
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
  secondaryCondition: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: height * 0.01
  },
  topDiagnosis: {
    flex: 1,
    width: '100%'
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14
  },
  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    marginTop: height * 0.01,
    width: '100%'
  },
  Btn: {
    padding: 10,
    backgroundColor: '#004EFF'
  },
  button: {
    alignSelf: 'center',
    marginBottom: height * 0.05,
    width: '80%'
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
