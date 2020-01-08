export const cleanInitialUserReport = report => {
  const { age, presentFactors, sex, symptoms } = report;
  let riskFactors = cleanFactorArrays(presentFactors);
  let initialSymptoms = cleanSymptomArrays(symptoms);
  let initialSymptom = setInitialSymptom(initialSymptoms[0]);
  initialSymptoms[0] = initialSymptom;
  const cleanedFormat = {
    sex,
    age,
    evidence: [...initialSymptoms, ...riskFactors]
  };
  return cleanedFormat;
};

export const cleanFactorArrays = factors => {
  let filtered = factors.filter(factor => factor.present === true);
  let ids = filtered.map(factor => factor.id);
  return ids.map(id => {
    return {
      id: id,
      choice_id: 'present'
    };
  });
};

export const cleanSymptomArrays = symptoms => {
  let filtered = symptoms.filter(symptom => symptom.present === true);
  let ids = filtered.map(symptom => symptom.id);
  return ids.map(id => {
    return {
      id: id,
      choice_id: 'present'
    };
  });
};

export const setInitialSymptom = symptom => {
  return (symptom = { ...symptom, initial: 'true' });
};

export const specifyTargetCondition = (userInfo, symptomFollowup) => {
  userInfo.target = symptomFollowup.conditions[0].id;
  userInfo.extras = {
    enable_triage_5: true
  };
  return userInfo;
};

export const filterDoctorsByDistance = (location, doctors) => {
  const { coords } = location;
  const { latitude, longitude } = coords;
  // doctors.sort((doctorA, doctorB))
};

export const formatPhoneNumber = number => {
  let phone = number.toString()
  return `(${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6, 10)}`
}

export const compileReport = (
  location,
  stateAbbreviation,
  userInfo,
  symptomFollowup,
  conditionDetails,
  explanation,
  doctors
) => {
  return {
    location,
    stateAbbreviation,
    userInfo,
    symptomFollowup,
    conditionDetails,
    explanation,
    doctors
  };
};

