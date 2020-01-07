import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';

const height = Dimensions.get('window').height;

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
    return (
      <CheckBox
        center
        key={index}
        id={choice.id}
        title={<Text>{choice.label}</Text>}
        checked={checkWho === choice.id}
        onPress={() => {
          setCheckWho(choice.id);
        }}
      ></CheckBox>
    );
  });

  return (
    <Card id={question.question.items[0].id} style={styles.questionCard}>
      <CardItem style={styles.questionCardItem}>
        <Body>
          <Text style={styles.questionText}>{question.question.text}</Text>
          <View style={styles.checkboxes}>{choices}</View>
          {checkWho.length ?
            (<Button block onPress={() => handleSubmit()}>
              <Text>Submit</Text>
            </Button>) :
            (<Button disabled block>
              <Text>Submit</Text>
            </Button>)}
        </Body>
      </CardItem>
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
