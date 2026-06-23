import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const CategoryList = ({ categories }) => {
  return (
    <div className="mt-5 mb-4">
      <h3 className="fw-bold mb-4">Danh mục nổi bật</h3>

      {/* Sử dụng toán tử điều kiện bậc ba (Ternary operator) */}
      {categories.length > 0 ? (
        <Row className="g-4">
          {/* Áp dụng toán tử && (Short-circuit evaluation): Chỉ tiến hành hiển thị danh sách nếu categories.length > 0 */}
          {categories.length > 0 && categories.map((category) => (
            <Col key={category.id} xs={6} md={4} lg={2} className="flex-fill">
              <Card className="text-center h-100 shadow-sm border-1 hover-lift" style={{ cursor: 'pointer', borderRadius: '15px' }}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-3">
                  <div className="display-5 mb-2">{category.icon}</div>
                  <Card.Title className="fs-6 fw-bold m-0">{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted fs-5 py-5">Không có danh mục phòng</p>
      )}
    </div>
  );
};

export default CategoryList;
