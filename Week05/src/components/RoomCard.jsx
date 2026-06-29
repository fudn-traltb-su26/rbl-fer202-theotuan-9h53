import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const RoomCard = ({ room, onReserve }) => {
  // Check if room data is provided, otherwise return null or fallback
  if (!room) return null;

  return (
    // h-100 đảm bảo Card chiếm toàn bộ chiều cao của Col chứa nó (Col cũng có h-100)
    // → các card trong cùng một hàng sẽ có chiều cao bằng nhau
    <Card className="h-100 shadow hover-lift border-0 overflow-hidden rounded-4 room-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={`https://picsum.photos/seed/room${room.id}/300/200`} 
          alt="Room image" 
          className="room-card-img"
        />
        {room.isAvailable && (
          <Badge bg="success" className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm">
            Còn trống
          </Badge>
        )}
        {room.originalPrice > room.price && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill shadow-sm">
            -{Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
          </Badge>
        )}
      </div>
      
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="fw-bold mb-2 text-truncate room-card-title" title={room.title}>
          {room.title}
        </Card.Title>
        <Card.Text className="text-muted small mb-3">
          <i className="bi bi-geo-alt-fill text-danger me-1"></i>
          {room.address}
        </Card.Text>
        
        <Row className="g-2 mb-3 text-center mt-auto">
          <Col xs={4}>
            <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column justify-content-center">
              <div className="text-muted mb-1 small">Diện tích</div>
              <div className="fw-bold">{room.area} m²</div>
            </div>
          </Col>
          <Col xs={8}>
            <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column justify-content-center">
              <div className="text-muted mb-1 small">Giá thuê/Tháng</div>
              <div className="fw-bold text-primary">{room.price.toLocaleString('vi-VN')}đ/tháng</div>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-3 px-1">
          <span className="text-muted small">Tiền đặt cọc:</span>
          <span className="fw-semibold text-dark">{room.deposit} VNĐ</span>
        </div>

        <div className="d-flex gap-2 mt-auto">
          <Button variant="outline-primary" className="flex-grow-1 rounded-pill fw-medium py-2">
            Xem chi tiết
          </Button>
          <Button 
            variant="primary" 
            className="flex-grow-1 rounded-pill fw-medium py-2 shadow-sm"
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
