import React from 'react'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
        placeholder="Search employee by name..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar
