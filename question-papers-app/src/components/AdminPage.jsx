import React, { useState } from 'react';

function AdminPage() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !year || !subject || !pdfFile) {
      setMessage('Please fill all fields and select a PDF file.');
      return;
    }
    // For now, just simulate upload by showing success message
    setMessage(`Uploaded paper: ${title} (${year}) - ${subject}`);
    // Reset form
    setTitle('');
    setYear('');
    setSubject('');
    setPdfFile(null);
    e.target.reset();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px' }}>
      <h2>Admin Upload Page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Year:</label><br />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Subject:</label><br />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>PDF File:</label><br />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Upload
        </button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}

export default AdminPage;
