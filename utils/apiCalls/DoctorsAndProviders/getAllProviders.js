const doctorsUrl = 'https://memd-doc-search.herokuapp.com/api/v1';

export const getAllProviders = async () => {
  const response = await fetch(`${doctorsUrl}/providers`);
  if (!response.ok) {
    throw new Error('Could not get providers, please try again later.');
  }
  const data = await response.json();

  return data;
};
