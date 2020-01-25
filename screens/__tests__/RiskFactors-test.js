import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import RiskFactors from '../../screens/RiskFactors/RiskFactors';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading'
}));

describe('RiskFactors', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const mockNavigation = {
      state: {
        params: {
          sex: 'male',
          age: 24,
          stateAbbreviation: 'CO',
          location: {
            lat: 121,
            long: 25
          }
        }
      }
    };

    const tree = renderer
      .create(<RiskFactors navigation={mockNavigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
