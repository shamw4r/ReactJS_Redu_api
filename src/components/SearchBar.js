import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input type="text" value={query} onChange={handleChange} placeholder="Search by name" />
  );
};

export default SearchBar;
