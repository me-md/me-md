export const cleanInitialUserReport = report => {
  const { age, presentFactors, sex, symptomIds } = report;
  let riskFactors = cleanFactorArrays(presentFactors);
  let initialSymptoms = cleanFactorArrays(symptomIds);
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

export const setInitialSymptom = symptom => {
  return (symptom = { ...symptom, initial: 'true' });
};
