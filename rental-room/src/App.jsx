import { useState } from 'react';
import RoomGrid from './components/RoomGrid';
import './App.css';

function App() {
  const [bookingCount, setBookingCount] = useState(3); // Mock cart items

  const handleBook = (e) => {
    e.stopPropagation();
    setBookingCount(prev => prev + 1);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [city, setCity] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Đang tìm kiếm: Từ khóa "${searchQuery}", Khu vực: ${city || 'Tất cả'}, Giá: ${priceRange || 'Tất cả'}`);
  };

  return (
    <>
      {/* Header Area */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo-container">
            <span className="logo-accent">AI</span>
            <span className="logo-text">RentWise</span>
          </div>

          <nav className="nav-menu">
            <a href="#home" className="nav-link active">Trang chủ</a>
            <a href="#rooms" className="nav-link">Phòng cho thuê</a>
            <a href="#about" className="nav-link">Về chúng tôi</a>
            <a href="#contact" className="nav-link">Liên hệ</a>
          </nav>

          <div className="header-actions">
            <button className="cart-btn" aria-label="Booking Cart">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21h6M5 3h14l-1.5 11h-11L5 3zM9 14v4M15 14v4" />
              </svg>
              {bookingCount > 0 && <span className="cart-badge">{bookingCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">AI-Powered Rental Platform</div>
          <h1 className="hero-title">Tìm Phòng Nhanh Chóng, Sống Trọn Tiện Nghi</h1>
          <p className="hero-subtitle">
            Khám phá hơn 10,000+ phòng trọ, chung cư mini và căn hộ dịch vụ chất lượng cao được xác thực bởi AI RentWise.
          </p>

          {/* Quick Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-group">
              <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Nhập từ khóa, tên đường, khu vực..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="search-select-group">
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Chọn khu vực</option>
                <option value="q9">Quận 9 / Thủ Đức</option>
                <option value="q2">Quận 2 (Thảo Điền)</option>
                <option value="bt">Bình Thạnh</option>
                <option value="q1">Quận 1</option>
              </select>
            </div>

            <div className="search-select-group">
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="">Mức giá thuê</option>
                <option value="under-3m">Dưới 3 triệu</option>
                <option value="3m-5m">3 - 5 triệu</option>
                <option value="5m-10m">5 - 10 triệu</option>
                <option value="over-10m">Trên 10 triệu</option>
              </select>
            </div>

            <button type="submit" className="btn-search">
              Tìm kiếm
            </button>
          </form>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="main-content" id="rooms">
        <RoomGrid onBook={handleBook} />
      </main>

      {/* Footer Area */}
      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-container">
              <span className="logo-accent">AI</span>
              <span className="logo-text">RentWise</span>
            </div>
            <p className="footer-desc">
              Hệ thống tìm kiếm phòng trọ và quản lý căn hộ dịch vụ cao cấp ứng dụng công nghệ AI đầu tiên tại Việt Nam.
            </p>
          </div>
          <div className="footer-links-group">
            <h3>Liên kết</h3>
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#rooms">Phòng cho thuê</a></li>
              <li><a href="#about">Về chúng tôi</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h3>Loại phòng</h3>
            <ul>
              <li><a href="#studio">Phòng Studio</a></li>
              <li><a href="#mini-apartment">Chung cư mini</a></li>
              <li><a href="#service-apartment">Căn hộ dịch vụ</a></li>
              <li><a href="#homestay">KTX / Homestay</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 AI RentWise. Tất cả quyền được bảo lưu. Thiết kế và phát triển bởi @Hoanglong91.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
