const infermedicaUrl = 'https://api.infermedica.com/v2';
import Config from 'react-native-config';
// import { REACT_APP_ID, REACT_APP_KEY } from 'react-native-dotenv';

export const getExplanation = async userInfo => {
  const options = {
    method: 'POST',
    headers: {
      'App-Id': `${Config.REACT_APP_ID}`,
      'App-Key': `${Config.REACT_APP_KEY}`,
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
