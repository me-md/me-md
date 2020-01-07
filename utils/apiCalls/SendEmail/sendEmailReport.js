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
