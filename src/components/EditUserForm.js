// src/components/EditUserForm.js

import React, { useState } from 'react';
import axios from 'axios';

const EditUserForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, formData);
      onUpdate(response.data); // Pass the updated user data to the parent component
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUserForm;
