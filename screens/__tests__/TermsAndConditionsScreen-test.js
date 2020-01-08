import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import TermsAndConditionsScreen from '../../screens/TermsAndConditionsScreen/TermsAndConditionsScreen';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('TermsAndConditionsScreen', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const tree = renderer.create(<TermsAndConditionsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
