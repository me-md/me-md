import React from 'react';
import renderer from 'react-test-renderer';

import GroupSingleQ from '../GroupSingleQ';

it(`should render correctly`, () => {
  const mockAnswerQuestion = jest.fn();
  const mockQuestion = {
    question: {
      text: 'Where\'s Rachel?!?',
      items: [
        {
          id: 0,
          choices: [
            {
              label: 'Yes',
              id: 'present'
            },
            {
              label: 'No',
              id: 'absent'
            },
            {
              label: 'unknown',
              id: 'Don\'t Know'
            }
          ]
        },

      ]
    }
  }

  const tree = renderer.create(<GroupSingleQ question={mockQuestion} answerQuestion={mockAnswerQuestion} />).toJSON();

  expect(tree).toMatchSnapshot();
});