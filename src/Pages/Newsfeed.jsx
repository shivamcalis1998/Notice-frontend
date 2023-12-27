import React, { useState, useEffect } from "react";
import MyNotices from "../components/MyNotices";
import axios from "axios";

const Newsfeed = ({ userInfo }) => {
  const [myNotices, setMyNotices] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    authorization: userInfo.token,
  };
  useEffect(() => {
    getNotices();
  }, []);

  async function getNotices() {
    const user = userInfo.user;

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
      <MyNotices userInfo={userInfo} myNotices={myNotices} setMyNotices={setMyNotices} />
    </div>
  );
};

export default Newsfeed;
