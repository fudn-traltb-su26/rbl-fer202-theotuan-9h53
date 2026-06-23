import { Container, Button } from 'react-bootstrap';

const Banner = () => {
  // Biểu thức JavaScript lồng trong JSX để truyền style động
  // Sử dụng background image với dải màu overlay (gradient background)


  return (
    <div 
      className="mb-5" 
      style={{
        background: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.6)), url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80) center/cover no-repeat',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '1rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container className="text-center text-white">
        <h1 className="display-4 fw-bold mb-4 text-white">
          Tìm Kiếm <span style={{ color: '#A5B4FC' }}>Phòng Trọ & Căn Hộ</span> Lý Tưởng
        </h1>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px', color: '#F3F4F6' }}>
          Khám phá hàng ngàn phòng trọ, căn hộ cho thuê chất lượng cao với giá cả hợp lý nhất. 
          Môi trường sống tiện nghi, ấm cúng và an toàn đang chờ đón bạn.
        </p>
        <Button 
          variant="primary" 
          size="lg" 
          className="px-5 py-3 rounded-pill fw-semibold hover-lift border-0 shadow-lg" 
          style={{ backgroundColor: '#4F46E5', transition: 'all 0.3s ease' }}
        >
          Tìm phòng ngay
        </Button>
      </Container>
    </div>
  );
};

export default Banner;
