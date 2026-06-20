import React from 'react';

export default function Banner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(170, 59, 255, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
      padding: '80px 20px',
      textAlign: 'center',
      borderRadius: '24px',
      margin: '40px 20px 20px',
      border: '1px solid var(--border)',
      boxShadow: 'inset 0 0 40px rgba(170, 59, 255, 0.03)'
    }}>
      <h1 style={{
        fontSize: '42px',
        fontWeight: '800',
        color: 'var(--text-h)',
        marginBottom: '16px',
        letterSpacing: '-1px',
        lineHeight: '1.2'
      }}>
        Tìm Kiếm Phòng Trọ Tiện Nghi Cùng <span style={{ color: 'var(--accent)' }}>RentalRoom</span>
      </h1>
      <p style={{
        color: 'var(--text)',
        fontSize: '18px',
        marginBottom: '32px',
        maxWidth: '650px',
        margin: '0 auto 32px',
        lineHeight: '1.6'
      }}>
        Hệ thống hỗ trợ tìm kiếm và kết nối thuê phòng trực tuyến hiện đại. Đầy đủ thông tin, hình ảnh thực tế, tiện nghi đa dạng và giá cả minh bạch.
      </p>
      <button
        id="cta-explore-btn"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, #8b5cf6 100%)',
          color: '#fff',
          border: 'none',
          padding: '14px 36px',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(170, 59, 255, 0.25)',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(170, 59, 255, 0.35)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(170, 59, 255, 0.25)'; }}
      >
        Khám phá ngay
      </button>
    </div>
  );
}
