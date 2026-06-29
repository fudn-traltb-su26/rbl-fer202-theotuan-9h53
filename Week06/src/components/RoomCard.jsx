import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CATEGORY_MAP = {
  1: 'Căn hộ dịch vụ',
  2: 'Phòng trọ gác lửng',
  3: 'Studio',
  4: 'Ở ghép',
  5: 'Nhà nguyên căn'
};

const RoomCard = ({ room, onReserve }) => {
  if (!room) return null;

  return (
    <Card className="h-100 room-card border-0 overflow-hidden">
      {/* Ảnh phòng */}
      <div className="position-relative room-card-img-wrapper">
        <Card.Img
          variant="top"
          src={`https://picsum.photos/seed/room${room.id}/300/200`}
          alt="Room image"
          className="room-card-img"
        />
        {/* Badge "Còn trống" góc phải */}
        {room.isAvailable && (
          <Badge bg="success" className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill shadow-sm">
            Còn trống
          </Badge>
        )}
        {/* Badge giảm giá góc trái */}
        {room.originalPrice > room.price && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded-pill shadow-sm">
            -{Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column p-3">
        {/* Badge danh mục */}
        <div className="mb-2">
          <Badge bg="info" className="room-category-badge">
            {CATEGORY_MAP[room.categoryId] || 'Phòng cho thuê'}
          </Badge>
        </div>

        {/* Tiêu đề — clamp 2 dòng */}
        <Card.Title className="fw-bold mb-1 room-card-title" title={room.title}>
          {room.title}
        </Card.Title>

        {/* Địa chỉ — clamp 2 dòng */}
        <p className="text-muted small mb-3 room-card-address">
          📍 {room.address}
        </p>

        {/* Diện tích + Giá thuê */}
        <Row className="g-2 mb-3 text-center">
          <Col xs={4}>
            <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column justify-content-center">
              <div className="room-stat-label">Diện tích</div>
              <div className="fw-bold room-stat-value">{room.area} m²</div>
            </div>
          </Col>
          <Col xs={8}>
            <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column justify-content-center">
              <div className="room-stat-label">Giá thuê/Tháng</div>
              {/* text-nowrap ngăn số bị vỡ dòng giữa chừng */}
              <div className="fw-bold text-primary room-price text-nowrap">
                {room.price.toLocaleString('vi-VN')}đ/th
              </div>
            </div>
          </Col>
        </Row>

        {/* Tiền cọc */}
        <div className="d-flex justify-content-between align-items-center mb-3 px-1">
          <span className="text-muted small">Tiền đặt cọc:</span>
          <span className="fw-semibold text-dark small">{room.deposit} VNĐ</span>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2 mt-auto">
          <Button as={Link} to={`/rooms/${room.id}`} variant="outline-primary" className="flex-grow-1 rounded-pill fw-medium py-2 btn-sm text-decoration-none">
            Xem chi tiết
          </Button>
          <Button
            variant="primary"
            className="flex-grow-1 rounded-pill fw-medium py-2 btn-sm shadow-sm"
            onClick={() => onReserve(room)}
            disabled={!room.isAvailable}
          >
            Đặt giữ chỗ
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
