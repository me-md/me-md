import { getAllProviders } from './getAllProviders';

const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';

describe('getAllProviders', () => {
  const url = `${doctorsUrl}/providers`;
  const mockResponse = {

          "uid": "cigna-cignaopenaccessplus",
          "name": "CIGNA Open Access Plus",
          "nick_name": "Cigna"
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
    getAllProviders();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object when getAllProviders is called', () => {
    expect(getAllProviders()).resolves.toEqual(mockResponse);
  });

  it('should return an error if getAllProviders property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getAllProviders()).rejects.toEqual(
      Error(
        'Could not get providers, please try again later.'
      )
    );
  });

});
