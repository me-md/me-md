const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';

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
