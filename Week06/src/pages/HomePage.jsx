import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner';
import RoomGrid from '../components/RoomGrid';
import CategoryList from '../components/CategoryList';
import SectionWrapper from '../components/SectionWrapper';
import SearchBar from '../components/SearchBar';

const HomePage = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  keyword, 
  setKeyword, 
  filteredRooms, 
  handleAddToBooking 
}) => {
  return (
    <Container className="mt-4 mb-5">
      {/* Hero Section */}
      <Banner />
      
      {/* Category Section */}
      <SectionWrapper title="Loại hình phòng cho thuê" backgroundColor="#f8f9fa">
        <CategoryList 
          categories={categories} 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </SectionWrapper>

      {/* Room Card Section with SearchBar */}
      <SectionWrapper title="Phòng thuê nổi bật" subtitle="Cập nhật mới nhất hôm nay">
        {/* SearchBar nhận onSearch từ App → đây là Lifting State Up */}
        <SearchBar onSearch={(kw) => setKeyword(kw)} />

        {/* Hiển thị kết quả tìm kiếm */}
        {keyword && (
          <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
            🔍 Kết quả tìm kiếm cho: <strong>"{keyword}"</strong> — {filteredRooms.length} phòng tìm thấy
          </p>
        )}

        <RoomGrid rooms={filteredRooms} onReserve={handleAddToBooking} />
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
  );
};

export default HomePage;
