// import { MAPQUEST_KEY } from 'react-native-dotenv';
import Config from 'react-native-config';

const mapquestDirectionsUrl = 'http://www.mapquestapi.com/directions/v2/route';

export const getDistanceToDoctor = async (
  userLatitude,
  userLongitude,
  doctorLatitude,
  doctorLongitude
) => {
  const response = await fetch(
    `${mapquestDirectionsUrl}?key=${Config.MAPQUEST_KEY}&from=${userLatitude},${userLongitude}&to=${doctorLatitude},${doctorLongitude}`
  );
  if (!response.ok) {
    throw new Error(
      'Could not get distance to doctor, please try again later.'
    );
  }
  const data = await response.json();

  return data;
};
