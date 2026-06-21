import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      borderTop: '1px solid var(--border)',
      marginTop: '60px',
      color: 'var(--text)',
      fontSize: '14px',
      backgroundColor: 'var(--bg)',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '700', color: 'var(--text-h)' }}>
        🏠 RentalRoom System
      </div>
      <p style={{ margin: '0 0 8px 0', fontWeight: '500' }}>
        Dự án Case Study thực hành môn FER202 - Lập trình ReactJS (FPT University)
      </p>
      <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>
        © {new Date().getFullYear()} RentalRoom. Mọi quyền được bảo lưu.
      </p>
    </footer>
  );
}
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-wow py-5 mt-5">
      <Container>
        <Row className="gy-5 pb-4">
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-4">
              <span className="me-2 fs-2" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>🏠</span>
              <span className="text-white fw-bold fs-3">CozySpace</span>
            </div>
            <p className="lh-lg text-muted fs-6 pe-4">
              Hệ thống tìm kiếm và đặt phòng trọ uy tín, nhanh chóng và tiện lợi hàng đầu. 
              Giao diện tối ưu, mang lại trải nghiệm "WOW" từ cái nhìn đầu tiên.
            </p>
          </Col>
          <Col lg={4} md={6}>
            <h5 className="footer-title">Chính sách & Hỗ trợ</h5>
            <ul className="list-unstyled mt-4 gap-3 d-flex flex-column">
              <li><a href="/terms" className="text-muted text-decoration-none hover-white transition-all">Điều khoản thuê phòng</a></li>
              <li><a href="/privacy" className="text-muted text-decoration-none hover-white transition-all">Chính sách bảo mật</a></li>
              <li><a href="/faq" className="text-muted text-decoration-none hover-white transition-all">Câu hỏi thường gặp</a></li>
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h5 className="footer-title">Thông tin liên hệ</h5>
            <ul className="list-unstyled mt-4 lh-lg d-flex flex-column gap-3">
              <li className="d-flex align-items-center">
                <div className="bg-white bg-opacity-10 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center text-white" style={{width: '40px', height: '40px'}}>📍</div>
                <span className="fs-6">Đại học FPT Đà Nẵng</span>
              </li>
              <li className="d-flex align-items-center">
                <div className="bg-white bg-opacity-10 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center text-white" style={{width: '40px', height: '40px'}}>📞</div>
                <span className="fs-6">0123 456 789</span>
              </li>
              <li className="d-flex align-items-center">
                <div className="bg-white bg-opacity-10 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center text-white" style={{width: '40px', height: '40px'}}>📧</div>
                <span className="fs-6">support@cozyspace.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="mb-0 text-secondary fs-6">
            &copy; {new Date().getFullYear()} CozySpace. Thiết kế chuẩn WOW ✨
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
