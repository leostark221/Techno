import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, adminLogin } from "../../Redux/actions";
import { loginAdmin, loginUser } from "../../services/api/api";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [UA, setUA] = useState("user");
  const navigate = useNavigate();

  const handleUserLogin = async () => {
    try {
      const credentials = { username, password };
      const response = await loginUser(credentials);
      if (response.message === "Login successful") {
        localStorage.setItem("userToken", response); // Assuming token is part of the response
        localStorage.setItem("userID", response.user_id); // Save the user ID from the response
        dispatch(userLogin(response.token, response.user_id)); // Pass both token and user ID
        navigate("/"); // Navigate to the home page
      } else {
        setError("Login failed:" + response.message); // Display error from server
      }
    } catch (error) {
      setError("Login error:" + error.message);
      console.error("Login error:", error);
    }
  };

  const handleAdminLogin = async () => {
    try {
      const credentials = { username, password };
      const response = await loginAdmin(credentials);
      if (response.message === "Admin login successful") {
        localStorage.setItem("adminToken", "ADmINTOKEN");
        dispatch(adminLogin(response.token));
        navigate("/admin"); // Assuming admin dashboard route
        onsole.log("SUCCESS ADMIN LOGGED IN");
      } else {
        setError("Login failed: " + response.message); // Display error from server
      }
    } catch (error) {
      if ((username == "") | (password == "")) {
        setError("Enter Username & password");
      } else {
        setError("Incorrect Login");
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="flex w-full flex-col justify-center items-center h-screen bg-backgroundColor ">
      <div className="mb-5 sm:mb-10  flex gap-4 bg-white  items-center justify-center h-12 w-40 sm:w-60 rounded-3xl">
        <div
          className={`${
            UA === "user"
              ? `bg-selectedNav active:opacity-50 cursor-pointer text-xs sm:text-base border-blue-500 border text-white font-semibold w-full h-full flex justify-center items-center rounded-3xl`
              : `bg-white active:opacity-50  cursor-pointer font-semibold text-xs sm:text-base w-full h-full flex justify-center items-center rounded-3xl`
          } `}
          onClick={() => setUA("user")}
        >
          USER
        </div>
        <div
          onClick={() => setUA("admin")}
          className={`${
            UA === "admin"
              ? `bg-selectedNav active:opacity-50 border-blue-500 border cursor-pointer text-xs sm:text-base text-white font-semibold w-full h-full flex justify-center items-center rounded-3xl`
              : `bg-white active:opacity-50 cursor-pointer font-semibold w-full h-full text-xs sm:text-base flex justify-center items-center rounded-3xl`
          }`}
        >
          ADMIN
        </div>
      </div>
      <div
        className="flex flex-col bg-white h-[500px] items-center justify-between sm:w-[500px]
      shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      >
        {UA === "admin" ? (
          <div className="mt-10 text-2xl font-bold">ADMIN LOGIN</div>
        ) : (
          <div className="mt-10 text-2xl font-bold">USER LOGIN</div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          className="w-[90%] pl-4 h-14 focus:outline-none bg-backgroundColor "
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[90%] pl-4 h-14 focus:outline-none bg-backgroundColor "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-center flex-col items-center pb-10">
          <div
            className="bg-selectedNav text-white h-10 w-24 mb-4 flex items-center justify-center active:opacity-50 cursor-pointer"
            onClick={() => {
              if (UA === "admin") {
                handleAdminLogin();
                // navigate("/admin");
              } else {
                handleUserLogin();
                // navigate("/");
              }
            }}
          >
            Login
          </div>
          {error && <div className="text-red-500"> {`${error}`} </div>}
        </div>
      </div>
    </div>
  );
}
