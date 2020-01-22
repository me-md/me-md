import { getDoctorsForProviderByLocation } from './getDoctorsForProviderByLocation';

const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';

describe('getDoctorsForProviderByLocation', () => {
  const location = 'CO'
  const provider = "cigna-cignaopenaccessplus"
  const url = `${doctorsUrl}/doctors/?location=${location}&provider=${provider}`

  const mockResponse = {
    "practice": {"name": "Ponderosa Family Physicians PC", "location": "co-aurora", "lat": 39.65372, "lon": -104.81352,
    "distance": "N/A", "city": "Aurora", "state": "CO", "street": "14991 E Hampden Ave", "street2": "Ste 210", "zip":
    "80014", "phone": "3036905082", "uid": "7e187ae23844fe3dc6aacc26c69726ec", "accepts_new_patients": true,
    "insurance_uids": ["cigna-cignahmo", "aetna-aetnachoiceposii", "aetna-aetnawholehealthcoloradofrontrange",
    "aetna-aetnamanagedchoiceposopenaccess", "anthem-anthemppo", "aetna-aetnasignatureadministratorsppo", "aetna-aetnahmo",
    "anthem-anthemcobluepriorityppo", "multiplan-multiplanppo", "bcbsbluecard-bcbsbluecardppo", "multiplan-phcsppo",
    "cigna-cignaopenaccessplus", "cigna-cignalocalplus", "cigna-cignappo", "cofinity-cofinityppo",
    "premerabluecross-premeraheritagesignature", "premerabluecross-premeralifewiseconnect", "gwhcigna-greatwestppo",
    "unitedhealthcare-uhcchoicepluspos", "unitedhealthcare-uhcnavigatehmo", "unitedhealthcare-uhcnavigatepos",
    "unitedhealthcare-uhcoptionsppo", "rockymountainhealthplans-rockymountainsummitgroup"]}, "profile": {"first_name":
    "Michael", "middle_name": "N/A", "last_name": "Lipnick", "title": "MD", "school": [{"school": "Fort Collins Family Medicine", "graduation_year": "2005", "degree": "Residency"}], "image_url":
    "https://asset2.betterdoctor.com/images/53ed63514214f87515000207-1_thumbnail.jpg", "gender": "male", "bio": "Doctor's bio goes here"}
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
    getDoctorsForProviderByLocation(location, provider);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an object with a data object when getDoctorsForProviderByLocation is called', () => {
    expect(getDoctorsForProviderByLocation(location, provider)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getDoctorsForProviderByLocation property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getDoctorsForProviderByLocation(location, provider)).rejects.toEqual(
      Error(
          `Could not get doctors in ${location} that take ${provider}, please try again later.`
      )
    );
  });
  
});
