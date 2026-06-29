import { Navbar, Nav, Container, Badge, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Header = ({ bookingCount = 0, savedCount = 0 }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      {/* Navbar.Toggle tự động tạo hamburger menu ở màn hình nhỏ (< lg) */}
      {/* expand="lg" → collapse dưới breakpoint lg (< 992px) */}
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary d-flex align-items-center gap-2">
            <span className="header-logo-icon">🏠</span> RentalWise
          </Navbar.Brand>

          {/* Hamburger button — hiển thị khi màn hình < lg */}
          <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none" />

          {/* Collapse — ẩn trên mobile, expand trên desktop */}
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto fw-medium fs-6 gap-3">
              <Nav.Link as={Link} to="/" className="px-3 hover-lift text-dark">Trang chủ</Nav.Link>
              <Nav.Link as={Link} to="/rooms" className="px-3 hover-lift text-dark">Phòng thuê</Nav.Link>
              <Nav.Link as={Link} to="/categories" className="px-3 hover-lift text-dark">Danh mục</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="px-3 hover-lift text-dark">Liên hệ</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <Button variant="light" as={Link} to="/bookings" className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-2 fw-medium hover-lift">
                <span className="text-warning">📌</span> 
                <span>Đặt chỗ</span>
                {bookingCount > 0 && <Badge bg="warning" text="dark" pill className="ms-1">{bookingCount}</Badge>}
              </Button>
              <Button variant="light" as={Link} to="/saved" className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-2 fw-medium hover-lift">
                <span className="text-danger">❤️</span> 
                <span>Đã lưu</span>
                {savedCount > 0 && <Badge bg="danger" pill className="ms-1">{savedCount}</Badge>}
              </Button>
              
              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle 
                    variant="light" 
                    id="dropdown-user"
                    className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-1 hover-lift"
                  >
                    <img 
                      src={user.picture} 
                      alt="avatar" 
                      className="rounded-circle header-avatar"
                      referrerPolicy="no-referrer"
                    />
                    <span className="fw-medium">{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="shadow border-0 mt-2 dropdown-menu-rounded">
                    <Dropdown.Item className="py-2">👤 Tài khoản của tôi</Dropdown.Item>
                    <Dropdown.Item className="py-2">🏠 Phòng đã thuê</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout} className="text-danger py-2">
                      🚪 Đăng xuất
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button 
                  variant="primary" 
                  onClick={() => setShowAuthModal(true)}
                  className="rounded-pill px-4 py-2 fw-medium hover-lift btn-brand" 
                >
                  Đăng nhập
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AuthModal 
        show={showAuthModal} 
        handleClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

export default Header;
