const baseUrl = 'https://triage-ex.herokuapp.com';

export const getCommonRiskFactors = async () => {
  const response = await fetch(`${baseUrl}/api/v1/risks`);
  if (!response.ok) {
    throw new Error(
      `Could not retreive common risk factors, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};
