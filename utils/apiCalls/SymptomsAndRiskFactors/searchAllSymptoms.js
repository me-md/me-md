const baseUrl = 'https://triage-ex.herokuapp.com';

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
