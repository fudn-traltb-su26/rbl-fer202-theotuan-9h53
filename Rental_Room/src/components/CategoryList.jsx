import React from 'react';

export default function CategoryList() {
  const categories = [
    { id: 1, name: "Studio", count: 3, icon: "🏠" },
    { id: 2, name: "Căn hộ mini", count: 2, icon: "🏢" },
    { id: 3, name: "Phòng trọ gác lửng", count: 2, icon: "🪜" },
    { id: 4, name: "Căn hộ dịch vụ", count: 2, icon: "🛎️" },
    { id: 5, name: "Ở ghép / Homestay", count: 2, icon: "👥" }
  ];

  return (
    <div style={{ padding: '20px', margin: '0 20px 10px' }}>
      <h3 style={{
        textAlign: 'left',
        marginBottom: '20px',
        color: 'var(--text-h)',
        fontSize: '22px',
        fontWeight: '700'
      }}>
        Khám phá theo danh mục
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px'
      }}>
        {categories.map(cat => (
          <div
            key={cat.id}
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>{cat.icon}</div>
            <div style={{ fontWeight: '700', color: 'var(--text-h)', fontSize: '16px', marginBottom: '4px' }}>{cat.name}</div>
            <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '500' }}>{cat.count} phòng có sẵn</div>
          </div>
        ))}
      </div>
    </div>
  );
}
