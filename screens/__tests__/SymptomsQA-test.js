import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import SymptomsQA from '../../screens/SymptomsQA/SymptomsQA';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading'
}));

describe('SymptomsQA', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const mockNavigation = {
      state: {
        params: {
          cleanedData: {},
          stateAbbreviation: 'CO',
          location: {
            lat: 121,
            long: 25
          }
        }
      }
    };

    // cleanedData, location, stateAbbreviation

    const tree = renderer
      .create(<SymptomsQA navigation={mockNavigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
