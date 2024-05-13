// Api/api.jsx
import axios from "axios";

const API_BASE_URL = "http://localhost"; // Change this according to your actual API URL

export const fetchLoggedInUsers = async (user_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/fetchLoggedInUsers.php?user_id=${user_id}`
    );
    return response.data; // this will be your machine data
  } catch (error) {
    console.error("Error fetching machine data:", error);
    throw error;
  }
};
export const fetchData = async (user_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/fetchUsers.php?user_id=${user_id}`
    );
    return response.data; // this will be your machine data
  } catch (error) {
    console.error("Error fetching machine data:", error);
    throw error;
  }
};

export const insertData = (data) => {
  return axios
    .post(`${API_BASE_URL}/insert_data.php`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to insert data:", error);
      throw error;
    });
};

export const signupUser = (credentials) => {
  return axios
    .post(`${API_BASE_URL}/signupUser.php`, credentials)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Login failed:", error);
      throw error;
    });
};

export const loginUser = (credentials) => {
  return axios
    .post(`${API_BASE_URL}/loginUser.php`, credentials)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Login failed:", error);
      throw error;
    });
};

export const loginAdmin = (credentials) => {
  return axios
    .post(`${API_BASE_URL}/loginAdmin.php`, credentials)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Login failed:", error);
      throw error;
    });
};

export const fetchUsers = () => {
  return axios
    .get(`${API_BASE_URL}/fetchUsers.php`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("NO USERS DATA", error);
      throw error;
    });
};

export const uploadUser = (userData) => {
  return axios.post(`${API_BASE_URL}/uploadUsers.php`, userData);
};

export const assignMachinesToUser = (userId, machines) => {
  return axios.post(`${API_BASE_URL}/machineAssign.php`, {
    user_id: userId,
    machines: machines,
  });
};

// export const HandleLoginApi = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/postUser.php`, {
//       username,
//       password,
//     });
//     if (response.data.message === "Login successful") {
//       console.log("Logged in successfully");
//       // Proceed to redirect the user or store the login token/session
//     } else {
//       console.error("Login failed:", response.data.message);
//       // Show error to the user
//     }
//   } catch (error) {
//     console.error("Server error during login", error);
//   }
// };
