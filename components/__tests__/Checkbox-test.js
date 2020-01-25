import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '../Checkbox';

it(`should render correctly`, () => {
  const mockChangeButton = jest.fn();
  
  const tree = renderer.create(<Checkbox changeButton={mockChangeButton} />).toJSON();
  expect(tree).toMatchSnapshot();
});