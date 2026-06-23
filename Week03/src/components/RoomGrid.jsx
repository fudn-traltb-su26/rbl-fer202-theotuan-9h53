import { Row, Col } from 'react-bootstrap';
import RoomCard from './RoomCard';

// Internal static array containing information of at least 4 different rental rooms
const ROOMS_DATA = [
  {
    id: 1,
    title: "Phòng trọ sinh viên cao cấp, Full nội thất gần ĐH FPT",
    address: "Khu công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội",
    area: "25",
    price: 3500000,
    originalPrice: 4000000,
    deposit: "3,500,000",
    isAvailable: true
  },
  {
    id: 2,
    title: "Căn hộ Studio Vinhomes Grand Park, Đầy đủ tiện ích",
    address: "Phân khu Rainbow, Vinhomes Grand Park, Quận 9, TP. HCM",
    area: "30",
    price: "4,500,000",
    deposit: "5,000,000",
    isAvailable: true
  },
  {
    id: 3,
    title: "Chung cư mini khép kín sạch sẽ gần ĐH GTVT",
    address: "Đường 385, Phường Tăng Nhơn Phú A, Quận 9, TP. Thủ Đức",
    area: "28",
    price: "4,200,000",
    deposit: "4,200,000",
    isAvailable: true
  },
  {
    id: 4,
    title: "Phòng trọ gác lửng giá rẻ cho sinh viên gần ĐH SPKT",
    address: "Đường Hoàng Diệu 2, Phường Linh Trung, TP. Thủ Đức",
    area: "20",
    price: "2,800,000",
    deposit: "3,000,000",
    isAvailable: false
  }
];

const RoomGrid = () => {
  const handleReserve = (room) => {
    alert(`Bạn vừa nhấn đặt phòng: ${room.title}`);
  };

  return (
    <Row className="g-4 mb-5">
      {ROOMS_DATA.map((room) => (
        // key={room.id} is applied to the outermost element returned by the map function
        <Col key={room.id} md={4} sm={6}>
          <RoomCard room={room} onReserve={handleReserve} />
        </Col>
      ))}
    </Row>
  );
};

export default RoomGrid;
export { ROOMS_DATA };
