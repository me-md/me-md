import { getCommonRiskFactors } from './getCommonRiskFactors';

const baseUrl = 'https://triage-ex.herokuapp.com';

describe('getCommonRiskFactors', () => {
  const url = `${baseUrl}/api/v1/risks`;
  const mockResponse = {
    data: [
      {
        common_name: 'Obesity',
        id: 'p_7',
        location: 'undefined',
        name: 'BMI above 30',
        question: 'Are you overweight?',
        sex_filter: 'both'
      },
      {
        common_name: 'Diabetes',
        id: 'p_8',
        location: 'undefined',
        name: 'Diabetes',
        question: 'Do you have Diabetes?',
        sex_filter: 'both'
      },
      {
        common_name: 'High cholesterol',
        id: 'p_10',
        location: 'undefined',
        name: 'High cholesterol',
        question: 'Do you have high cholesterol?',
        sex_filter: 'both'
      },
      {
        common_name: 'High blood pressure',
        id: 'p_9',
        location: 'undefined',
        name: 'Hypertension',
        question: 'Do you have high blood pressure?',
        sex_filter: 'both'
      },
      {
        common_name: 'Smoking',
        id: 'p_28',
        location: 'undefined',
        name: 'Smoking',
        question: 'Are you a tobacco user?',
        sex_filter: 'both'
      }
    ]
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
    getCommonRiskFactors();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data array when getCommonRiskFactors is called', () => {
    expect(getCommonRiskFactors()).resolves.toEqual(mockResponse);
  });

  it('should return an error if getCommonRiskFactors property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getCommonRiskFactors()).rejects.toEqual(
      Error(`Could not retreive common risk factors, please try again later.`)
    );
  });
});
