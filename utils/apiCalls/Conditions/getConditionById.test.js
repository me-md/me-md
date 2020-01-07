import { getConditionById } from './getConditionById';

const baseUrl = 'https://triage-ex.herokuapp.com';

describe('getConditionById', () => {
  const id = 'c_926';
  const url = `${baseUrl}/api/v1/conditions/${id}`;
  const mockResponse = {
    data: {
      acuteness: 'chronic',
      category: 'Hypertensiology',
      common_name:
        'Cough resulting from reaction to angiotensin-converting enzyme inhibitor drugs',
      hint:
        'Your symptoms may result from used medication. Please report that symptom to your GP.',
      icd10_code: 'R05, T88.7, Y52.4',
      id: 'c_926',
      name: 'ACE inhibitor-induced cough',
      prevalence: 'very_rare',
      severity: 'mild',
      sex_filter: 'both',
      triage_level: 'consultation'
    }
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
    getConditionById(id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object when getConditionById is called', () => {
    expect(getConditionById(id)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getConditionById property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getConditionById(id)).rejects.toEqual(
      Error(
        `Could not retreive condition with id of: ${id}, please try again later.`
      )
    );
  });
});
