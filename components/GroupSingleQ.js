import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Body, Button, Card, Text } from 'native-base';
import { AntDesign, Feather } from '@expo/vector-icons';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function GroupSingleQ({ question, answerQuestion }) {
  const [checkWho, setCheckWho] = useState([]);

  useEffect(() => {
    let initialCheckWho = [];
    question.question.items.forEach(() => {
      initialCheckWho.push('unknown')
    });
    setCheckWho(initialCheckWho)
  }, [question]);

  const questions = question.question.items.map((item, cardIndex) => {
    return (
      {
        label: item.name,
        value: cardIndex
      }
    );
  });

  const handlePress = (id, index) => {
    let IDs;
    IDs = [...checkWho];
    if (IDs[index] === id) {
      IDs = question.question.items.map(id => {
        return (id = 'unknown');
      });
      setCheckWho(IDs);
    } else {
      IDs = question.question.items.map(id => {
        return (id = 'absent');
      });
      IDs[index] = id;
      setCheckWho(IDs);
    }
  };

  const handleSubmit = () => {
    const response = question.question.items.map((item, index) => {
      return {
        id: item.id,
        choice_id: checkWho[index]
      };
    });
    setCheckWho([]);
    answerQuestion(response);
  };

  return (
    <Card id={question.question.items[0].id} style={styles.questionCard}>
      <Body style={styles.body}>
        <Text style={styles.questionTextHeader}>{question.question.text}</Text>
        <Text style={styles.helperText}>Select one or leave blank if unsure:</Text>
        <RadioForm
          formHorizontal={false}
          labelHorizontal={true}
          style={styles.radio}>
          {
            questions.map((question, i) => (
              <RadioButton labelHorizontal={true} key={i} >
                <RadioButtonInput
                  obj={question}
                  index={i}
                  isSelected={checkWho[i] === 'present'}
                  onPress={(value) => { handlePress('present', value) }}
                  borderWidth={1}
                  buttonInnerColor={'#2196f3'}
                  buttonOuterColor={checkWho[i] === 'present' ? '#2196f3' : '#000'}
                  buttonSize={20}
                  buttonOuterSize={30}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={question}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => { handlePress('present', value) }}
                  labelStyle={{ fontSize: 16, maxWidth: width * 0.5, color: checkWho[i] === 'present' ? '#2196f3' : 'black' }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))}
        </RadioForm>
        <Button
          rounded
          style={styles.button}
          block
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonText}>Continue</Text>
          <Feather
            name='arrow-right-circle'
            size={30}
            color='white'
            style={styles.icon}
          />
        </Button>
      </Body>
    </Card>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: '#f7f7f7',
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
    padding: height * 0.02,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: width * 0.8
  },
  body: {
    padding: height * 0.01
  },
  questionCardItem: {
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    height: height * 0.15,
    marginBottom: height * 0.01,
    marginTop: height * 0.01
  },
  questionText: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
    padding: 0
  },
  questionTextHeader: {
    alignSelf: 'flex-start',
    flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
    padding: 0
  },
  radio: {
    marginTop: height * 0.02
  },
  checkboxes: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 12,
    justifyContent: 'space-around',
    marginBottom: height * 0.02,
    padding: 0,
    width: width * 0.7
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    height: height * 0.07,
    justifyContent: 'space-around',
    marginTop: height * 0.02,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: width * 0.65
  },
  buttonText: {
    fontSize: height * 0.025,
    fontWeight: 'bold'
  },
  icon: {
    marginRight: height * 0.02
  }
});
