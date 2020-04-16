import { CREATE_USER, LOGIN_USER } from "../actionTypes";

export const createUser = (user) => {
  console.log(user);

  return (dispatch) => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: user,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem("token", data.token);
          dispatch(loginUser(data.user));
        }
      });
  };
};

export const loginRequest = (username, password) => {
  return axios;
};

export const loginUser = (user, token) => {
  return {
    type: LOGIN_USER,
    payload: { user, token },
  };
};
