import React from 'react';
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
