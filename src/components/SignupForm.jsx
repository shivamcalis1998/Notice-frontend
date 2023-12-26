import React, { useState } from "react";

const SignupForm = ({ Signup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    Signup(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} />

      <label>Phone Number:</label>
      <input type="text" name="phone_number" onChange={handleChange} />

      <label>Department:</label>
      <input type="text" name="department" onChange={handleChange} />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
