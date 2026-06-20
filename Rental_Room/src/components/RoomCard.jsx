import React from 'react';

export default function RoomCard({ room, imageSrc }) {
  // Safe formatting for price
  const formatPrice = (price) => {
    return price ? price.toLocaleString('vi-VN') : '0';
  };

  return (
    <div className="room-card">
      <div className="room-card-image-container">
        <span className="room-card-badge">{room.category}</span>
        <span className={`room-card-status-badge ${room.available ? '' : 'unavailable'}`}>
          {room.available ? 'Còn trống' : 'Hết phòng'}
        </span>
        <img
          src={imageSrc || `https://picsum.photos/seed/room${room.id}/300/200`}
          alt={room.title}
          className="room-card-image"
          loading="lazy"
        />
      </div>

      <div className="room-card-content">
        <h3 className="room-card-title" title={room.title}>
          {room.title}
        </h3>

        <div className="room-card-address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ minWidth: '14px', color: '#8b5cf6' }}
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{room.address}</span>
        </div>

        <div className="room-card-meta">
          <div className="room-card-area">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: '#6b7280' }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
            </svg>
            <span>{room.area} m²</span>
          </div>

          <div className="room-card-rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: '#f59e0b' }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>
              {room.rating} ({room.reviewCount})
            </span>
          </div>
        </div>

        <div className="room-card-price-container">
          <span className="room-card-price-label">Giá thuê tháng</span>
          <span className="room-card-price-value">
            {formatPrice(room.price)} VND<span style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>/tháng</span>
          </span>
        </div>

        <button
          id={`room-save-btn-${room.id}`}
          className="room-card-button"
          type="button"
        >
          Lưu quan tâm
        </button>
      </div>
    </div>
  );
}
