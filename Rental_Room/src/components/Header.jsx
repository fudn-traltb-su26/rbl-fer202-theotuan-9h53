import React from 'react';

export default function Header() {
  return (
    <header style={{
      padding: '20px 40px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'var(--bg)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '28px' }}>🏠</span>
        <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--accent)', letterSpacing: '-0.5px' }}>
          RentalRoom
        </span>
      </div>
      <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: '600', fontSize: '15px' }}>Trang chủ</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500', fontSize: '15px' }}>Phòng trọ</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500', fontSize: '15px' }}>Liên hệ</a>
        <div
          id="header-wishlist-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-bg)',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid var(--accent-border)',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '16px' }}>❤️</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent)' }}>0</span>
        </div>
      </nav>
    </header>
  );
}
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="glass-nav sticky-top py-3">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="me-2 fs-2">🏠</span>
          <span className="brand-text">CozySpace</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none bg-white bg-opacity-25" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link-custom">Trang chủ</Nav.Link>
            <Nav.Link href="/rooms" className="nav-link-custom">Phòng thuê</Nav.Link>
            <Nav.Link href="/categories" className="nav-link-custom">Danh mục</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Liên hệ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/saved" className="p-0">
              <div className="btn rounded-pill px-4 py-2 d-flex align-items-center btn-saved-custom">
                <span className="me-2 fs-5">❤️</span>
                <span className="fw-bold me-2 text-white">Đã lưu</span>
                <Badge bg="danger" className="py-2 px-3 shadow" pill>0</Badge>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
