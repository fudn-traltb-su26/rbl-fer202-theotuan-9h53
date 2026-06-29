import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const BookingPage = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 fw-bold">Chi tiết đặt phòng</h2>
      <Row>
        {/* Cột 8: Danh sách các phòng đã chọn lưu */}
        <Col md={8} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-white py-3">
              <h5 className="mb-0 fw-bold">Danh sách phòng đã lưu</h5>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex gap-3">
                  <div style={{ width: '80px', height: '80px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="flex-shrink-0"></div>
                  <div>
                    <h6 className="fw-bold mb-1">Phòng trọ sinh viên cao cấp</h6>
                    <p className="text-muted mb-0 small">Khu công nghệ cao Hòa Lạc</p>
                    <p className="text-primary fw-bold mb-0 mt-1">3,500,000 đ/tháng</p>
                  </div>
                </div>
                <Button variant="outline-danger" size="sm">Xóa</Button>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex gap-3">
                  <div style={{ width: '80px', height: '80px', backgroundColor: '#e9ecef', borderRadius: '8px' }} className="flex-shrink-0"></div>
                  <div>
                    <h6 className="fw-bold mb-1">Căn hộ Studio Vinhomes Grand Park</h6>
                    <p className="text-muted mb-0 small">Phân khu Rainbow, Quận 9</p>
                    <p className="text-primary fw-bold mb-0 mt-1">4,500,000 đ/tháng</p>
                  </div>
                </div>
                <Button variant="outline-danger" size="sm">Xóa</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Cột 4: Khối thông tin tổng tiền cọc kèm nút thanh toán */}
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h5 className="fw-bold mb-4">Tổng quan đặt phòng</h5>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Tổng số phòng:</span>
                <span className="fw-bold">2</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-muted">Tạm tính tiền cọc:</span>
                <span className="fw-bold">8,500,000 đ</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 mt-3">
                <span className="fw-bold fs-5">Tổng cộng:</span>
                <span className="fw-bold fs-5 text-danger">8,500,000 đ</span>
              </div>
              <Button variant="primary" className="w-100 fw-bold py-3">
                Tiến hành thanh toán
              </Button>
              <Button variant="outline-secondary" className="w-100 fw-bold py-2 mt-2">
                Gửi yêu cầu tư vấn
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
