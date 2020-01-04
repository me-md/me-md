import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { doctors } from '../../utils/mockDoctors/mockDoctors';

const height = Dimensions.get('window').height;

export default function DoctorsScreen({ navigation }) {
  const nearbyPractices = doctors.map(doctor => {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={styles.doctorName}>{doctor.practice.name}</Text>
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
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Doctors and Specialists Near You:</Text>
        {/* <Text style={styles.title}>Near You:</Text> */}
        <ScrollView style={styles.doctorsContainer}>
          {nearbyPractices}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: height * 0.075
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    marginTop: height * 0.02
  },
  doctorsContainer: {
    marginLeft: height * 0.025,
    marginRight: height * 0.025,
    width: '95%'
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
