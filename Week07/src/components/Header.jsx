import { Navbar, Nav, Container, Badge, Button, Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = ({ savedCount = 0 }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Navbar: expand="lg" → collapse thành hamburger dưới breakpoint lg */}
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
        <Container>
          {/* Brand logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary d-flex align-items-center gap-2">
            <span className="navbar-brand-icon">🏠</span> RentalWise
          </Navbar.Brand>

          {/* Hamburger toggle: tự động hiện ở mobile nhờ expand="lg" */}
          <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none" />

          <Navbar.Collapse id="main-navbar-nav">
            {/* Nav links ở giữa */}
            <Nav className="mx-auto fw-medium fs-6 gap-2">
              <Nav.Link as={NavLink} to="/" end className="px-3 text-dark nav-link-custom">Trang chủ</Nav.Link>
              <Nav.Link as={NavLink} to="/rooms" className="px-3 text-dark nav-link-custom">Phòng thuê</Nav.Link>
              <Nav.Link as={NavLink} to="/categories" className="px-3 text-dark nav-link-custom">Danh mục</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="px-3 text-dark nav-link-custom">Liên hệ</Nav.Link>
            </Nav>

            {/* Action buttons bên phải */}
            <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 flex-wrap">
              <Button
                variant={isDark ? "dark" : "light"}
                onClick={toggleTheme}
                className="d-flex align-items-center justify-content-center border-0 shadow-sm rounded-circle hover-lift"
                style={{ width: '40px', height: '40px' }}
                title={isDark ? "Chuyển sang chế độ Sáng" : "Chuyển sang chế độ Tối"}
              >
                {isDark ? '☀️' : '🌙'}
              </Button>

              <Button
                variant="light"
                as={Link}
                to="/booking"
                className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-2 fw-medium hover-lift"
              >
                <span className="text-warning">📌</span>
                <span>Đặt chỗ</span>
                {totalItems > 0 && <Badge bg="warning" text="dark" pill className="ms-1">{totalItems}</Badge>}
              </Button>

              <Button
                variant="light"
                as={Link}
                to="/saved"
                className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-2 fw-medium hover-lift"
              >
                <span className="text-danger">❤️</span>
                <span>Đã lưu</span>
                {savedCount > 0 && <Badge bg="danger" pill className="ms-1">{savedCount}</Badge>}
              </Button>

              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-user"
                    className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-1 hover-lift bg-white"
                  >
                    <img
                      src={user.picture}
                      alt="avatar"
                      className="rounded-circle user-avatar"
                      referrerPolicy="no-referrer"
                    />
                    <span className="fw-medium">{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="shadow border-0 mt-2 dropdown-menu-custom">
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
                  className="rounded-pill px-4 py-2 fw-medium hover-lift btn-login"
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
