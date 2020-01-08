import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('WelcomeScreen', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const tree = renderer.create(<WelcomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
