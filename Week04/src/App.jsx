import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import RoomGrid from './components/RoomGrid';
import CategoryList from './components/CategoryList';
import SectionWrapper from './components/SectionWrapper';
import SearchBar from './components/SearchBar';
import './App.css';

const CATEGORIES = [
  { id: 1, name: 'Căn hộ dịch vụ', icon: '🏢' },
  { id: 2, name: 'Phòng trọ gác lửng', icon: '🪜' },
  { id: 3, name: 'Studio', icon: '🎨' },
  { id: 4, name: 'Ở ghép', icon: '🤝' },
  { id: 5, name: 'Nhà nguyên căn', icon: '🏡' }
];

const ALL_ROOMS = [
  {
    id: 1,
    title: "Phòng trọ sinh viên cao cấp, Full nội thất gần ĐH FPT",
    address: "Khu công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội",
    area: "25",
    price: 3500000,
    originalPrice: 4000000,
    deposit: "3,500,000",
    isAvailable: true
  },
  {
    id: 2,
    title: "Căn hộ Studio Vinhomes Grand Park, Đầy đủ tiện ích",
    address: "Phân khu Rainbow, Vinhomes Grand Park, Quận 9, TP. HCM",
    area: "30",
    price: 4500000,
    deposit: "5,000,000",
    isAvailable: true
  },
  {
    id: 3,
    title: "Chung cư mini khép kín sạch sẽ gần ĐH GTVT",
    address: "Đường 385, Phường Tăng Nhơn Phú A, Quận 9, TP. Thủ Đức",
    area: "28",
    price: 4200000,
    deposit: "4,200,000",
    isAvailable: true
  },
  {
    id: 4,
    title: "Phòng trọ gác lửng giá rẻ cho sinh viên gần ĐH SPKT",
    address: "Đường Hoàng Diệu 2, Phường Linh Trung, TP. Thủ Đức",
    area: "20",
    price: 2800000,
    deposit: "3,000,000",
    isAvailable: false
  }
];

function App() {
  // State lưu từ khóa tìm kiếm — lifting state up từ SearchBar lên App
  const [keyword, setKeyword] = useState('');

  const handleReserve = (room) => {
    console.log("Bạn vừa nhấn đặt phòng:", room);
  };

  // Derived state: lọc phòng theo keyword (không lưu riêng, tính trực tiếp từ state)
  const filteredRooms = ALL_ROOMS.filter(room =>
    !keyword || room.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Container className="mt-4 mb-5">
          {/* Hero Section */}
          <Banner />
          
          {/* Category Section */}
          <SectionWrapper title="Loại hình phòng cho thuê" backgroundColor="#f8f9fa">
            <CategoryList categories={CATEGORIES} />
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

            <RoomGrid rooms={filteredRooms} onReserve={handleReserve} />
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


