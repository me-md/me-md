import React, { useState, useEffect } from 'react';
import { Dimensions, Picker, StyleSheet, Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import {
  getDoctorsByLocation,
  getAllProviders,
  getDoctorsForProviderByLocation,
  getDistanceToDoctor
} from '../../utils/apiCalls/apiCalls';
import { compileReport } from '../../utils/helpers/helpers';

const height = Dimensions.get('window').height;

export default function DoctorsScreen({ navigation }) {
  const {
    location,
    stateAbbreviation,
    userInfo,
    symptomFollowup,
    conditionDetails,
    explanation
  } = navigation.state.params;

  const [allProviders, setAllProviders] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [currentProvider, setCurrentProvider] = useState({});
  const [displayProviders, setDisplayProviders] = useState([]);

  useEffect(() => {
    getProviders();
    getDoctorsForLocation();
  }, []);

  useEffect(() => {
    const displayProviders = allProviders.map((provider, index) => {
      return (
        <Picker.Item label={provider.name} value={provider.uid} key={index} />
      );
    });
    setDisplayProviders(displayProviders);
  }, [allProviders]);

  const getProviders = async () => {
    let providers = await getAllProviders();
    setAllProviders(providers);
  };

  const getDoctorsForLocation = async () => {
    let doctorsInLocation = await getDoctorsByLocation(
      stateAbbreviation.toLowerCase()
    );
    setDoctors(doctorsInLocation);
  };

  const getDistanceToDoc = async (lat, long) => {
    const { coords } = location;
    const { latitude, longitude } = coords;
    let distance = await getDistanceToDoctor(latitude, longitude, lat, long);
    return distance.route.distance;
  };

  const doctorDistance = async doctor => {
    let distance = await getDistanceToDoc(
      doctor.practice.lat,
      doctor.practice.lon
    );
    return distance;
  };

  const report = compileReport(
    location,
    stateAbbreviation,
    userInfo,
    symptomFollowup,
    conditionDetails,
    explanation,
    doctors
  );

  const nearbyPractices = doctors.map((doctor, index) => {
    // let distance = await doctorDistance(doctor);
    // console.log(typeof distance);
    return (
      <Card key={index}>
        <CardItem>
          <Body>
            <Text style={styles.doctorName}>{doctor.practice.name}</Text>
            <Text>{doctor.practice.phone}</Text>
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
            {/* <Text>{distance}</Text> */}
          </Body>
        </CardItem>
      </Card>
    );
  });

  const handleChange = async itemValue => {
    setCurrentProvider(itemValue);
    const doctors = await getDoctorsForProviderByLocation(
      stateAbbreviation,
      currentProvider
    );
    setDoctors(doctors);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Doctors and Specialists Near You:</Text>
        <Picker
          prompt={'Select insurance provider'}
          mode={'dialog'}
          selectedValue={currentProvider}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
        >
          <Picker.Item
            label={'Select an inurance provider'}
            value={'none'}
            key={'placeholder'}
          />
          {displayProviders}
        </Picker>
        <ScrollView style={styles.doctorsContainer}>
          {nearbyPractices}
        </ScrollView>
        <Button
          block
          style={styles.button}
          onPress={() =>
            navigation.navigate('Email', {
              location,
              stateAbbreviation,
              report
            })
          }
        >
          <Text style={styles.buttonText}>Email Report</Text>
        </Button>
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
    flex: 0.5,
    marginLeft: height * 0.025,
    marginRight: height * 0.025,
    width: '95%'
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    alignSelf: 'center',
    marginTop: height * 0.02,
    width: '75%'
  },
  buttonText: {
    fontSize: 18
  },
  picker: {
    flex: 1,
    width: '100%'
  }
});
