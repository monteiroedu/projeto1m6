import axios from "axios";
import { GenrePayload, LoginRequest, UserPayload, } from "../types/requests";
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

  getGenres: async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/genre", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Not always needed with a GET request
        },
      });
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  getGames: async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/game", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Not always needed with a GET request
        },
      });
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  createGenre: async (GenrePayload: GenrePayload) => {
   
    const token = localStorage.getItem("token");
    const data = {Name: "Teste4"};
    // const data = GenrePayload;

    fetch("https://xbox-live-api.onrender.com/genre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Not always needed with a GET request
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert('Gênero criado com sucesso!');
      })
      .catch((error) => {
        console.error("Error:", error);
        alert('Erro ao criar o Gênero');
      });
  },

  createUser: async (payload: UserPayload) => {
    try {
      // const response = await axios.post("/user", payload);
      const response = await axios.post("/user", payload);
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },

  // getGenre: async () => {
  //   const payload = localStorage.getItem("token");
  //   try {
  //     const response = await axios.post("/genre", {
  //       headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${payload}`, // Not always needed with a GET request
  //           },
  //     });
  //     return response.data;
  //     console.log('gg', response.data);
  //   } catch (err) {
  //     HandleError(err);
  //   }
  // },

};
