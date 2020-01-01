export const cleanInitialUserReport = report => {
  const { age, presentFactors, sex, symptomIds } = report;
  let riskFactors = cleanFactorArrays(presentFactors);
  let symptoms = cleanFactorArrays(symptomIds);
  const cleanedFormat = {
    sex,
    age,
    evidence: [...riskFactors, ...symptoms]
  };
  return cleanedFormat;
};

export const cleanFactorArrays = factors => {
  let filtered = factors.filter(factor => factor.present === true);
  let ids = filtered.map(factor => factor.id);
  let newFormat = ids.map(id => {
    return {
      id: id,
      choice_id: 'present'
    };
  });
  return newFormat;
};
