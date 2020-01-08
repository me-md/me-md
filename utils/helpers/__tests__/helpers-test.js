import * as helpers from '../helpers';

describe('helper functions', () => {

  it('should clean factors array', () => {
    const mockFactors = [
      {
        present: true,
        id: 0
      },
      {
        present: false,
        id: 1
      },
      {
        present: false,
        id: 2
      },
      {
        present: true,
        id: 3
      },
    ];

    const expectedFactors = [
      {
        id: 0,
        choice_id: 'present'
      },
      {
        id: 3,
        choice_id: 'present'
      }
    ]

    expect(helpers.cleanFactorArrays(mockFactors)).toEqual(expectedFactors);
  });

  it('should clean symptoms array', () => {
    const mockSymptoms = [
      {
        present: true,
        id: 0
      },
      {
        present: false,
        id: 1
      },
      {
        present: false,
        id: 2
      },
      {
        present: true,
        id: 3
      },
    ];

    const expectedSymptoms = [
      {
        id: 0,
        choice_id: 'present'
      },
      {
        id: 3,
        choice_id: 'present'
      }
    ]

    expect(helpers.cleanSymptomArrays(mockSymptoms)).toEqual(expectedSymptoms);
  });

  it('should set initial symptom', () => {
    const mockSymptom = {
      id: 1,
      name: 'Cough',
    }

    const expectedSymptom = {
      id: 1,
      name: 'Cough',
      initial: 'true'
    }

    expect(helpers.setInitialSymptom(mockSymptom)).toEqual(expectedSymptom);
  });

  it('should clean the initial user report', () => {

  });

  it('should specify the target condition', () => {
    const mockUserInfo = {
      age: 33,
      sex: 'male'
    };

    const mockSymptomFollowup = {
      conditions: [
        {
          id: 2,
          name: 'Asthma'
        }
      ]
    };

    const expectedUserInfo = {
      age: 33,
      sex: 'male',
      extras: {
        enable_triage_5: true
      },
      target: mockSymptomFollowup.conditions[0].id
    }
    expect(helpers.specifyTargetCondition(mockUserInfo, mockSymptomFollowup)).toEqual(expectedUserInfo);
  });

  it('should reformat phone numbers from 1234567890 to (123)-456-7890', () => {
    const mockPhoneNumber = 1234567890;

    const expectedPhoneNumber = '(123)-456-7890';

    expect(helpers.formatPhoneNumber(mockPhoneNumber)).toEqual(expectedPhoneNumber);
  });

  it('should compile a final report', () => {
    const mockLocation = {
      lat: 101,
      lon: 25
    }
    const mockStateAbbreviation = 'CO'
    const mockUserInfo = {
      age: 22,
      sex: 'male'
    }
    const mockSymptomFollowup = {
      condition: 'Asthma'
    }
    const mockConditionDetails = {
      id: 'c_101',
      severity: 'low'
    }
    const mockExplanation = {
      support: 'You coughing'
    }
    const mockDoctors = [
      {
        name: 'Dr. Pol',
        address: '1234 Address Cir'
      }
    ]

    const expectedReport = {
      location: mockLocation,
      stateAbbreviation: mockStateAbbreviation,
      userInfo: mockUserInfo,
      symptomFollowup: mockSymptomFollowup,
      conditionDetails: mockConditionDetails,
      explanation: mockExplanation,
      doctors: mockDoctors
    }

    expect(helpers.compileReport(mockLocation,
      mockStateAbbreviation,
      mockUserInfo,
      mockSymptomFollowup,
      mockConditionDetails,
      mockExplanation,
      mockDoctors)).toEqual(expectedReport)
  })

});