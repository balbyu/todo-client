const BASE_URL = "http://localhost:3000";

export const login = ({ username, password }) => {
  if (!username || !password) {
    throw new Error("A username and password must be provided.");
  }

  return axios.post(`${BASE_URL}/users/login`, { username, password });
};
