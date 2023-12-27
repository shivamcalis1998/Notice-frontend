import React, { useState, useEffect } from "react";

import axios from "axios";

const Dashboard = ({ Islogin, userInfo }) => {
  const [notices, setNotices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const headers = {
    "Content-Type": "application/json",
    authorization: userInfo.token,
  };

  useEffect(() => {
    getNotices();
  }, [selectedCategory]);

  async function getNotices() {
    try {
      const categoryQ = selectedCategory ? `?category=${selectedCategory}` : "";
      const data = await axios.get(
        `https://notice-backend-btw0.onrender.com/notices${categoryQ}`,
        { headers }
      );
      console.log(data);
      setNotices(data.data);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to the notices home page </h1>
      {Islogin && (
        <div>
          <h2>Filter Notices by Category</h2>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="parking">Parking</option>
            <option value="covid">Covid</option>
            <option value="maintenance">Maintenance</option>
          </select>

          <h2>Notices</h2>
          <ul>
            {notices?.map((notice) => (
              <li key={notice._id}>
                <strong>{notice.title}</strong>
                <p>{notice.body}</p>
                <p>Category: {notice.category}</p>
                <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
