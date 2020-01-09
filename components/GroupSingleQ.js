import React, { useState, Fragment } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Body, Button, Card, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function GroupSingleQ({ question, answerQuestion }) {
  const [checkWho, setCheckWho] = useState([]);

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
                    <Fragment>
                      <Text>Yes</Text>
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
                    </Fragment>
                  );
                case 'No':
                  return (
                    <Fragment>
                      <Text>No</Text>
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
                    </Fragment>
                  );
                case `Don't know`:
                  return (
                    <Fragment>
                      <Text>Unsure</Text>
                      <AntDesign
                        key={index}
                        name={
                          checkWho[cardIndex] === choice.id
                            ? 'questioncircle'
                            : 'questioncircleo'
                        }
                        id={choice.id}
                        size={32}
                        color='black'
                        onPress={() => {
                          handlePress(choice.id, cardIndex);
                        }}
                      />
                    </Fragment>
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
        {questions}
        {checkWho.length === question.question.items.length ? (
          <Button style={styles.button} block onPress={() => handleSubmit()}>
            <Text>SUBMIT</Text>
          </Button>
        ) : (
          <Button style={styles.button} disabled block>
            <Text>SUBMIT</Text>
          </Button>
        )}
      </Body>
    </Card>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
    padding: height * 0.02,
    width: width * 0.8
  },
  body: {
    padding: height * 0.01
  },
  questionCardItem: {
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
    alignSelf: 'center',
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
    width: width * 0.6
  }
});
