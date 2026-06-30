import React from 'react';
import { Table, Button, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingPage = ({ bookingItems = [], onUpdateMonths, onRemove }) => {
  // Hàm định dạng tiền tệ
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
  };

  // Tính tổng tiền
  const totalPrice = bookingItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Container className="py-5" style={{ minHeight: '60vh' }}>
      <h2 className="mb-4 fw-bold text-primary">Giỏ hàng / Danh sách đặt phòng</h2>

      {bookingItems.length === 0 ? (
        <div className="text-center p-5 bg-light rounded shadow-sm border mt-4">
          <h4 className="text-muted fw-normal mb-3">Danh sách đặt phòng của bạn đang trống 📌</h4>
          <p className="text-secondary mb-4">Bạn chưa chọn phòng nào. Hãy quay lại trang danh sách phòng để tìm kiếm.</p>
          <Link to="/rooms" className="btn btn-primary px-4 py-2 fw-bold">
            Quay lại danh sách phòng
          </Link>
        </div>
      ) : (
        <div className="shadow-sm rounded bg-white p-3 border mt-4">
          <Table responsive bordered hover className="align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="text-center">Ảnh thực tế phòng</th>
                <th>Tên bài đăng</th>
                <th>Khu vực</th>
                <th className="text-end">Giá thuê/tháng</th>
                <th className="text-center" style={{ minWidth: '150px' }}>Số tháng dự kiến thuê</th>
                <th className="text-end">Thành tiền tạm tính</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {bookingItems.map((item) => (
                <tr key={item.id}>
                  <td className="text-center" style={{ width: '120px' }}>
                    <Image
                      src={`https://picsum.photos/seed/room${item.id}/300/200`}
                      alt={item.title}
                      thumbnail
                      style={{ width: '100px', height: '70px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>
                    <Link to={`/rooms/${item.id}`} className="text-decoration-none fw-bold text-dark">
                      {item.title}
                    </Link>
                  </td>
                  <td className="text-secondary small">{item.address}</td>
                  <td className="text-end text-danger fw-bold">{formatPrice(item.price)}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '28px', height: '28px', padding: 0 }}
                        onClick={() => onUpdateMonths(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="fw-bold px-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '28px', height: '28px', padding: 0 }}
                        onClick={() => onUpdateMonths(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="text-end text-danger fw-bold">
                    {formatPrice(item.price * item.quantity)}
                  </td>
                  <td className="text-center">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onRemove(item.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-end mt-4 pt-3 border-top">
            <div className="p-4 bg-light rounded border" style={{ minWidth: '350px' }}>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Tổng số phòng:</span>
                <span className="fw-bold">{bookingItems.length} phòng</span>
              </div>
              <div className="d-flex justify-content-between mb-4 align-items-center">
                <span className="fs-5 fw-bold">Tổng tiền tạm tính:</span>
                <span className="fs-4 text-danger fw-bold">{formatPrice(totalPrice)}</span>
              </div>
              <Button variant="primary" className="w-100 py-2 fw-bold" size="lg">
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default BookingPage;
