import { getDoctorsByLocation } from './getDoctorsByLocation';

const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';

describe('getDoctorsByLocation', () => {
  const location = 'CO'
  const url = `${doctorsUrl}/doctors/?location=${location}`;

  const mockResponse = {"practice": {"name": "Nicholas Sigma, DMD", "location": "co-superior", "lat": 39.95715, "lon": -105.16937,    "distance":"N/A", "city": "Superior", "state": "CO", "street": "306 Center Dr", "street2": "N/A", "zip": "80027", "phone":
    "3034999555", "uid": "69156c8f65db56e7ef54cd85743966ac", "accepts_new_patients": true, "insurance_uids":
    ["ameritas-ameritasppo", "dentalnetworkofamerica-dentalnetworkofamericadppo", "deltadental-deltadentalppo",
    "cignadental-cignadentaldhmo", "assurant-assurantdha", "assurant-assurantdhapremier", "aetna-aetnadmo",
    "unitedconcordia-unitedconcordiaadvantageplusppo", "aetna-aetnadppo", "cignadental-cignatotaldppo",
    "dentemax-dentemaxdental", "unitedconcordia-unitedconcordianationalfeeforservice", "metlife-metlifepdp",
    "deltadental-deltadentalpremier", "principalfinancialservices-principaldentalppo", "dominiongroup-dominiondentalppo"]},
    "profile": {"first_name": "David", "middle_name": "N/A", "last_name": "Lambert", "title": "DDS", "school": [],
    "image_url": "https://asset1.betterdoctor.com/assets/general_doctor_male.png", "gender": "N/A", "bio": "Doctor's bio goes here."}
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
    getDoctorsByLocation(location);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object when getDoctorsByLocation is called', () => {
    expect(getDoctorsByLocation(location)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getDoctorsByLocation property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getDoctorsByLocation()).rejects.toEqual(
      Error(
          `Could not get doctors for ${location}, please try again later.`
      )
    );
  });

});
