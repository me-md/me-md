import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromBottom } from 'react-navigation-transitions';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen/TermsAndConditionsScreen';
import BiologicalInformation from '../screens/BiologicalInformation/BiologicalInformation';
import LocationScreen from '../screens/LocationScreen/LocationScreen';
import SelectAge from '../screens/SelectAge/SelectAge';


const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    TermsAndConditions: TermsAndConditionsScreen
  },
  {
    initialRouteName: 'Welcome',
    transitionConfig: () => fromBottom(),
  }
)

export const AppContainer = createAppContainer(RootStack);
