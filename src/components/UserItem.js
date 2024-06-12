import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/actions/userActions';

const UserItem = ({ user }) => {
  const { id, name, username, email } = user;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default UserItem;
