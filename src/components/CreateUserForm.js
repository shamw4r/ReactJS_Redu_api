// src/components/CreateUserForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: ''
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
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      onUserCreated(response.data); // Pass the newly created user data to the parent component
      setFormData({ // Reset form data after successful creation
        name: '',
        username: '',
        email: ''
      });
    } catch (error) {
      console.error('Error creating user:', error);
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
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
