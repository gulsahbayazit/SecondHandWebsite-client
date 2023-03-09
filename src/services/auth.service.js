import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  verify = () => {
    return this.api.get("/auth/verify");
    // same as
    // return axios.post("http://t:5005/auth/verify");
  };
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;
