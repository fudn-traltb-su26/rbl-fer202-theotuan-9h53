import React from 'react';

const Banner = () => {
  // Gradient background expression
  const bgStyle = { 
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    padding: '100px 20px',
    textAlign: 'center',
    color: '#333',
    borderRadius: '12px',
    margin: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  return (
    <section style={bgStyle}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#d81b60', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
        Tìm Không Gian Sống Ấm Cúng Của Bạn
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
        Khám phá hàng ngàn phòng trọ, căn hộ dịch vụ và không gian ở ghép phù hợp với nhu cầu và ngân sách của bạn chỉ với vài cú click.
      </p>
      <button style={{
        padding: '15px 40px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ff5a5f',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(255,90,95,0.3)',
        transition: 'transform 0.2s'
      }}>
        Tìm phòng ngay
      </button>
    </section>
  );
};

export default Banner;
