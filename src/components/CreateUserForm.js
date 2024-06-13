import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: ''
  });

  const [showForm, setShowForm] = useState(false); // State to manage form visibility

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
      setShowForm(false); // Hide the form after saving
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  return (
    <div><br></br><br></br>
      {showForm && ( // Conditionally render the form based on visibility state
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px' }} // Inline styles
            />
          </div>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px' }} // Inline styles
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px' }} // Inline styles
            />
          </div>
          <button type="submit" style={{ background: 'blue', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none' }}>Create User</button>
        </form>
      )}
      <br></br><br></br>
      <button type="button" onClick={toggleForm} style={{ background: 'blue', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none' }}>
        {showForm ? 'Hide Form' : 'Add User'}
      </button><br></br><br></br>
    </div>
  );
};

export default CreateUserForm;
