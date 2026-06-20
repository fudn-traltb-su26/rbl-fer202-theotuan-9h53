import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      borderTop: '1px solid var(--border)',
      marginTop: '60px',
      color: 'var(--text)',
      fontSize: '14px',
      backgroundColor: 'var(--bg)',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '700', color: 'var(--text-h)' }}>
        🏠 RentalRoom System
      </div>
      <p style={{ margin: '0 0 8px 0', fontWeight: '500' }}>
        Dự án Case Study thực hành môn FER202 - Lập trình ReactJS (FPT University)
      </p>
      <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>
        © {new Date().getFullYear()} RentalRoom. Mọi quyền được bảo lưu.
      </p>
    </footer>
  );
}
