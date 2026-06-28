import { Container, Button } from 'react-bootstrap';

const Banner = () => {
  // Biểu thức JavaScript lồng trong JSX để truyền style động
  // Sử dụng background image với dải màu overlay (gradient background)


  return (
    <div 
      className="p-5 mb-5 text-white rounded-4 shadow-lg text-center d-flex align-items-center" 
      style={{ 
        background: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.6)), url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80) center/cover no-repeat',
        minHeight: '500px' 
      }}
    >
      <Container className="py-5">
        <h1 className="display-4 fw-bold mb-4 text-white">
          Tìm Kiếm <span className="text-info">Phòng Trọ & Căn Hộ</span> Lý Tưởng
        </h1>
        <p className="lead mb-5 mx-auto text-light w-75">
          Khám phá hàng ngàn phòng trọ, căn hộ cho thuê chất lượng cao với giá cả hợp lý nhất. 
          Môi trường sống tiện nghi, ấm cúng và an toàn đang chờ đón bạn.
        </p>
        <Button 
          variant="primary" 
          size="lg" 
          className="px-5 py-3 rounded-pill fw-semibold hover-lift border-0 shadow-lg" 
        >
          Tìm phòng ngay
        </Button>
      </Container>
    </div>
  );
};

export default Banner;
