import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import EmailScreen from '../../screens/EmailScreen/EmailScreen';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));



describe('EmailScreen', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it.skip(`should match a snapshot`, () => {
    const mockNavigation = {

      state: {
        params: {
          location: {
            lat: 121,
            long: 25
          },
          report: {
            id: 1,
            age: 22
          },
          stateAbbreviation: 'CO'
        }
      }
    };

    const tree = renderer.create(<EmailScreen navigation={mockNavigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
