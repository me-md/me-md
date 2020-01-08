import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import Results from '../../screens/Results/Results';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('Results', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it.skip(`should match a snapshot`, () => {

    const mockNavigation = {
      state: {
        params: {
          userInfo: {

          },
          symptomFollowup: {

          },
          location: {
            lat: 121,
            long: 25
          },
          stateAbbreviation: 'CO'
        }
      }
    };

    const tree = renderer.create(<Results navigation={mockNavigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
