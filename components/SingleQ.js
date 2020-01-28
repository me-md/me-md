import React, { useState, Fragment } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Body, Button, Card, Text } from 'native-base';
import { AntDesign, Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function SingleQ({ question, answerQuestion }) {
  const [checkWho, setCheckWho] = useState([]);

  const handleSubmit = () => {
    answerQuestion([
      {
        id: question.question.items[0].id,
        choice_id: checkWho
      }
    ]);
    setCheckWho([]);
  };

  const choices = question.question.items[0].choices.map((choice, index) => {
    switch (choice.label) {
      case 'Yes':
        return (
          <View style={styles.choice} key={index}>
            <Text style={styles.choiceText}>Yes</Text>
            <AntDesign
              key={index}
              name={checkWho === choice.id ? 'checkcircle' : 'checkcircleo'}
              id={choice.id}
              style={styles.add}
              size={32}
              color='green'
              onPress={() => {
                setCheckWho(choice.id);
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
              name={checkWho === choice.id ? 'closecircle' : 'closecircleo'}
              id={choice.id}
              style={styles.add}
              size={32}
              color='red'
              onPress={() => {
                setCheckWho(choice.id);
              }}
            />
          </View>
        );
      case `Don't know`:
        return (
          <View style={styles.choice} key={index}>
            <Text style={styles.choiceText}>Unsure</Text>
            <AntDesign
              key={index}
              name={
                checkWho === choice.id ? 'questioncircle' : 'questioncircleo'
              }
              id={choice.id}
              style={styles.add}
              size={32}
              color='black'
              onPress={() => {
                setCheckWho(choice.id);
              }}
            />
          </View>
        );
      default:
        <></>;
    }
  });

  return (
    <Card id={question.question.items[0].id} style={styles.questionCard}>
      <Body style={styles.cardBody}>
        <Text style={styles.questionText}>{question.question.text}</Text>
        <View style={styles.checkboxes}>{choices}</View>
        {checkWho.length ? (
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
        ) : (
            <Button rounded style={styles.button} disabled block>
              <Text style={styles.buttonText}>Continue</Text>
              <Feather
                name='arrow-right-circle'
                size={30}
                color='white'
                style={styles.icon}
              />
            </Button>
          )}
      </Body>
    </Card>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: '#f7f7f7',
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: '80%'
  },
  cardBody: {
    padding: height * 0.02,
    width: '100%'
  },
  questionText: {
    alignSelf: 'flex-start',
    flex: 0.5,
    fontSize: 16,
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
    width: '90%'
  },
  choice: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  choiceText: {
    marginRight: width * 0.02
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    height: height * 0.07,
    justifyContent: 'space-around',
    marginTop: height * 0.01,
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
