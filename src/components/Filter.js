import React from 'react';

const Filter = ({ handleFilter }) => {
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select Filter</option>
      <option value="username">Username</option>
      <option value="email">Email</option>
    </select>
  );
};

export default Filter;
