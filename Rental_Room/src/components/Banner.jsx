import React from 'react';

export default function Banner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(170, 59, 255, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
      padding: '80px 20px',
      textAlign: 'center',
      borderRadius: '24px',
      margin: '40px 20px 20px',
      border: '1px solid var(--border)',
      boxShadow: 'inset 0 0 40px rgba(170, 59, 255, 0.03)'
    }}>
      <h1 style={{
        fontSize: '42px',
        fontWeight: '800',
        color: 'var(--text-h)',
        marginBottom: '16px',
        letterSpacing: '-1px',
        lineHeight: '1.2'
      }}>
        Tìm Kiếm Phòng Trọ Tiện Nghi Cùng <span style={{ color: 'var(--accent)' }}>RentalRoom</span>
      </h1>
      <p style={{
        color: 'var(--text)',
        fontSize: '18px',
        marginBottom: '32px',
        maxWidth: '650px',
        margin: '0 auto 32px',
        lineHeight: '1.6'
      }}>
        Hệ thống hỗ trợ tìm kiếm và kết nối thuê phòng trực tuyến hiện đại. Đầy đủ thông tin, hình ảnh thực tế, tiện nghi đa dạng và giá cả minh bạch.
      </p>
      <button
        id="cta-explore-btn"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, #8b5cf6 100%)',
          color: '#fff',
          border: 'none',
          padding: '14px 36px',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(170, 59, 255, 0.25)',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(170, 59, 255, 0.35)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(170, 59, 255, 0.25)'; }}
      >
        Khám phá ngay
      </button>
    </div>
  );
}
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  // Yêu cầu: Sử dụng biểu thức JavaScript lồng trong JSX để truyền style động
  // Áp dụng dải màu gradient Sunset ấm áp (cam đào sang hồng nhạt) hòa quyện vào nền tối (opacity 0.1)
  const bannerBackgroundStyle = {
    background: 'linear-gradient(135deg, rgba(255,126,95,0.05) 0%, rgba(254,180,123,0.1) 100%)',
    borderRadius: '40px',
    boxShadow: '0 0 40px rgba(255,126,95,0.05)',
    padding: '40px 0'
  };

  return (
    <div className="hero-container position-relative my-4 mx-3" style={bannerBackgroundStyle}>
      <Container>
        <Row className="align-items-center g-5">
          {/* Cột trái: Nội dung chữ */}
          <Col lg={6} className="animate-fade-in-up">
            <div className="badge-wow badge-hot d-inline-block mb-4 shadow-lg">🔥 Không Gian Ấm Cúng</div>
            <h1 className="hero-title">
              Khám Phá Căn Hộ <br/>
              <span className="text-gradient">Hoàn Hảo Của Bạn</span>
            </h1>
            <p className="fs-5 text-light opacity-75 mb-5 lh-lg">
              Sử dụng công nghệ AI tiên tiến để khám phá hàng ngàn phòng trọ, căn hộ hiện đại phù hợp chính xác với phong cách sống và ngân sách của bạn.
            </p>
            
            {/* Thanh tìm kiếm (Call to action) */}
            <div className="glass-search-wrapper mt-4">
              <div className="glass-search">
                <div className="px-4 fs-3">🏠</div>
                <input type="text" className="search-input" placeholder="Bạn muốn tìm phòng ở đâu?" />
                <button className="btn-search">Tìm phòng ngay</button>
              </div>
            </div>
            
            {/* Thống kê */}
            <div className="d-flex gap-5 mt-5 pt-4 align-items-center">
              <div>
                <h2 className="fw-bolder mb-0 text-white" style={{fontSize: '2.5rem'}}>10K+</h2>
                <span className="text-info fw-medium fs-5">Phòng trống</span>
              </div>
              <div style={{width: '2px', height: '50px', background: 'rgba(255,255,255,0.2)'}}></div>
              <div>
                <h2 className="fw-bolder mb-0 text-white" style={{fontSize: '2.5rem'}}>99%</h2>
                <span className="text-warning fw-medium fs-5">Độ chính xác AI</span>
              </div>
            </div>
          </Col>
          
          {/* Cột phải: Hình ảnh minh họa */}
          <Col lg={6} className="d-none d-lg-flex justify-content-center animate-fade-in-up delay-300">
            <div className="centerpiece-card" style={{width: '90%', maxWidth: '500px'}}>
              <div className="glow-ring"></div>
              {/* Hình ảnh căn hộ ấm cúng */}
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cozy Apartment" className="centerpiece-img" />
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bolder mb-0 text-white">Căn hộ Studio Ánh Sáng</h3>
                <span className="badge-wow shadow">Có sẵn</span>
              </div>
              
              <p className="text-light opacity-75 mb-4 fs-5">📍 Khu công nghệ cao, TP.HCM</p>
              
              <div className="d-flex justify-content-between align-items-center p-3 rounded-4" style={{background: 'rgba(255,255,255,0.1)'}}>
                <h3 className="fw-bolder mb-0 text-gradient-2">
                  4.500.000đ<span className="fs-6 fw-normal text-white">/tháng</span>
                </h3>
                <button className="btn rounded-circle shadow-lg d-flex justify-content-center align-items-center" style={{width:'55px', height:'55px', background: 'linear-gradient(135deg, #ff0844, #ffb199)', border: 'none'}}>
                  <span className="fs-4 text-white">✨</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
