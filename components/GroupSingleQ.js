import React, { useState, Fragment } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Body, Button, Card, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const height = Dimensions.get('window').height;

export default function GroupSingleQ({ question, answerQuestion }) {
  const [checkWho, setCheckWho] = useState([]);

  const questions = question.question.items.map((item, cardIndex) => {
    return (
      <Card key={cardIndex} style={styles.questionCardItem}>
        <Body>
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
    console.log('id', id);
    console.log('index', index);
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
      <Body>
        <Text style={styles.questionText}>{question.question.text}</Text>
        {questions}
        {checkWho.length === question.question.items.length ? (
          <Button block onPress={() => handleSubmit()}>
            <Text>Submit</Text>
          </Button>
        ) : (
          <Button disabled block>
            <Text>Submit</Text>
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
    width: '80%'
  },
  questionCardItem: {
    height: height * 0.15
  },
  questionText: {
    alignSelf: 'flex-start',
    flex: 1,
    fontSize: 16,
    padding: 0
  },
  checkboxes: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    fontSize: 12,
    padding: 0
  }
});
