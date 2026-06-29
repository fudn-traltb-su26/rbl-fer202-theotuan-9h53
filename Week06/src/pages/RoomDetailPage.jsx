import { useParams, Link, useNavigate } from 'react-router-dom';

const RoomDetailPage = ({ rooms = [] }) => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));
  const navigate = useNavigate();

  if (!room) {
    return (
      <div className="container mt-5 text-center">
        <h4 className="mb-3">Không tìm thấy thông tin phòng thuê này</h4>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="mb-4 text-muted">
        <Link to="/">Trang chủ</Link> {'>'} <Link to="/rooms">Phòng thuê</Link> {'>'} {room.title}
      </div>
      
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Quay lại</button>
      
      <h2>{room.title}</h2>
      <div className="card mt-3 shadow-sm">
        <div className="card-body">
          <p className="card-text"><strong>Địa chỉ:</strong> {room.address}</p>
          <p className="card-text"><strong>Giá:</strong> <span className="text-danger fw-bold">{room.price.toLocaleString('vi-VN')} đ</span></p>
          <p className="card-text"><strong>Diện tích:</strong> {room.area} m²</p>
          <p className="card-text"><strong>Tiền cọc:</strong> {room.deposit} đ</p>
          <p className="card-text"><strong>Trạng thái:</strong> {room.isAvailable ? <span className="badge bg-success">Còn phòng</span> : <span className="badge bg-danger">Hết phòng</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
