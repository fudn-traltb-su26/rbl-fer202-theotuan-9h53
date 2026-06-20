import React from 'react';

export default function Header() {
  return (
    <header style={{
      padding: '20px 40px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'var(--bg)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '28px' }}>🏠</span>
        <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--accent)', letterSpacing: '-0.5px' }}>
          RentalRoom
        </span>
      </div>
      <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: '600', fontSize: '15px' }}>Trang chủ</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500', fontSize: '15px' }}>Phòng trọ</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500', fontSize: '15px' }}>Liên hệ</a>
        <div
          id="header-wishlist-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-bg)',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid var(--accent-border)',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '16px' }}>❤️</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent)' }}>0</span>
        </div>
      </nav>
    </header>
  );
}
