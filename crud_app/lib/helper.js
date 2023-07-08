const BASE_URL = "http://localhost:3000/";

//Fetching All Users
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const json = await res.json();

  return json;
};

// Fetching Single User by Id
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

// posting a new user
export async function addUser(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}api/users`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

// update a new user
export async function updateUser(userId, formData) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}api/users/${userId}`, Options);
  const json = await response.json();

  return json;
}

//Delete a new User
export async function deleteUser(userId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${BASE_URL}api/users/${userId}`, Options);
  const json = await response.json();

  return json;
}
