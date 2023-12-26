import React, { useState, useEffect } from "react";
import NoticeList from "../components/NoticeList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = ({ Islogin }) => {
  const [notices, setNotices] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    authorization: JSON.parse(localStorage.getItem("token")) || null,
  };

  useEffect(() => {
    gethNotices();
  }, []);

  async function gethNotices() {
    try {
      const data = await axios.get(
        "https://notice-backend-btw0.onrender.com/notices",
        { headers }
      );

      setNotices(data.data);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  return (
    <div>
      <h1>Welcome notices </h1>
      {Islogin && <NoticeList myNotices={notices} />}
    </div>
  );
};

export default HomePage;
