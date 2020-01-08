import { sendInitialUserSymptoms } from './sendInitialUserSymptoms';
import Config from 'react-native-config';

const infermedicaUrl = 'https://api.infermedica.com/v2';

describe('sendInitialUserSymptoms', () => {
  const url = `${infermedicaUrl}/diagnosis`;
  const mockUserSymptoms = {
    age: '26',
    evidence: [
      {
        choice_id: 'present',
        id: 'p_28'
      },
      {
        choice_id: 'present',
        id: 's_1207',
        initial: 'true'
      },
      {
        choice_id: 'present',
        id: 's_15'
      },
      {
        choice_id: 'present',
        id: 's_1387'
      },
      {
        choice_id: 'present',
        id: 's_1557'
      }
    ],
    sex: 'female'
  };
  const options = {
    method: 'POST',
    headers: {
      'App-Id': `${Config.REACT_APP_ID}`,
      'App-Key': `${Config.REACT_APP_KEY}`,
      'Content-Type': 'application/json',
      Model: 'infermedica-en'
    },
    body: JSON.stringify(mockUserSymptoms)
  };
  const mockResponse = {
    question: {
      type: 'single',
      text: 'Have you had surgery in the past couple weeks?',
      items: [
        {
          id: 'p_47',
          name: 'Recent surgery',
          choices: [
            {
              id: 'present',
              label: 'Yes'
            },
            {
              id: 'absent',
              label: 'No'
            }
          ]
        }
      ],
      extras: {}
    },
    conditions: [],
    extras: {},
    should_stop: false
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch with the correct url', () => {
    sendInitialUserSymptoms(mockUserSymptoms);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an object with a data array when sendInitialUserSymptoms is called', () => {
    expect(sendInitialUserSymptoms(mockUserSymptoms)).resolves.toEqual(
      mockResponse
    );
  });

  it('should return an error if sendInitialUserSymptoms property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(sendInitialUserSymptoms(mockUserSymptoms)).rejects.toEqual(
      Error(
        'Could not get follow up symptom questions, please try again later.'
      )
    );
  });
});
