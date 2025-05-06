import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#282c34',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
      marginTop: 'auto'
    }}>
      &copy; {new Date().getFullYear()} Previous Year Question Papers. All rights reserved.
    </footer>
  );
}

export default Footer;
