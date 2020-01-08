import { Dimensions } from 'react-native';

const width = Dimensions.get('device').width;
const height = Dimensions.get('device').height;

export default dimensions = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
