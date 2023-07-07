const BASE_URL = "http://localhost:3000/";

export const getUser = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const json = await res.json();

  return json;
};
