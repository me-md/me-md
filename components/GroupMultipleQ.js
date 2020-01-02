import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Card, CardItem, Input, Item } from 'native-base';
import { CheckBox } from 'react-native-elements';

const height = Dimensions.get('window').height;

export default function GroupMultipleQ({ question }) {
  return (
    <Card id={question.question.items[0].id} style={styles.questionCard}>
      <Body>
        <Text style={styles.questionText}>{question.question.text}</Text>
        <CardItem style={styles.questionCardItem}>
          <Body>
            <Text style={styles.questionText}>
              {question.question.items[0].name}
            </Text>
            <View style={styles.checkboxes}>
              <CheckBox
                center
                id={question.question.items[0].choices[0].id}
                title={
                  <Text>{question.question.items[0].choices[0].label}</Text>
                }
                // checked={}
                // onPress={}
              ></CheckBox>
              <CheckBox
                center
                id={question.question.items[0].choices[1].id}
                title={
                  <Text>{question.question.items[0].choices[1].label}</Text>
                }
                // checked={}
                // onPress={}
              ></CheckBox>
              <CheckBox
                center
                id={question.question.items[0].choices[2].id}
                title={
                  <Text>{question.question.items[0].choices[2].label}</Text>
                }
                // checked={}
                // onPress={}
              ></CheckBox>
            </View>
          </Body>
        </CardItem>
        <CardItem style={styles.questionCardItem}>
          <Body>
            <Text style={styles.questionText}>
              {question.question.items[1].name}
            </Text>
            <View style={styles.checkboxes}>
              <CheckBox
                center
                id={question.question.items[1].choices[0].id}
                title={
                  <Text>{question.question.items[1].choices[0].label}</Text>
                }
                // checked={}
                // onPress={}
              ></CheckBox>
              <CheckBox
                center
                id={question.question.items[1].choices[1].id}
                title={
                  <Text>{question.question.items[1].choices[1].label}</Text>
                }
                // checked={}
                // onPress={}
              ></CheckBox>
              <CheckBox
                center
                id={question.question.items[1].choices[2].id}
                title={
                  <Text>{question.question.items[1].choices[2].label}</Text>
                }
                // checked={}
                // onPress={}
              ></CheckBox>
            </View>
          </Body>
        </CardItem>
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
