// src/components/UserList.js

import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserItem key={user.id} user={user} onDelete={onDelete}  />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
