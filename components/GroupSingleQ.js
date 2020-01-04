import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';

const height = Dimensions.get('window').height;

export default function GroupSingleQ({ question, answerQuestion }) {

  const [checkWho, setCheckWho] = useState([undefined, undefined, undefined]);

  const questions = question.question.items.map((item, questionIndex) => {
    return <CardItem key={questionIndex} style={styles.questionCardItem}>
      <Body>
        <Text style={styles.questionText}>
          {item.name}
        </Text>
        <View style={styles.checkboxes}>
          {item.choices.map((choice, checkBoxIndex) => {
            console.log(checkWho)
            return <CheckBox
              key={checkBoxIndex}
              center
              id={choice.id}
              title={
                <Text>{choice.label}</Text>
              }
              checked={checkWho[questionIndex] === choice.id}
              onPress={() => handlePress(choice.id, questionIndex)}
            ></CheckBox>
          })}
        </View>
      </Body>
    </CardItem>
  })

  const handlePress = (id, index) => {
    let IDs = [...checkWho];
    IDs[index] = id;
    setCheckWho(IDs)
  }

  const handleSubmit = () => {
    const response = question.question.items.map((item, index) => {
      return {
        id: item.id,
        choice_id: checkWho[index]
      }
    })
    console.log('response', response)
    answerQuestion(response);
  }

  return (
    <Card id={question.question.items[0].id} style={styles.questionCard}>
      <Body>
        <Text style={styles.questionText}>{question.question.text}</Text>
        {questions}
        <Button
          onPress={() => handleSubmit()}
        >
          <Text>Submit</Text>
        </Button>
      </Body>
    </Card>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    flex: 0.65,
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
