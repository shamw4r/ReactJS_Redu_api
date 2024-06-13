// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import CreateUserForm from './components/CreateUserForm';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setFilteredUsers(response.data); // Initially, set filtered users to all users
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = searchTerm => {
    const filteredUsers = users.filter(user => {
      const { name, username, email } = user;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        name.toLowerCase().includes(lowerCaseSearchTerm) ||
        username.toLowerCase().includes(lowerCaseSearchTerm) ||
        email.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
    setFilteredUsers(filteredUsers);
  };

  const handleCreateUser = newUser => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    setFilteredUsers(prevFilteredUsers => [...prevFilteredUsers, newUser]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management App</h1>
      </header>
      <main>
        <CreateUserForm onUserCreated={handleCreateUser} />
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleSearch} />
        <UserList users={filteredUsers} />
      </main>
    </div>
  );
}

export default App;
