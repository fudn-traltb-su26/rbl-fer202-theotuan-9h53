import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px 20px',
    marginTop: '40px',
    borderTop: '1px solid #eaeaea',
    color: '#555'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px'
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px'
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '15px',
    fontSize: '18px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4 style={titleStyle}>Về hệ thống</h4>
          <p>🏠 RentalRoom - Nền tảng tìm kiếm phòng trọ, căn hộ uy tín và nhanh chóng.</p>
          <p>Bản quyền © 2026 RentalRoom. All rights reserved.</p>
        </div>
        <div style={columnStyle}>
          <h4 style={titleStyle}>Điều khoản</h4>
          <p><a href="#" style={{textDecoration: 'none', color: '#555'}}>Điều khoản thuê phòng</a></p>
          <p><a href="#" style={{textDecoration: 'none', color: '#555'}}>Chính sách bảo mật</a></p>
          <p><a href="#" style={{textDecoration: 'none', color: '#555'}}>Quy định đăng tin</a></p>
        </div>
        <div style={columnStyle}>
          <h4 style={titleStyle}>Liên hệ</h4>
          <p>📧 Email: support@rentalroom.com</p>
          <p>📞 Hotline: 1900 1000</p>
          <p>🏢 Địa chỉ: Quận 1, TP. Hồ Chí Minh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
