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
    <Row xs={2} sm={3} md={4} lg={5} className="g-3 mb-5">
      {rooms.map((room) => (
        // key={room.id} là prop đặc biệt của React, giúp nhận diện phần tử trong danh sách
        // Col có class h-100 để đảm bảo chiều cao đồng đều giữa các card
        <Col key={room.id} className="h-100">
          <RoomCard room={room} onReserve={onReserve} />
        </Col>
      ))}
    </Row>
  );
};

export default RoomGrid;
