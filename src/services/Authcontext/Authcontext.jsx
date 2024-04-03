// import React, {  createContext, useContext, useState } from "react";
// import Layout from "../../screens/Layout";

// // Create the AuthContext
// const AuthContext = createContext();

// // Create a provider component
// export const AuthProvider = ({children}) => {
//   const [isLoggedIn, setisLoggedIn] = useState(true);
//   const [Completeform , setisCompletedform] = useState(false)

//   const[escortloggedin , setisescortloggedin] = useState(false)

//   const[userloggedin , setisuserloggedin] =useState(true)

//   const toggleescortloggin = () => {
//     setisescortloggedin(true)
//     setisuserloggedin(false)
//   }

//   const toggleuserloggedin = () =>{
//     setisuserloggedin(true)
//     setisescortloggedin(false)
//   }

//   const login = () =>{
//     setisLoggedIn(false)
//   }

//   const logout = () =>{
//     setisLoggedIn(true)
//   }

//   const loginEscort = () =>{
//     setisCompletedform(true)
//   }

//   const logoutEscort = () =>{
//     setisCompletedform(false)
//   }

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setisLoggedIn , login , logout , loginEscort ,logoutEscort , Completeform , userloggedin , escortloggedin , toggleuserloggedin , toggleescortloggin}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to consume the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
