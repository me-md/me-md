const baseUrl = 'https://triage-ex.herokuapp.com';

export const getAllSymptoms = async () => {
  const response = await fetch(`${baseUrl}/api/v1/symptoms`);
  if (!response.ok) {
    throw new Error(`Could not retrieve symptoms, please try again later.`);
  }
  const data = await response.json();
  return data;
};

export const getSymptomsByLocation = async location => {
  const response = await fetch(
    `${baseUrl}/api/v1/symptoms?location=${location}`
  );
  // available bodyparts: [“abdomen”, “undefined”, “head”, “back”, “chest”, “legs”, “feet”, “groin”, “arms”]
  if (!response.ok) {
    throw new Error(
      `Could not retrieve symptoms by ${location}, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};

export const searchAllSymptoms = async searchTerm => {
  const response = await fetch(
    `${baseUrl}/api/v1/symptoms?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error(
      `Could not search symptoms by ${searchTerm}, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};

export const getSymptomById = async id => {
  const response = await fetch(`${baseUrl}/api/v1/symptoms/${id}`);
  if (!response.ok) {
    throw new Error(
      `Could not retreive symptom with id of: ${id}, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};

export const getSymptomsWithSexFilter = async filter => {
  const response = await fetch(
    `${baseUrl}/api/v1/symptoms?sex_filter=${filter}`
  );
  if (!response.ok) {
    throw new Error(
      `Could not retrieve symptoms specific to ${filter}s, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};

export const getAllConditions = async () => {
  const response = await fetch(`${baseUrl}/api/v1/conditions`);
  if (!response.ok) {
    throw new Error(`Could not retreive conditions, please try again later.`);
  }
  const data = await response.json();
  return data;
};

export const searchAllConditions = async searchTerm => {
  const response = await fetch(
    `${baseUrl}/api/v1/conditions?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error(
      `Could not search conditions by ${searchTerm}, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};

export const getConditionById = async id => {
  const response = await fetch(`${baseUrl}/api/v1/conditions/${id}`);
  if (!response.ok) {
    throw new Error(
      `Could not retreive condition with id of: ${id}, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};

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

export const sendInitialUserSymptoms = async (userSymptoms) => {
  
}