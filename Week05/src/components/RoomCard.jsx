import { Card, Button, Badge } from 'react-bootstrap';

const CATEGORY_MAP = {
  1: 'Căn hộ dịch vụ',
  2: 'Phòng trọ gác lửng',
  3: 'Studio',
  4: 'Ở ghép',
  5: 'Nhà nguyên căn'
};

const RoomCard = ({ room, onReserve }) => {
  // Check if room data is provided, otherwise return null or fallback
  if (!room) return null;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={`https://picsum.photos/seed/room${room.id}/300/200`}
        alt="Room image"
        style={{ height: '240px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div>
          <Badge bg="info" className="mb-2">
            {CATEGORY_MAP[room.categoryId] || 'Phòng cho thuê'}
          </Badge>
        </div>
        <Card.Title className="fw-bold mb-2">
          {room.title}
        </Card.Title>
        <Card.Text className="text-muted mb-4 flex-grow-1">
          <span className="d-block mb-1">
            <i className="bi bi-geo-alt-fill text-danger me-1"></i>
            {room.address}
          </span>
          <span className="d-block mb-1">
            <strong>Diện tích:</strong> {room.area} m²
          </span>
          <span className="d-block">
            <strong>Giá thuê:</strong> <span className="text-primary fw-bold">{room.price.toLocaleString('vi-VN')}đ/tháng</span>
          </span>
        </Card.Text>
        <Button
          variant="primary"
          size="sm"
          className="w-100 mt-auto"
          onClick={() => onReserve(room)}
          disabled={!room.isAvailable}
        >
          Đặt giữ chỗ
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
