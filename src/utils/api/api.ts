import axios from "axios";
import { LoginRequest, UserPayload, } from "../types/requests";
import { HandleError } from "../errors/handle-error-modal";

axios.defaults.baseURL = "https://xbox-live-api.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// export const api = {
//   login: async ({ Email, Password }: LoginRequest) => {
//     const response = await fetch("https://xbox-live-api.onrender.com/auth", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ Email, Password }),
//     });
//     return await response.json();
//   },
// };

export const api = {
  login: async ({ Email, Password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", {
        Email,
        Password,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  createUser: async (payload: UserPayload) => {
    try {
      const response = await axios.post("/user", payload);
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },

};
