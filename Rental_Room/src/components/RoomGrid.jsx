import React from 'react';
import RoomCard from './RoomCard';

// Mảng dữ liệu nội bộ ROOMS_DATA chứa thông tin ít nhất 4 phòng
const ROOMS_DATA = [
  { id: 1, title: 'Căn hộ Studio Full Nội Thất', address: 'Quận 1, TP. HCM', area: 30, price: '6.000.000 VNĐ', deposit: '6.000.000 VNĐ' },
  { id: 2, title: 'Phòng trọ gác lửng an ninh', address: 'Bình Thạnh, TP. HCM', area: 20, price: '3.200.000 VNĐ', deposit: '3.000.000 VNĐ' },
  { id: 3, title: 'Ký túc xá sinh viên cao cấp', address: 'Quận 10, TP. HCM', area: 45, price: '1.500.000 VNĐ', deposit: '0 VNĐ' },
  { id: 4, title: 'Nhà nguyên căn 2 lầu', address: 'Phú Nhuận, TP. HCM', area: 80, price: '12.000.000 VNĐ', deposit: '24.000.000 VNĐ' },
  { id: 5, title: 'Phòng ban công riêng biệt', address: 'Quận 7, TP. HCM', area: 25, price: '4.500.000 VNĐ', deposit: '4.500.000 VNĐ' }
];

const RoomGrid = () => {
  const sectionStyle = {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontSize: '28px' }}>
        Phòng Thuê Nổi Bật
      </h2>
      
      <div style={gridStyle}>
        {ROOMS_DATA.map((room) => (
          <RoomCard 
            key={room.id} 
            room={{
              ...room,
              // Template Literal truyền link ảnh động ngẫu nhiên theo ID
              image: `https://picsum.photos/seed/room${room.id}/300/200`
            }} 
          />
        ))}
      </div>
    </section>
  );
};

export default RoomGrid;
