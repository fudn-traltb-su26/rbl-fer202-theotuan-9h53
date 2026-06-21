import React from 'react';
import './RoomCard.css';

const RoomCard = () => {
  // Hardcoded data based on requirements
  const roomData = {
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    title: 'Phòng trọ cao cấp full nội thất, ban công thoáng mát',
    address: 'Quận 7, TP. Hồ Chí Minh',
    area: 35, // m2
    price: '4.500.000', // per month
    deposit: '4.500.000',
    status: 'Còn trống'
  };

  return (
    <div className="room-card">
      <div className="room-card-image-container">
        <img 
          src={roomData.imageUrl} 
          alt={roomData.title} 
          className="room-card-image"
        />
        <div className="room-card-badge">{roomData.status}</div>
      </div>
      
      <div className="room-card-content">
        <h3 className="room-card-title">{roomData.title}</h3>
        
        <div className="room-card-location">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{roomData.address}</span>
        </div>

        <div className="room-card-features">
          <div className="room-card-feature">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{roomData.area} m²</span>
          </div>
          {/* We can add more features here like bed, bath if needed, but requirements only ask for area */}
        </div>

        <div className="room-card-price-section">
          <div className="room-card-price-wrapper">
            <div className="room-card-price">
              {roomData.price}₫<span className="room-card-price-period">/tháng</span>
            </div>
            <div className="room-card-deposit">
              Cọc: {roomData.deposit}₫
            </div>
          </div>
        </div>

        <div className="room-card-actions">
          <button className="btn-primary">
            Đặt giữ chỗ
          </button>
          <button className="btn-secondary" title="Xem chi tiết">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
