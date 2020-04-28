import axios from "axios";
import { authHeader } from "../helpers/authHeader";

const BASE_URL = "http://localhost:3000";

export const userService = {
  login,
  logout,
  register,
  validate,
};

async function validate() {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/users/validate`,
      authHeader()
    );
    return {
      valid: Boolean(data && data.id),
      user: data,
    };
  } catch (error) {
    return false;
  }
}

/**
 * Logs the user in
 * @param {*} username
 * @param {*} password
 */
async function login(payload) {
  try {
    const user = await axios.post(`${BASE_URL}/users/login`, payload);
    localStorage.setItem("user", JSON.stringify(user.data));
    return user;
  } catch (error) {
    logout();
    window.location.reload(true);
  }
}

/**
 *  Remove user from local storage to log user out.
 */
function logout() {
  localStorage.removeItem("user");
}

/**
 * Signs up a new user.
 * @param {*} user
 */
async function register(user) {
  try {
    return await axios.post(`${BASE_URL}/users`, { ...user });
  } catch (error) {
    logout();
    window.location.reload(true);
  }
}

export default { login, register, logout };
