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
    <Row className="g-4 mb-5 row-cols-2 row-cols-md-3 row-cols-xl-5">
      {rooms.map((room) => (
        // key={room.id} is applied to the outermost element returned by the map function
        <Col key={room.id}>
          <RoomCard room={room} onReserve={onReserve} />
        </Col>
      ))}
    </Row>
  );
};

export default RoomGrid;
