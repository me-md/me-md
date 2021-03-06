import React, { useState, useEffect, Fragment } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Body, Button, Card, Text } from 'native-base';
import { AntDesign, Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function GroupMultipleQ({ question, answerQuestion }) {
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
      <Card key={cardIndex} style={styles.questionCardItem}>
        <Body style={styles.body}>
          <Text style={styles.questionText}>{item.name}</Text>
          <View style={styles.checkboxes}>
            {item.choices.map((choice, index) => {
              switch (choice.label) {
                case 'Yes':
                  return (
                    <View style={styles.choice} key={index}>
                      <Text style={styles.choiceText}>Yes</Text>
                      <AntDesign
                        key={index}
                        name={
                          checkWho[cardIndex] === choice.id
                            ? 'checkcircle'
                            : 'checkcircleo'
                        }
                        id={choice.id}
                        size={32}
                        color='green'
                        onPress={() => {
                          handlePress(choice.id, cardIndex);
                        }}
                      />
                    </View>
                  );
                case 'No':
                  return (
                    <View style={styles.choice} key={index}>
                      <Text style={styles.choiceText}>No</Text>
                      <AntDesign
                        key={index}
                        name={
                          checkWho[cardIndex] === choice.id
                            ? 'closecircle'
                            : 'closecircleo'
                        }
                        id={choice.id}
                        size={32}
                        color='red'
                        onPress={() => {
                          handlePress(choice.id, cardIndex);
                        }}
                      />
                    </View>
                  );
                default:
                  <></>;
              }
            })}
          </View>
        </Body>
      </Card>
    );
  });

  const handlePress = (id, index) => {
    let IDs = [...checkWho];
    IDs[index] = id;
    setCheckWho(IDs);
    console.log(checkWho)
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
        <Text style={styles.helperText}>Select all that apply or leave blank if unsure:</Text>
        {questions}
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
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    flex: 0.2,
    marginBottom: height * 0.01,
    marginTop: height * 0.01
  },
  choice: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  choiceText: {
    marginRight: width * 0.02
  },
  helperText: {
    width: width * 0.7
  },
  questionText: {
    alignSelf: 'flex-start',
    fontSize: width * 0.037,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    padding: 0
  },
  questionTextHeader: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
    padding: 0
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
    marginTop: height * 0.05,
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
