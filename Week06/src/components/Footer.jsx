import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    /* Dùng Bootstrap utility classes thay vì inline style */
    <footer className="mt-auto pt-5 pb-4 footer-dark">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6} className="pe-lg-5">
            <h4 className="fw-bold mb-3 text-white d-flex align-items-center gap-2">
              <span>🏠</span> RentalWise
            </h4>
            <p className="text-light lh-base">
              Nền tảng số 1 về tìm kiếm và đặt phòng trọ. Chúng tôi mang đến giải pháp kết nối nhanh chóng, an toàn và tiện lợi nhất giữa người thuê và chủ nhà.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-light hover-lift footer-social-link text-decoration-none fs-5">📱</a>
              <a href="#" className="text-light hover-lift footer-social-link text-decoration-none fs-5">🌐</a>
              <a href="#" className="text-light hover-lift footer-social-link text-decoration-none fs-5">✉️</a>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="text-white mb-4 fw-semibold">Khám phá</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-light text-decoration-none hover-lift d-inline-block">Trang chủ</Link></li>
              <li><Link to="/rooms" className="text-light text-decoration-none hover-lift d-inline-block">Phòng thuê</Link></li>
              <li><Link to="/categories" className="text-light text-decoration-none hover-lift d-inline-block">Danh mục</Link></li>
              <li><Link to="/saved" className="text-light text-decoration-none hover-lift d-inline-block">Đã lưu</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="text-white mb-4 fw-semibold">Chính sách</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className="text-light text-decoration-none hover-lift d-inline-block">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-light text-decoration-none hover-lift d-inline-block">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-light text-decoration-none hover-lift d-inline-block">Quy định thuê phòng</a></li>
              <li><a href="#" className="text-light text-decoration-none hover-lift d-inline-block">Giải quyết khiếu nại</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="text-white mb-4 fw-semibold">Liên hệ</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 text-light">
              <li className="d-flex align-items-start gap-2">
                <span className="fs-5">📍</span>
                <span>Khu đô thị FPT</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="fs-5">📞</span>
                <span>0123 456 789</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="fs-5">✉️</span>
                <span>support@rentalwise.com</span>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 footer-divider" />

        <div className="text-center text-light small">
          <p className="mb-0">&copy; {new Date().getFullYear()} RentalWise. All rights reserved. Designed for FER202.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
