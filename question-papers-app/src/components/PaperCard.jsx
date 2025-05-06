import React from 'react';

function PaperCard({ paper }) {
  return (
    <div style={{
      width: '250px',
      height: '250px',
      backgroundColor: '#fff',
      borderRadius: '0px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h4>{paper.title}</h4>
      <p>Year: {paper.year}</p>
      <p>Subject: {paper.subject}</p>
      <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
        <button style={{
          marginTop: 'auto',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          View PDF
        </button>
      </a>
    </div>
  );
}

export default PaperCard;
