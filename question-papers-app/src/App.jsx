import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
        <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>User Page</Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin Page</Link>
      </nav>
      <Routes>
        <Route path="/" element=<UserPage /> />
        <Route path="/admin" element=<AdminPage /> />
      </Routes>
    </Router>
  );
}

export default App;
