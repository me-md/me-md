import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import DoctorsScreen from '../../screens/DoctorsScreen/DoctorsScreen';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('DoctorsScreen', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const mockNavigation = {

      state: {
        params: {
          location: {
            lat: 121,
            long: 25
          },
          userInfo: {
            id: 1,
            age: 22
          },
          stateAbbreviation: 'CO',
          symptomFollowup: {

          },
          conditionDetails: {

          },
          explanation: {

          }
        }
      }
    };

    const tree = renderer.create(<DoctorsScreen navigation={mockNavigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
