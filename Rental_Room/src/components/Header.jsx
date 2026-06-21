import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ff5a5f',
    textDecoration: 'none'
  };

  const navStyle = {
    display: 'flex',
    gap: '30px',
    listStyleType: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333333',
    fontWeight: '500',
    fontSize: '16px'
  };

  const savedStyle = {
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500'
  };

  const badgeStyle = {
    backgroundColor: '#ff5a5f',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  return (
    <header style={headerStyle}>
      <a href="/" style={logoStyle}>🏠 RentalRoom</a>
      <ul style={navStyle}>
        <li><a href="#" style={linkStyle}>Trang chủ</a></li>
        <li><a href="#" style={linkStyle}>Phòng thuê</a></li>
        <li><a href="#" style={linkStyle}>Danh mục</a></li>
        <li><a href="#" style={linkStyle}>Liên hệ</a></li>
      </ul>
      <div style={savedStyle}>
        ❤️ Đã lưu <span style={badgeStyle}>0</span>
      </div>
    </header>
  );
};

export default Header;
