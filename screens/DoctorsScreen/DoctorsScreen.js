import React, { useState, useEffect, Fragment } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Picker,
  StyleSheet,
  View
} from 'react-native';
import {
  Accordion,
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Text
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import {
  compileReport,
  formatPhoneNumber,
  shortenCoordinates
} from '../../utils/helpers/helpers';
import { getAllProviders } from '../../utils/apiCalls/DoctorsAndProviders/getAllProviders';
import { getDoctorsByLocation } from '../../utils/apiCalls/DoctorsAndProviders/getDoctorsByLocation';
import { getDoctorsForProviderByLocation } from '../../utils/apiCalls/DoctorsAndProviders/getDoctorsForProviderByLocation';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

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

  const report = compileReport(
    location,
    stateAbbreviation,
    userInfo,
    symptomFollowup,
    conditionDetails,
    explanation,
    doctors
  );

  const renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#0960FF',
          width: '100%'
        }}
      >
        <Text style={{ fontWeight: '700', color: '#fff' }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 24, color: '#fff' }} name='arrow-up' />
        ) : (
          <Icon style={{ fontSize: 24, color: '#fff' }} name='arrow-down' />
        )}
      </View>
    );
  };
  const renderContent = item => {
    return (
      <Text
        style={{
          backgroundColor: '#fff',
          padding: 10,
          fontStyle: 'italic'
        }}
      >
        {item.content}
      </Text>
    );
  };

  const nearbyPractices = doctors.map((doctor, index) => {
    return (
      <Card key={index} style={styles.doctorCard}>
        <CardItem>
          <Body>
            <Accordion
              dataArray={[
                { title: doctor.practice.name, content: doctor.profile.bio }
              ]}
              renderHeader={renderHeader}
              renderContent={renderContent}
              style={styles.accordion}
            />
            <Text>{formatPhoneNumber(doctor.practice.phone)}</Text>
            <Text>{doctor.practice.distance}</Text>
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
    const { coords } = location;
    const { latitude, longitude } = coords;
    const lat = latitude.toFixed(4);
    const lon = longitude.toFixed(4);
    let state = stateAbbreviation.toLowerCase();
    setLoading(true);
    setCurrentProvider(itemValue);
    if (itemValue !== 'none') {
      const doctors = await getDoctorsForProviderByLocation(
        state,
        itemValue,
        lat,
        lon
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
                <ActivityIndicator size='large' color='#004EFF' />
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
                  rounded
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
                  <Ionicons
                    name='ios-send'
                    style={styles.icon}
                    size={26}
                    color='white'
                  />
                </Button>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <View style={styles.horizontal}>
            <ActivityIndicator size='large' color='#004EFF' />
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
    alignItems: 'center',
    height: height * 0.07,
    justifyContent: 'space-around',
    marginTop: height * 0.05,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: width * 0.65
  },
  buttonText: {
    fontSize: height * 0.025,
    fontWeight: 'bold'
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
  },
  accordion: {
    alignSelf: 'center',
    marginBottom: height * 0.01,
    width: width * 0.87
  },
  doctorCard: {
    alignSelf: 'center',
    marginBottom: height * 0.01,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: '95%'
  },
  icon: {
    marginRight: height * 0.02
  }
});
