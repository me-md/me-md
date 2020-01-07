import {
  getAllSymptoms,
  getSymptomsByLocation,
  searchAllSymptoms,
  getSymptomById,
  getSymptomsWithSexFilter,
  getAllConditions,
  searchAllConditions,
  getConditionById,
  getCommonRiskFactors,
  sendInitialUserSymptoms,
  getExplanation,
  getLatLong,
  getDoctorsByLocation,
  getDoctorsForProviderByLocation,
  getAllProviders,
  getDistanceToDoctor
} from './apiCalls';

const baseUrl = 'https://triage-ex.herokuapp.com';
const infermedicaUrl = 'https://api.infermedica.com/v2';
const mapquestUrl = 'http://www.mapquestapi.com/geocoding/v1';
const mapquestDirectionsUrl = 'http://www.mapquestapi.com/directions/v2/route';
const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';
import { REACT_APP_ID, REACT_APP_KEY, MAPQUEST_KEY } from 'react-native-dotenv';

describe('getAllSymptoms', () => {
  const mockResponse = {
    data: [
      {
        common_name: 'Abdominal guarding',
        id: 's_1558',
        location: 'abdomen',
        name: 'Abdominal guarding',
        sex_filter: 'both'
      },
      {
        common_name: 'Lump in abdomen',
        id: 's_299',
        location: 'abdomen',
        name: 'Abdominal mass',
        sex_filter: 'both'
      },
      {
        common_name:
          'Abdominal mass, after pregnancy or the removal of molar pregnancy',
        id: 's_1293',
        location: 'abdomen',
        name:
          'Abdominal mass, after pregnancy or the removal of molar pregnancy',
        sex_filter: 'female'
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
    const url = `${baseUrl}/api/v1/symptoms`;

    getAllSymptoms();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data array with getAllSymptoms is called', () => {
    expect(getAllSymptoms()).resolves.toEqual(mockResponse);
  });

  it('should return an error if getAllSymptoms property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getAllSymptoms()).rejects.toEqual(
      Error('Could not retrieve symptoms, please try again later.')
    );
  });
});

describe('getSymptomsByLocation', () => {
  const location = 'head';
  const url = `${baseUrl}/api/v1/symptoms?location=${location}`;
  const mockResponse = {
    data: [
      {
        common_name: 'Adenoid face',
        id: 's_1111',
        location: 'head',
        name: 'Adenoid face',
        sex_filter: 'both'
      },
      {
        common_name: 'Lack of sweating on one side of face',
        id: 's_669',
        location: 'head',
        name: 'Anhidrosis, face, unilateral',
        sex_filter: 'both'
      },
      {
        common_name: 'Auscultative fine crackles over the thorax',
        id: 's_857',
        location: 'head',
        name: 'Auscultative fine crackles over the thorax',
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
    getSymptomsByLocation(location);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data array with getSymptomsByLocation is called', () => {
    expect(getSymptomsByLocation(location)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getSymptomsByLocation property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getSymptomsByLocation(location)).rejects.toEqual(
      Error('Could not retrieve symptoms by head, please try again later.')
    );
  });
});

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

  it('should return an object with a data array with searchAllSymptoms is called', () => {
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

describe('getSymptomById', () => {
  const id = 's_13';
  const url = `${baseUrl}/api/v1/symptoms/${id}`;
  const mockResponse = {
    data: {
      common_name: 'Stomach pain',
      id: 's_13',
      location: 'abdomen',
      name: 'Abdominal pain',
      sex_filter: 'both'
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
    getSymptomById(id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object with getSymptomById is called', () => {
    expect(getSymptomById(id)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getSymptomById property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getSymptomById(id)).rejects.toEqual(
      Error(
        `Could not retreive symptom with id of: ${id}, please try again later.`
      )
    );
  });
});

describe('getSymptomsWithSexFilter', () => {
  const filter = 'female';
  const url = `${baseUrl}/api/v1/symptoms?sex_filter=${filter}`;
  const mockResponse = {
    data: [
      {
        common_name:
          'Abdominal mass, after pregnancy or the removal of molar pregnancy',
        id: 's_1293',
        location: 'abdomen',
        name:
          'Abdominal mass, after pregnancy or the removal of molar pregnancy',
        sex_filter: 'female'
      },
      {
        common_name: 'Cramps before period',
        id: 's_17',
        location: 'abdomen',
        name: 'Abdominal pain, premenstrual',
        sex_filter: 'female'
      },
      {
        common_name: 'Absence of menstrual period',
        id: 's_1457',
        location: 'undefined',
        name: 'Amenorrhea',
        sex_filter: 'female'
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
    getSymptomsWithSexFilter(filter);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object with getSymptomsWithSexFilter is called', () => {
    expect(getSymptomsWithSexFilter(filter)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getSymptomsWithSexFilter property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getSymptomsWithSexFilter(filter)).rejects.toEqual(
      Error(
        `Could not retrieve symptoms specific to ${filter}s, please try again later.`
      )
    );
  });
});

describe('getAllConditions', () => {
  const url = `${baseUrl}/api/v1/conditions`;
  const mockResponse = {
    data: [
      {
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
      },
      {
        acuteness: 'chronic',
        category: 'Surgery',
        common_name: 'Abdominal aortic aneurysm',
        hint: 'Please consult your family doctor.',
        icd10_code: 'I71.4',
        id: 'c_764',
        name: 'Abdominal aortic aneurysm',
        prevalence: 'very_rare',
        severity: 'severe',
        sex_filter: 'both',
        triage_level: 'consultation'
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
    getAllConditions();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object with getAllConditions is called', () => {
    expect(getAllConditions()).resolves.toEqual(mockResponse);
  });

  it('should return an error if getAllConditions property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getAllConditions()).rejects.toEqual(
      Error(`Could not retreive conditions, please try again later.`)
    );
  });
});

describe('searchAllConditions', () => {
  const searchTerm = 'cough';
  const url = `${baseUrl}/api/v1/conditions?search=${searchTerm}`;
  const mockResponse = {
    data: [
      {
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
      },
      {
        acuteness: 'acute',
        category: 'Internal Medicine',
        common_name: 'Cough, unspecified',
        hint: 'If your symptoms get worse, see your family doctor.',
        icd10_code: 'R05',
        id: 'c_971',
        name: 'Cough, unspecified',
        prevalence: 'common',
        severity: 'mild',
        sex_filter: 'both',
        triage_level: 'self_care'
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
    searchAllConditions(searchTerm);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object with searchAllConditions is called', () => {
    expect(searchAllConditions(searchTerm)).resolves.toEqual(mockResponse);
  });

  it('should return an error if searchAllConditions property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(searchAllConditions(searchTerm)).rejects.toEqual(
      Error(
        `Could not search conditions by ${searchTerm}, please try again later.`
      )
    );
  });
});
