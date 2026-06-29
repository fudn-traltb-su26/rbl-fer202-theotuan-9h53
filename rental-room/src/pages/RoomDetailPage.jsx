import { useParams, Link } from 'react-router-dom';

const RoomDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <Link to="/rooms" className="btn btn-secondary mb-3">Quay lại</Link>
      <h2>Chi tiết phòng: {id}</h2>
      <p>Thông tin chi tiết về phòng sẽ hiển thị ở đây.</p>
    </div>
  );
};

export default RoomDetailPage;
