import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import RoomGrid from './components/RoomGrid';
import CategoryList from './components/CategoryList';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Container className="mt-4 mb-5">
          {/* Hero Section */}
          <Banner />
          
          {/* Category Section */}
          <CategoryList />

          {/* Room Card Section */}
          <h3 className="fw-bold mb-4 mt-5">Phòng trọ nổi bật</h3>
          <RoomGrid />

          {/* Features Section */}
          <h3 className="text-center fw-bold mb-5 mt-5">Tại sao chọn RentalWise?</h3>
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
