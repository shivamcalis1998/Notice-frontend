import React from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Entryway = ({ setIsLogin, userInfo, setUserInfo }) => {
  const navigate = useNavigate();

  const Login = async (loginData) => {
    try {
      const user = await axios.post(
        "https://notice-backend-btw0.onrender.com/auth/login",
        loginData
      );

      localStorage.setItem("token", JSON.stringify(user.data.token));
      localStorage.setItem("userPro", JSON.stringify(user.data.user));
      setUserInfo({ token: user.data.token, user: user.data.user });
      navigate("/");

      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm Login={Login} />
    </div>
  );
};

export default Entryway;
