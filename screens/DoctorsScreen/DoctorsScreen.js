import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Body, Card, CardItem } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { doctors } from '../../utils/mockDoctors/mockDoctors';

const height = Dimensions.get('window').height;

export default function DoctorsScreen({ navigation }) {
  const nearbyPractices = doctors.map(doctor => {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>{doctor.practice.name}</Text>
            <Text>Phone Number</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              {doctor.practice.street}. {doctor.practice.street2}
            </Text>
            <Text>
              {doctor.practice.city}, {doctor.practice.state}{' '}
              {doctor.practice.zip}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  });

  return (
    <View>
      <Header />
      {nearbyPractices}
    </View>
  );
}

const styles = StyleSheet.create({});
