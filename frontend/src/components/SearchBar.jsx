import React from 'react'

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="mb-4 p-2 w-full border rounded"
      placeholder="Search employee by name..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default SearchBar
