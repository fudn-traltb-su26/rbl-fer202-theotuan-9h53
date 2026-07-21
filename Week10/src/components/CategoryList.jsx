import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';


const CategoryList = ({ categories = [], activeCategory, onSelectCategory }) => {

  return (
    <div className="mt-5 mb-4">
      {/* Sử dụng toán tử điều kiện bậc ba (Ternary operator) */}
      {categories.length > 0 ? (
        <Row xs={2} sm={3} md={5} className="g-3">
          {/* Áp dụng toán tử && (Short-circuit evaluation): Chỉ tiến hành hiển thị danh sách nếu categories.length > 0 */}
          {categories.length > 0 && categories.map((category) => (
            <Col key={category.id}>
              <Card 
                className={`text-center h-100 shadow-sm border-0 hover-lift ${activeCategory === category.id ? 'bg-primary bg-opacity-10' : ''}`} 
                role="button"
                onClick={() => onSelectCategory(activeCategory === category.id ? null : category.id)}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-3">
                  <div className="display-5 mb-2">{category.icon}</div>
                  <Card.Title className={`fs-6 fw-bold m-0 ${activeCategory === category.id ? 'text-primary' : ''}`}>
                    {category.name}
                  </Card.Title>
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
