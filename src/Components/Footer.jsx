import React from 'react';

const footerStyle = {
  backgroundColor: '#282c34',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Social Media Dashboard</p>
    </footer>
  );
};

export default Footer;
