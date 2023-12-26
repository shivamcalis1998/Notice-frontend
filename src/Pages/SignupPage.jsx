import React from "react";
import SignupForm from "../components/SignupForm";
import axios from "axios";
const SignupPage = () => {

  const Signup = async (userData) => {
    try {
      const user = await axios.post(
        "https://notice-backend-btw0.onrender.com/auth/register",
        userData
      );
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm Signup={Signup} />
    </div>
  );
};

export default SignupPage;
