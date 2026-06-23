import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const RoomCard = () => {
  // Toàn bộ dữ liệu hardcode theo yêu cầu
  const room = {
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Phòng trọ sinh viên cao cấp, Full nội thất gần ĐH FPT",
    address: "Khu công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội",
    area: "25",
    price: "3,500,000",
    deposit: "3,500,000",
    isAvailable: true
  };

  return (
    <Card className="h-100 shadow hover-lift border-0 overflow-hidden" style={{ borderRadius: '16px', transition: 'transform 0.2s ease-in-out' }}>
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={room.imageUrl} 
          alt="Room image" 
          style={{ height: '240px', objectFit: 'cover' }}
        />
        {room.isAvailable && (
          <Badge bg="success" className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm">
            Còn trống
          </Badge>
        )}
      </div>
      
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold mb-2 text-truncate" title={room.title} style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
          {room.title}
        </Card.Title>
        <Card.Text className="text-muted small mb-4">
          <i className="bi bi-geo-alt-fill text-danger me-1"></i>
          {room.address}
        </Card.Text>
        
        <Row className="g-3 mb-4 text-center mt-auto">
          <Col xs={4}>
            <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column justify-content-center">
              <div className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>Diện tích</div>
              <div className="fw-bold">{room.area} m²</div>
            </div>
          </Col>
          <Col xs={8}>
            <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column justify-content-center">
              <div className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>Giá thuê/Tháng</div>
              <div className="fw-bold text-primary fs-5">{room.price} VNĐ</div>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4 px-1">
          <span className="text-muted small">Tiền đặt cọc:</span>
          <span className="fw-semibold text-dark">{room.deposit} VNĐ</span>
        </div>

        <div className="d-flex gap-2 mt-auto">
          <Button variant="outline-primary" className="flex-grow-1 rounded-pill fw-medium py-2">
            Xem chi tiết
          </Button>
          <Button variant="primary" className="flex-grow-1 rounded-pill fw-medium py-2 shadow-sm">
            Đặt giữ chỗ
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
