// import { REACT_APP_ID, REACT_APP_KEY } from 'react-native-dotenv';
import Config from 'react-native-config';

const infermedicaUrl = 'https://api.infermedica.com/v2';

export const sendInitialUserSymptoms = async userSymptoms => {
  const options = {
    method: 'POST',
    headers: {
      'App-Id': `${Config.REACT_APP_ID}`,
      'App-Key': `${Config.REACT_APP_KEY}`,
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
