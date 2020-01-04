import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';

const height = Dimensions.get('window').height;

export default function SingleQ({ question, answerQuestion }) {

  const [checkWho, setCheckWho] = useState([]);

  useEffect(() => { console.log(checkWho) }, [checkWho])

  const handleSubmit = () => {
    answerQuestion([{
      id: question.question.items[0].id,
      choice_id: checkWho
    }]);
    setCheckWho([])
  }

  return (
    <Card id={question.question.items[0].id} style={styles.questionCard}>
      <CardItem style={styles.questionCardItem}>
        <Body>
          <Text style={styles.questionText}>{question.question.text}</Text>
          <View style={styles.checkboxes}>
            <CheckBox
              center
              id={question.question.items[0].choices[0].id}
              title={<Text>{question.question.items[0].choices[0].label}</Text>}
              checked={checkWho === question.question.items[0].choices[0].id}
              onPress={() => { setCheckWho(question.question.items[0].choices[0].id) }}
            ></CheckBox>
            <CheckBox
              center
              id={question.question.items[0].choices[1].id}
              title={<Text>{question.question.items[0].choices[1].label}</Text>}
              checked={checkWho === question.question.items[0].choices[1].id}
              onPress={() => { setCheckWho(question.question.items[0].choices[1].id) }}
            ></CheckBox>
            <CheckBox
              center
              id={question.question.items[0].choices[2].id}
              title={<Text>{question.question.items[0].choices[2].label}</Text>}
              checked={checkWho === question.question.items[0].choices[2].id}
              onPress={() => { setCheckWho(question.question.items[0].choices[2].id) }}
            ></CheckBox>
            <Button
              block
              onPress={() => handleSubmit()}
            >
              <Text>Submit</Text>
            </Button>
          </View>
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
