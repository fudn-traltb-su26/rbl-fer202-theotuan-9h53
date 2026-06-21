import React from 'react';

const CATEGORIES = [
  { id: 1, name: 'Căn hộ dịch vụ', icon: '🏢' },
  { id: 2, name: 'Phòng trọ gác lửng', icon: '🏠' },
  { id: 3, name: 'Studio', icon: '🛋️' },
  { id: 4, name: 'Ở ghép', icon: '👥' },
  { id: 5, name: 'Nhà nguyên căn', icon: '🏡' }
];

const CategoryList = () => {
  return (
    <section className="category-section">
      {CATEGORIES.length > 0 && <h2>Danh mục phòng</h2>}
      
      {CATEGORIES.length > 0 ? (
        <div className="category-grid">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="category-item">
              <span className="category-icon">{category.icon}</span>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có danh mục phòng</p>
      )}
    </section>
  );
};

export default CategoryList;
