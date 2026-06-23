import { Row, Col, Card } from 'react-bootstrap';

const CATEGORIES = [
  { id: 1, name: 'Căn hộ dịch vụ', icon: '🏢' },
  { id: 2, name: 'Phòng trọ gác lửng', icon: '🪜' },
  { id: 3, name: 'Studio', icon: '🎨' },
  { id: 4, name: 'Ở ghép', icon: '🤝' },
  { id: 5, name: 'Nhà nguyên căn', icon: '🏡' }
];

const CategoryList = () => {
  return (
    <div className="mb-2">
      {CATEGORIES.length > 0 ? (
        <Row className="g-4">
          {CATEGORIES.map((category) => (
            <Col key={category.id} xs={6} md={4} lg={2} className="flex-fill">
              <Card 
                className="text-center h-100 shadow-sm border-1 hover-lift" 
                style={{ cursor: 'pointer', borderRadius: '15px' }}
              >
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
