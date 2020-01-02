import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromBottom } from 'react-navigation-transitions';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen/TermsAndConditionsScreen';
import BiologicalInformation from '../screens/BiologicalInformation/BiologicalInformation';
import SelectAge from '../screens/SelectAge/SelectAge';
import LocationScreen from '../screens/LocationScreen/LocationScreen';
import RiskFactors from '../screens/RiskFactors/RiskFactors';
import SearchSymptoms from '../screens/SearchSymptoms/SearchSymptoms';
import SymptomsQA from '../screens/SymptomsQA/SymptomsQA';

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    TermsAndConditions: TermsAndConditionsScreen,
    BiologicalInformation: BiologicalInformation,
    SelectAge: SelectAge,
    Location: LocationScreen,
    RiskFactors: RiskFactors,
    SearchSymptoms: SearchSymptoms,
    SymptomsQA
  },
  {
    initialRouteName: 'SymptomsQA',
    transitionConfig: () => fromBottom(),
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export const AppContainer = createAppContainer(RootStack);
