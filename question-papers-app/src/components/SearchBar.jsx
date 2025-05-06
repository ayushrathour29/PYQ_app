import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <header style={{
      backgroundColor: '#007bff',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <input
        type="text"
        placeholder="Search question papers..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '50%',
          padding: '0.5rem',
          borderRadius: '4px',
          border: 'none',
          fontSize: '1rem'
        }}
      />
    </header>
  );
}

export default SearchBar;
