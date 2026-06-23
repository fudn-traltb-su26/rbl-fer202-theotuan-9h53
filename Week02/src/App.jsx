import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Container className="mt-4 mb-5">
          {/* Hero Section */}
          <div className="hero-section text-center">
            <h1 className="display-4 fw-bold mb-4">
              Tìm kiếm phòng trọ <span className="text-gradient">nhanh chóng & dễ dàng</span>
            </h1>
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Khám phá hàng ngàn phòng trọ, căn hộ cho thuê chất lượng cao với giá cả hợp lý nhất. 
              Môi trường sống tiện nghi, an toàn đang chờ đón bạn tại CozySpace.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill fw-semibold shadow-sm hover-lift" style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}>
                Khám phá ngay
              </Button>
              <Button variant="outline-dark" size="lg" className="px-5 py-3 rounded-pill fw-semibold hover-lift">
                Đăng tin cho thuê
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <h3 className="text-center fw-bold mb-5 mt-5">Tại sao chọn CozySpace?</h3>
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card hover-lift">
                <div className="feature-icon">🔍</div>
                <h5 className="fw-bold">Tìm kiếm thông minh</h5>
                <p className="text-muted mb-0">Bộ lọc chi tiết giúp bạn dễ dàng tìm được phòng trọ ưng ý theo khu vực, mức giá, và tiện ích.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card hover-lift">
                <div className="feature-icon">🛡️</div>
                <h5 className="fw-bold">Thông tin xác thực</h5>
                <p className="text-muted mb-0">Tất cả tin đăng đều được kiểm duyệt chặt chẽ, đảm bảo thông tin chính xác và hình ảnh chân thực nhất.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card hover-lift">
                <div className="feature-icon">💬</div>
                <h5 className="fw-bold">Kết nối dễ dàng</h5>
                <p className="text-muted mb-0">Trao đổi trực tiếp với chủ nhà thông qua hệ thống tin nhắn nhanh chóng và bảo mật tuyệt đối.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
