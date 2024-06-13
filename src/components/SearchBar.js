// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the onSearch function with the search term
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', marginBottom: '10px' }} // Inline styles
      />
    </div>
  );
};

export default SearchBar;
