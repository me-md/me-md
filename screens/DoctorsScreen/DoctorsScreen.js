import React, { useState, useEffect, Fragment } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Picker,
  StyleSheet,
  View
} from 'react-native';
import { Body, Button, Card, CardItem, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { compileReport, formatPhoneNumber } from '../../utils/helpers/helpers';
import { isLoaded, isLoading } from 'expo-font';
import { getDistanceToDoctor } from '../../utils/apiCalls/DistanceToDoctor/getDistanceToDoctor';
import { getAllProviders } from '../../utils/apiCalls/DoctorsAndProviders/getAllProviders';
import { getDoctorsByLocation } from '../../utils/apiCalls/DoctorsAndProviders/getDoctorsByLocation';
import { getDoctorsForProviderByLocation } from '../../utils/apiCalls/DoctorsAndProviders/getDoctorsForProviderByLocation';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
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
    return (
      <Card key={index}>
        <CardItem>
          <Body>
            <Text style={styles.doctorName}>{doctor.practice.name}</Text>
            <Text>{formatPhoneNumber(doctor.practice.phone)}</Text>
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

  const handleChange = async itemValue => {
    setLoading(true);
    setCurrentProvider(itemValue);
    if (itemValue !== 'none') {
      const doctors = await getDoctorsForProviderByLocation(
        stateAbbreviation,
        itemValue
      );
      setDoctors(doctors);
      setLoading(false);
    } else {
      getDoctorsForLocation();
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Doctors and Specialists Near You</Text>
        {allProviders.length ? (
          <Fragment>
            <Picker
              block
              prompt={'Select insurance provider'}
              mode={'dialog'}
              selectedValue={currentProvider}
              style={styles.picker}
              onValueChange={itemValue => handleChange(itemValue)}
            >
              <Picker.Item
                label={'Select an insurance provider'}
                value={'none'}
                key={'placeholder'}
              />
              {displayProviders}
            </Picker>
            {loading ? (
              <View style={styles.horizontal}>
                <ActivityIndicator size='large' color='#0000ff' />
              </View>
            ) : (
              <Fragment>
                <ScrollView block style={styles.doctorsContainer}>
                  {nearbyPractices.length > 0 && !loading ? (
                    nearbyPractices
                  ) : (
                    <View style={styles.noDoctorsContainer}>
                      <Text
                        style={styles.noDoctors}
                      >{`There are currently no doctors in ${stateAbbreviation} for this insurance provider.`}</Text>
                    </View>
                  )}
                </ScrollView>
                <Button
                  block
                  style={styles.button}
                  onPress={() =>
                    navigation.push('Email', {
                      location,
                      stateAbbreviation,
                      report
                    })
                  }
                >
                  <Text style={styles.buttonText}>Email Report</Text>
                </Button>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <View style={styles.horizontal}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: height * 0.05
  },
  horizontal: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: height * 0.2
  },
  contentContainer: {
    alignItems: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: height * 0.02,
    textAlign: 'center'
  },
  doctorsContainer: {
    height: height * 0.4,
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
    marginTop: height * 0.04,
    width: '75%'
  },
  buttonText: {
    fontSize: 18
  },
  picker: {
    height: height * 0.22,
    width: '100%'
  },
  noDoctorsContainer: {
    marginTop: height * 0.1,
    padding: height * 0.02,
    textAlign: 'center'
  },
  noDoctors: {
    fontSize: 24
  }
});
