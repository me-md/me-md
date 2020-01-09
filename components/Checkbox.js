import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Body, Card, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Checkbox({ changeButton }) {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        changeButton(!checked);
        setChecked(!checked);
      }}
    >
      <Card style={styles.card}>
        <Body style={styles.body}>
          <Feather
            name={checked ? 'x-square' : 'square'}
            size={32}
            color='black'
          />
          <Text>I have read and accept the Terms of Service</Text>
        </Body>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 0.2,
    justifyContent: 'space-evenly',
    width: width * 0.92
  },
  body: {
    alignItems: 'center',
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});
