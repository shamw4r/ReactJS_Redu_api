// src/components/Filter.js

import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState('');

  const handleChange = event => {
    const value = event.target.value;
    setFilterCriteria(value);
    onFilter(value); // Call the onFilter function with the filter criteria
  };

  return (
    <div className="Filter">
      <select value={filterCriteria} onChange={handleChange}>
        <option value="">Filter by</option>
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
};

export default Filter;
