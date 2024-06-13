import React, { useState }  from 'react';
//import { useDispatch } from 'react-redux';
//import { deleteUser } from '../store/actions/userActions';
import axios from 'axios';


const UserItem = ({ user, onDelete }) => {
  //const { id, name, username, email } = user;
  //const dispatch = useDispatch();

  const { id, name: originalName, username: originalUsername, email: originalEmail } = user;
  const [name, setName] = useState(originalName);
  const [username, setUsername] = useState(originalUsername);
  const [email, setEmail] = useState(originalEmail);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name, username, email });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      onDelete(id); // Call the onDelete function with the user id
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <tr>
      <td>{isEditing ? <input type="text" value={name} onChange={e => setName(e.target.value)} /> : name}</td>
      <td>{isEditing ? <input type="text" value={username} onChange={e => setUsername(e.target.value)} /> : username}</td>
      <td>{isEditing ? <input type="email" value={email} onChange={e => setEmail(e.target.value)} /> : email}</td>
     
      <td>
      {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (<>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>)
  }
      </td>
    </tr>
  );
};

export default UserItem;
