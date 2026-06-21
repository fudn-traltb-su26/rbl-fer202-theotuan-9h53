import React from 'react';

const RoomCard = ({ room }) => {
  // Toàn bộ dữ liệu hardcode trực tiếp theo yêu cầu của Thành viên C
  // Fallback về defaultRoom nếu không có props (để đảm bảo yêu cầu hardcode)
  const defaultRoom = {
    image: 'https://picsum.photos/300/200',
    title: 'Phòng trọ ban công đầy nắng',
    address: 'Quận 7, TP. Hồ Chí Minh',
    area: 25,
    price: '3.500.000 VNĐ',
    deposit: '3.500.000 VNĐ'
  };

  // Ưu tiên dùng props room từ RoomGrid truyền vào để thỏa yêu cầu của Thành viên D
  const data = room || defaultRoom;

  const cardStyle = {
    border: '1px solid #eee',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  };

  return (
    <div style={cardStyle} className="room-card">
      <img src={data.image} alt={data.title} style={imgStyle} />
      
      <div style={contentStyle}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#222' }}>{data.title}</h3>
        <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>📍 {data.address}</p>
        
        <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#555' }}>
          📐 Diện tích: <strong>{data.area} m²</strong>
        </p>
        
        <div style={{ margin: 'auto 0 15px 0', borderTop: '1px dashed #ddd', paddingTop: '15px' }}>
          <p style={{ margin: '0 0 5px 0', color: '#ff5a5f', fontWeight: 'bold', fontSize: '18px' }}>
            💰 Giá thuê: {data.price}/tháng
          </p>
          <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>
            🔒 Cọc: {data.deposit}
          </p>
        </div>
        
        <button style={{
          padding: '12px',
          backgroundColor: '#ff5a5f',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          width: '100%'
        }}>
          Đặt giữ chỗ
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
