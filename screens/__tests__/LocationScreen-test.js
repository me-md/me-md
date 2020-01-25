import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import LocationScreen from '../../screens/LocationScreen/LocationScreen';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading'
}));

describe('LocationScreen', () => {
  jest.useFakeTimers();

  global.navigator = {
    geolocation: {
      clearWatch: jest.fn(),
      getCurrentPosition: jest.fn((success, failure, options) => {
        success({
          coords: {
            longitude: 60,
            latitude: 60
          }
        });
      }),
      stopObserving: jest.fn(),
      watchPosition: jest.fn()
    }
  };

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it.skip(`should match a snapshot`, () => {
    const mockNavigation = {
      state: {
        params: {
          sex: 'male',
          age: 22
        }
      }
    };

    const tree = renderer
      .create(<LocationScreen navigation={mockNavigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
