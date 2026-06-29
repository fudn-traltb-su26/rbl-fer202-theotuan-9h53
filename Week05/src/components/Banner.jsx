import { Container, Button } from 'react-bootstrap';

const Banner = () => {
  // Sử dụng CSS class 'banner-hero' thay vì style={{}} inline
  // → style phức tạp (background-image, gradient overlay) được tách ra file App.css
  return (
    <div className="banner-hero p-5 mb-5 text-white rounded-4 shadow-lg text-center d-flex align-items-center">
      <Container className="py-5">
        <h1 className="display-4 fw-bold mb-4 text-white">
          Tìm Kiếm <span className="text-info">Phòng Trọ &amp; Căn Hộ</span> Lý Tưởng
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
