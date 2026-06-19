import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Background Đầy Màu Sắc - Aurora */}
      <div className="aurora-bg">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
      </div>

      <Header />
      
      <main className="flex-grow-1">
        <div className="hero-container">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6} className="animate-fade-in-up">
                <div className="badge-wow badge-hot d-inline-block mb-4 shadow-lg">🔥 Xu Hướng 2026</div>
                <h1 className="hero-title">
                  Vũ Trụ <br/>
                  <span className="text-gradient">Không Gian Sống</span>
                </h1>
                <p className="fs-5 text-light opacity-75 mb-5 lh-lg">
                  Bỏ qua những công cụ tìm kiếm nhàm chán. Trải nghiệm nền tảng đặt phòng với thiết kế độc bản, đầy màu sắc rực rỡ và nhanh như chớp.
                </p>
                
                {/* Điểm nhấn 1: Glowing Search Bar (Đường viền chạy) */}
                <div className="glass-search-wrapper mt-4">
                  <div className="glass-search">
                    <div className="px-4 fs-3">🌌</div>
                    <input type="text" className="search-input" placeholder="Khám phá địa điểm yêu thích..." />
                    <button className="btn-search">Khởi Hành</button>
                  </div>
                </div>
                
                <div className="d-flex gap-5 mt-5 pt-4 align-items-center">
                  <div>
                    <h2 className="fw-bolder mb-0 text-white" style={{fontSize: '2.5rem'}}>100K+</h2>
                    <span className="text-info fw-medium fs-5">Phòng trống</span>
                  </div>
                  <div style={{width: '2px', height: '50px', background: 'rgba(255,255,255,0.2)'}}></div>
                  <div>
                    <h2 className="fw-bolder mb-0 text-white" style={{fontSize: '2.5rem'}}>Siêu Tốc</h2>
                    <span className="text-warning fw-medium fs-5">Đặt phòng 1 chạm</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={6} className="d-none d-lg-flex justify-content-center animate-fade-in-up delay-300">
                {/* Điểm nhấn 2: Centerpiece Focal Point Card (Thẻ phòng nổi 3D với vòng sáng pulse ring) */}
                <div className="centerpiece-card" style={{width: '90%', maxWidth: '500px'}}>
                  <div className="glow-ring"></div>
                  <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cyber Room" className="centerpiece-img" />
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fw-bolder mb-0 text-white">Penthouse Neon Q.1</h3>
                    <span className="badge-wow shadow">Premium</span>
                  </div>
                  
                  <p className="text-light opacity-75 mb-4 fs-5">📍 Bitexco Financial Tower, Quận 1</p>
                  
                  <div className="d-flex justify-content-between align-items-center p-3 rounded-4" style={{background: 'rgba(255,255,255,0.1)'}}>
                    <h3 className="fw-bolder mb-0 text-gradient-2">
                      15.000.000đ<span className="fs-6 fw-normal text-white">/tháng</span>
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
      </main>
      <Footer />
    </div>
  )
}

export default App
