import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import RoomListPage from './pages/RoomListPage';
import RoomDetailPage from './pages/RoomDetailPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import RoomManagePage from './pages/admin/RoomManagePage';

function App() {
  const [bookingCount, setBookingCount] = useState(3); // Mock cart items

  const handleBook = (e) => {
    e.stopPropagation();
    setBookingCount(prev => prev + 1);
  };

  return (
    <>
      {/* Header Area */}
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
            <span className="bg-danger text-white px-2 py-1 rounded small fw-bold">AI</span>
            <span className="text-white fw-bold fs-5">RentWise</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>Trang chủ</Nav.Link>
              <Nav.Link as={NavLink} to="/rooms">Phòng cho thuê</Nav.Link>
              <Nav.Link as={NavLink} to="/about">Về chúng tôi</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Liên hệ</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={NavLink} to="/cart" className="position-relative d-flex align-items-center">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21h6M5 3h14l-1.5 11h-11L5 3zM9 14v4M15 14v4" />
                </svg>
                {bookingCount > 0 && <Badge bg="danger" pill className="position-absolute translate-middle" style={{ top: '5px', right: '-15px' }}>{bookingCount}</Badge>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage handleBook={handleBook} />} />
        <Route path="/rooms" element={<RoomListPage />} />
        <Route path="/rooms/:id" element={<RoomDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/rooms" element={
          <ProtectedRoute>
            <RoomManagePage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

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
              <li><NavLink to="/">Trang chủ</NavLink></li>
              <li><NavLink to="/rooms">Phòng cho thuê</NavLink></li>
              <li><NavLink to="/about">Về chúng tôi</NavLink></li>
              <li><NavLink to="/contact">Liên hệ</NavLink></li>
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
