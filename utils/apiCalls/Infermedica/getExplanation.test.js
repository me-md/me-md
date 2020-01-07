import { getExplanation } from './getExplanation';
import { REACT_APP_ID, REACT_APP_KEY } from 'react-native-dotenv';

const infermedicaUrl = 'https://api.infermedica.com/v2';

describe('getExplanation', () => {
  const mockUserInfo = {
    age: '26',
    evidence: [
      {
        choice_id: 'present',
        id: 's_15',
        initial: 'true'
      },
      {
        choice_id: 'present',
        id: 's_30'
      },
      {
        choice_id: 'present',
        id: 's_102'
      },
      {
        choice_id: 'present',
        id: 's_103'
      },
      {
        choice_id: 'present',
        id: 'p_28'
      },
      {
        choice_id: 'present',
        id: 'p_167'
      },
      {
        choice_id: 'present',
        id: 's_1197'
      },
      {
        choice_id: 'present',
        id: 's_1601'
      },
      {
        choice_id: 'present',
        id: 's_1925'
      },
      {
        choice_id: 'present',
        id: 's_2096'
      }
    ],
    sex: 'female'
  };
  const url = `${infermedicaUrl}/explain`;
  const options = {
    method: 'POST',
    headers: {
      'App-Id': `${REACT_APP_ID}`,
      'App-Key': `${REACT_APP_KEY}`,
      'Content-Type': 'application/json',
      Model: 'infermedica-en'
    },
    body: JSON.stringify(mockUserInfo)
  };
  const mockResponse = {
    conditions: [
      {
        common_name: 'Asthma attack',
        id: 'c_972',
        name: 'Asthma exacerbation',
        probability: 0.9837
      },
      {
        common_name: 'Heart attack',
        id: 'c_140',
        name: 'Myocardial infarction',
        probability: 0.7218
      }
    ],
    extras: {},
    question: {
      extras: {},
      items: [
        {
          choices: [],
          id: 's_1782',
          name: 'Mild'
        },
        {
          choices: [],
          id: 's_1783',
          name: 'Moderate'
        },
        {
          choices: [],
          id: 's_1195',
          name: 'Severe'
        }
      ],
      text: 'How strong is your abdominal pain?',
      type: 'group_single'
    },
    should_stop: true
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
    getExplanation(mockUserInfo);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an object with a conditions array, question object, extras object, and should_stop boolean when getExplanation is called', () => {
    expect(getExplanation(mockUserInfo)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getExplanation property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getExplanation(mockUserInfo)).rejects.toEqual(
      Error(
        "Could not get condition's supporting evidence, please try again later."
      )
    );
  });
});
