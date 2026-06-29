import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mt-5 text-center">
      <h2>404 - Trang không tồn tại</h2>
      <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
      <Link to="/" className="btn btn-primary mt-3">Về trang chủ</Link>
    </div>
  );
};

export default NotFoundPage;
