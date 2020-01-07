const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';

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
