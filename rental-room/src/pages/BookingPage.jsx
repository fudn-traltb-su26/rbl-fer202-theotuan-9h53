import React from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap';

const BookingPage = ({ bookingItems = [], onUpdateMonths, onRemove }) => {
  const totalPrice = bookingItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (bookingItems.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h4 className="py-5">Danh sách đặt phòng của bạn đang trống 📌</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Danh sách phòng đã đặt</h2>
      <Table responsive bordered hover className="align-middle">
        <thead className="table-light">
          <tr>
            <th>Ảnh thực tế phòng</th>
            <th>Tên bài đăng</th>
            <th>Khu vực</th>
            <th>Giá thuê/tháng</th>
            <th>Số tháng dự kiến thuê</th>
            <th>Thành tiền tạm tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {bookingItems.map((item) => (
            <tr key={item.id}>
              <td className="text-center">
                <Image 
                  src={item.image || 'https://via.placeholder.com/150'} 
                  alt={item.title} 
                  width={100} 
                  height={70} 
                  rounded 
                  style={{ objectFit: 'cover' }} 
                />
              </td>
              <td>{item.title}</td>
              <td>{item.address}</td>
              <td>{item.price.toLocaleString()} VNĐ</td>
              <td>
                <div className="d-flex align-items-center justify-content-start">
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => onUpdateMonths(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => onUpdateMonths(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td className="fw-bold text-danger">{(item.price * item.quantity).toLocaleString()} VNĐ</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => onRemove(item.id)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end mt-4 p-3 bg-light rounded">
        <h4>Tổng tiền: <span className="text-danger fw-bold">{totalPrice.toLocaleString()} VNĐ</span></h4>
        <Button variant="primary" size="lg" className="mt-2 px-5">Tiến hành thanh toán</Button>
      </div>
    </Container>
  );
};

export default BookingPage;
