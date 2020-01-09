import { REACT_APP_ID, REACT_APP_KEY } from 'react-native-dotenv';
const infermedicaUrl = 'https://api.infermedica.com/v2';

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
  setTimeout(() => {

  }, 2000);
  if (!response.ok) {
    throw new Error(
      "Could not get condition's supporting evidence, please try again later."
    );
  }
  const data = await response.json();

  return data;
};
