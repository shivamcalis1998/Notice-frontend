import React, { useState, useEffect } from "react";
import MyNotices from "../components/MyNotices";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  authorization: JSON.parse(localStorage.getItem("token")) || null,
};

const MyNoticesPage = () => {
  const [myNotices, setMyNotices] = useState([]);

  useEffect(() => {
    getNotices();
  }, []);

  async function getNotices() {
    const user = JSON.parse(localStorage.getItem("userPro")) || null;

    try {
      const data = await axios.get(
        `https://notice-backend-btw0.onrender.com/notices/${user._id}`,
        { headers }
      );

      setMyNotices(data.data);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  return (
    <div>
      <h1>My Notices</h1>
      <MyNotices myNotices={myNotices} setMyNotices={setMyNotices} />
    </div>
  );
};

export default MyNoticesPage;
