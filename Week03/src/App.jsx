import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import RoomGrid, { ROOMS_DATA } from './components/RoomGrid';
import CategoryList from './components/CategoryList';
import SectionWrapper from './components/SectionWrapper';
import './App.css';

function App() {
  const handleReserve = (room) => {
    alert(`Bạn vừa nhấn đặt phòng: ${room.title}`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Container className="mt-4 mb-5">
          {/* Hero Section */}
          <Banner />
          
          {/* Category Section */}
          <SectionWrapper 
            title="Danh mục nổi bật" 
            subtitle="Khám phá phòng trọ theo các loại hình phổ biến nhất"
            backgroundColor="#f8f9fa"
          >
            <CategoryList />
          </SectionWrapper>

          {/* Room Card Section */}
          <SectionWrapper 
            title="Phòng trọ nổi bật" 
            subtitle="Danh sách các phòng cho thuê chất lượng cao có giá tốt nhất vừa mới cập nhật"
            backgroundColor="#ffffff"
          >
            <RoomGrid rooms={ROOMS_DATA} onReserve={handleReserve} />
          </SectionWrapper>

          {/* Features Section */}
          <SectionWrapper 
            title="Tại sao chọn RentalWise?" 
            subtitle="Những tính năng ưu việt giúp trải nghiệm tìm phòng trở nên dễ dàng"
            backgroundColor="#eef2ff"
          >
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
          </SectionWrapper>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
