const RoomCard = ({ room, onBook }) => {
  // Format price in VND (e.g. 3.800.000 đ)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
  };

  return (
    <div className="room-card">
      <div className="room-card-image-wrapper">
        <img 
          src={`https://picsum.photos/seed/room${room.id}/300/200`} 
          alt={room.title} 
          className="room-card-image"
          loading="lazy"
        />
        {room.featured && <span className="room-badge-featured">Nổi bật</span>}
        <span className="room-badge-category">{room.category}</span>
      </div>

      <div className="room-card-content">
        <div className="room-card-header">
          <div className="room-rating">
            <svg className="icon-star" viewBox="0 0 24 24" width="16" height="16">
              <path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="rating-score">{room.rating}</span>
            <span className="review-count">({room.reviewCount} đánh giá)</span>
          </div>
          <span className="room-area">{room.area} m²</span>
        </div>

        <h3 className="room-card-title" title={room.title}>{room.title}</h3>

        <p className="room-card-address">
          <svg className="icon-pin" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="address-text">{room.address}</span>
        </p>

        <div className="room-amenities">
          {room.amenities && room.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="amenity-tag">
              {amenity === "Wifi" && (
                <svg className="icon-amenity" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.83 14.83a4.5 4.5 0 016.34 0M6 12a8.5 8.5 0 0112 0M3.17 9.17a12.5 12.5 0 0117.66 0" />
                </svg>
              )}
              {amenity === "Điều hòa" && (
                <svg className="icon-amenity" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="10" rx="2" />
                  <path d="M6 19v2M18 19v2M12 15v3M9 15v2M15 15v2" />
                </svg>
              )}
              {amenity !== "Wifi" && amenity !== "Điều hòa" && (
                <svg className="icon-amenity" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {amenity}
            </span>
          ))}
          {room.amenities && room.amenities.length > 3 && (
            <span className="amenity-tag-more">+{room.amenities.length - 3}</span>
          )}
        </div>

        <div className="room-card-footer">
          <div className="room-price-container">
            <span className="price-label">Giá thuê</span>
            <span className="room-price">{formatPrice(room.price)}</span>
            <span className="price-unit">/tháng</span>
          </div>
          <button className="btn-book-now" onClick={onBook}>
            Đặt giữ chỗ
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
