const baseUrl = 'https://triage-ex.herokuapp.com';

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
