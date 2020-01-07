import { searchAllSymptoms } from './searchAllSymptoms';

const baseUrl = 'https://triage-ex.herokuapp.com';

describe('searchAllSymptoms', () => {
  const searchTerm = 'stomach';
  const url = `${baseUrl}/api/v1/symptoms?search=${searchTerm}`;
  const mockResponse = {
    data: [
      {
        common_name: 'Stomach pain',
        id: 's_13',
        location: 'abdomen',
        name: 'Abdominal pain',
        sex_filter: 'both'
      },
      {
        common_name: 'Burning or gnawing stomach pain',
        id: 's_1802',
        location: 'abdomen',
        name: 'Abdominal pain, burning or gnawing',
        sex_filter: 'both'
      },
      {
        common_name: 'Colic stomach pain',
        id: 's_1848',
        location: 'abdomen',
        name: 'Abdominal pain, colicky',
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
    searchAllSymptoms(searchTerm);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data array when searchAllSymptoms is called', () => {
    expect(searchAllSymptoms(searchTerm)).resolves.toEqual(mockResponse);
  });

  it('should return an error if searchAllSymptoms property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(searchAllSymptoms(searchTerm)).rejects.toEqual(
      Error(
        `Could not search symptoms by ${searchTerm}, please try again later.`
      )
    );
  });
});
