import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import BiologicalInformation from '../../screens/BiologicalInformation/BiologicalInformation';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('BiologicalInformation', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`should match a snapshot`, () => {
    const tree = renderer.create(<BiologicalInformation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
