import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import SelectAge from '../../screens/SelectAge/SelectAge';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('SelectAge', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const mockNavigation = {

      state: {
        params: {
          sex: 'male'
        }
      }
    };

    const tree = renderer.create(<SelectAge navigation={mockNavigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
