import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromBottom } from 'react-navigation-transitions';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen/TermsAndConditionsScreen';
import BiologicalInformation from '../screens/BiologicalInformation/BiologicalInformation';
import SelectAge from '../screens/SelectAge/SelectAge';
import LocationScreen from '../screens/LocationScreen/LocationScreen';
import SearchSymptoms from '../screens/SearchSymptoms/SearchSymptoms';

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    TermsAndConditions: TermsAndConditionsScreen,
    BiologicalInformation: BiologicalInformation,
    SelectAge: SelectAge,
    LocationScreen: LocationScreen,
  },
  {
    initialRouteName: 'Welcome',
    transitionConfig: () => fromBottom(1500),
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export const AppContainer = createAppContainer(RootStack);
