import { Row, Col } from 'react-bootstrap';
import RoomCard from './RoomCard';

const RoomGrid = ({ rooms = [], onReserve }) => {
  if (!rooms || rooms.length === 0) {
    return (
      <div className="text-center my-5 p-5 bg-light rounded-3">
        <h4 className="text-muted fw-normal fst-italic">Không tìm thấy phòng thuê nào phù hợp với bộ lọc</h4>
      </div>
    );
  }

  return (
    // xs={2}: 2 cột mobile, sm={3}: 3 cột tablet nhỏ, md={4}: 4 cột tablet, lg={5}: 5 cột desktop
    <Row xs={2} sm={3} md={4} lg={5} className="g-3 mb-5">
      {rooms.map((room) => (
        // h-100 trên Col đảm bảo tất cả card có chiều cao đồng đều trong cùng một hàng
        <Col key={room.id} className="h-100">
          <RoomCard room={room} />
        </Col>
      ))}
    </Row>
  );
};

export default RoomGrid;
