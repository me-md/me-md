import React from 'react';
import renderer from 'react-test-renderer';

import SingleQ from '../SingleQ';

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

  const tree = renderer.create(<SingleQ question={mockQuestion} answerQuestion={mockAnswerQuestion} />).toJSON();

  expect(tree).toMatchSnapshot();
});