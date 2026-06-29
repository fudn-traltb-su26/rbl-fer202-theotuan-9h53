import { useState } from 'react';
import RoomGrid from '../components/RoomGrid';

const HomePage = ({ handleBook }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [city, setCity] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Đang tìm kiếm: Từ khóa "${searchQuery}", Khu vực: ${city || 'Tất cả'}, Giá: ${priceRange || 'Tất cả'}`);
  };

  return (
    <>
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
    </>
  );
};

export default HomePage;
