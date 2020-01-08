import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Body, Card, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Card style={styles.card}>
      <Body style={styles.body}>
        <Feather
          name={checked ? 'x-square' : 'square'}
          size={24}
          color='black'
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>I have read and accept the Terms of Service</Text>
      </Body>
    </Card>
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
