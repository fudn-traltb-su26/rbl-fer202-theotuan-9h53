import { Navbar, Nav, Container, Badge, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary d-flex align-items-center gap-2">
            <span style={{ fontSize: '1.8rem' }}>🏠</span> RentalWise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-medium fs-6 gap-3">
              <Nav.Link as={Link} to="/" className="px-3 hover-lift text-dark">Trang chủ</Nav.Link>
              <Nav.Link as={Link} to="/rooms" className="px-3 hover-lift text-dark">Phòng thuê</Nav.Link>
              <Nav.Link as={Link} to="/categories" className="px-3 hover-lift text-dark">Danh mục</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="px-3 hover-lift text-dark">Liên hệ</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <Button variant="light" as={Link} to="/saved" className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-2 fw-medium hover-lift">
                <span className="text-danger">❤️</span> 
                <span>Đã lưu</span>
                <Badge bg="danger" pill className="ms-1">0</Badge>
              </Button>
              
              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle 
                    variant="light" 
                    id="dropdown-user"
                    className="d-flex align-items-center gap-2 border-0 shadow-sm rounded-pill px-3 py-1 hover-lift"
                    style={{ background: '#fff' }}
                  >
                    <img 
                      src={user.picture} 
                      alt="avatar" 
                      className="rounded-circle"
                      style={{ width: '28px', height: '28px' }}
                      referrerPolicy="no-referrer"
                    />
                    <span className="fw-medium">{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="shadow border-0 mt-2" style={{ borderRadius: '12px' }}>
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
                  className="rounded-pill px-4 py-2 fw-medium hover-lift" 
                  style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
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
