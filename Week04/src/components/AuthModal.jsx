import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ show, handleClose }) => {
  const { loginWithGoogle } = useAuth();

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      // Giải mã token trả về từ Google để lấy thông tin user
      const decoded = jwtDecode(credentialResponse.credential);
      
      const userData = {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture
      };
      
      loginWithGoogle(userData);
      handleClose(); // Đóng modal khi thành công
    } catch (error) {
      console.error("Lỗi giải mã token Google:", error);
    }
  };

  const handleGoogleError = () => {
    console.error('Đăng nhập Google thất bại');
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold fs-4 text-center w-100">Chào mừng trở lại</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 px-sm-5 pt-3 pb-5">
        <div className="text-center mb-4">
          <p className="text-muted">Đăng nhập để lưu phòng yêu thích và liên hệ chủ nhà.</p>
        </div>

        {/* Nút Đăng nhập Google chính thức */}
        <div className="d-flex justify-content-center mb-4">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            shape="pill"
            theme="outline"
            text="signin_with"
            width="280"
          />
        </div>

        <div className="d-flex align-items-center mb-4">
          <hr className="flex-grow-1" />
          <span className="px-3 text-muted" style={{ fontSize: '0.85rem' }}>HOẶC</span>
          <hr className="flex-grow-1" />
        </div>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email của bạn" disabled />
            <Form.Text className="text-muted">Tính năng đăng nhập truyền thống đang bảo trì.</Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label className="fw-medium">Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" disabled />
          </Form.Group>

          <Button 
            variant="primary" 
            className="w-100 py-2 fw-medium rounded-pill" 
            disabled 
            style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
          >
            Đăng nhập bằng Email
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
