const baseUrl = 'https://triage-ex.herokuapp.com';
const infermedicaUrl = 'https://api.infermedica.com/v2';
const mapquestUrl = 'http://www.mapquestapi.com/geocoding/v1';
const mapquestDirectionsUrl = 'http://www.mapquestapi.com/directions/v2/route';
const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';
import { REACT_APP_ID, REACT_APP_KEY, MAPQUEST_KEY } from 'react-native-dotenv';

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

export const sendInitialUserSymptoms = async userSymptoms => {
  const options = {
    method: 'POST',
    headers: {
      'App-Id': `${REACT_APP_ID}`,
      'App-Key': `${REACT_APP_KEY}`,
      'Content-Type': 'application/json',
      Model: 'infermedica-en'
    },
    body: JSON.stringify(userSymptoms)
  };
  const response = await fetch(`${infermedicaUrl}/diagnosis`, options);
  if (!response.ok) {
    throw new Error(
      'Could not get follow up symptom questions, please try again later.'
    );
  }
  const data = await response.json();

  return data;
};

export const getExplanation = async userInfo => {
  const options = {
    method: 'POST',
    headers: {
      'App-Id': `${REACT_APP_ID}`,
      'App-Key': `${REACT_APP_KEY}`,
      'Content-Type': 'application/json',
      Model: 'infermedica-en'
    },
    body: JSON.stringify(userInfo)
  };
  const response = await fetch(`${infermedicaUrl}/explain`, options);
  if (!response.ok) {
    throw new Error(
      "Could not get condition's supporting evidence, please try again later."
    );
  }
  const data = await response.json();

  return data;
};

export const getLatLong = async (city, state) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(
    `${mapquestUrl}/adress?key=${MAPQUEST_KEY}&location=${city},+${state}
`,
    options
  );
  if (!response.ok) {
    throw new Error(
      'Could not get latitude and longitude for that city, please try again later.'
    );
  }

  const data = await response.json();

  return data;
};

export const getDoctorsByLocation = async location => {
  const response = await fetch(`${doctorsUrl}/doctors/?location=${location}`);
  if (!response.ok) {
    throw new Error(
      `Could not get doctors for ${location}, please try again later.`
    );
  }
  const data = await response.json();

  return data;
};

export const getDoctorsForProviderByLocation = async (location, provider) => {
  const response = await fetch(
    `${doctorsUrl}/doctors/?location=${location}&provider=${provider}`
  );
  if (!response.ok) {
    throw new Error(
      `Could not get doctors in ${location} that take ${provider}, please try again later.`
    );
  }
  const data = await response.json();

  return data;
};

export const getAllProviders = async () => {
  const response = await fetch(`${doctorsUrl}/providers`);
  if (!response.ok) {
    throw new Error('Could not get providers, please try again later.');
  }
  const data = await response.json();

  return data;
};

export const getDistanceToDoctor = async (
  userLatitude,
  userLongitude,
  doctorLatitude,
  doctorLongitude
) => {
  const response = await fetch(
    `${mapquestDirectionsUrl}?key=${MAPQUEST_KEY}&from=${userLatitude},${userLongitude}&to=${doctorLatitude},${doctorLongitude}`
  );
  if (!response.ok) {
    throw new Error(
      'Could not get distance to doctor, please try again later.'
    );
  }
  const data = await response.json();

  return data;
};

export const sendEmailReport = async (email, report) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(report)
  };
  const response = await fetch(
    `https://memd-mailer.herokuapp.com/send_email?email=${email}`,
    options
  );
  if (!response.ok) {
    throw new Error(
      `Could not send email to ${email}, please try again later.`
    );
  }
  const data = await response.json();
  return data;
};
