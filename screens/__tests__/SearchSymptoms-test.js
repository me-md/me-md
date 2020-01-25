import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import SearchSymptoms from '../../screens/SearchSymptoms/SearchSymptoms';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading'
}));

describe('SearchSymptoms', () => {
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
          },
          presentFactors: [{}, {}, {}]
        }
      }
    };

    const tree = renderer
      .create(<SearchSymptoms navigation={mockNavigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
