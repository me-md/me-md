import { REACT_APP_ID, REACT_APP_KEY, MAPQUEST_KEY } from 'react-native-dotenv';

const keys = TRAVIS ? {} : {
  REACT_APP_ID,
  REACT_APP_KEY,
  MAPQUEST_KEY
};

export default keys