import React from 'react';
import RoomCard from './RoomCard';

const ROOMS_DATA = [
  {
    id: 1,
    title: "Phòng Studio Ban Công Thoáng Mát Full Nội Thất Quận 9",
    address: "12/4 Đường D2, Phường Tăng Nhơn Phú A, Quận 9, TP. Thủ Đức",
    price: 3800000,
    deposit: 4000000,
    category: "Studio",
    categoryId: 1,
    area: 25,
    rating: 4.8,
    reviewCount: 15,
    available: true,
    featured: true,
    description: "Phòng Studio thiết kế hiện đại, có ban công rộng rãi đón ánh sáng tự nhiên. Trang bị sẵn giường tủ, nệm, điều hòa Inverter tiết kiệm điện, tủ lạnh, bếp từ, máy hút mùi. Hệ thống khóa vân tay an ninh tuyệt đối, camera giám sát 24/7."
  },
  {
    id: 4,
    title: "Căn Hộ Mini Ban Công Riêng Full Đồ Gần ĐH Giao Thông Vận Tải",
    address: "78 Đường 385, Phường Tăng Nhơn Phú A, Quận 9, TP. Thủ Đức",
    price: 4200000,
    deposit: 4200000,
    category: "Căn hộ mini",
    categoryId: 2,
    area: 28,
    rating: 4.6,
    reviewCount: 11,
    available: true,
    featured: true,
    description: "Căn hộ mini cao cấp, ban công riêng biệt phơi đồ và ngắm cảnh siêu thoáng. Phòng được thiết kế dạng 1 phòng ngủ tách biệt với bếp giúp hạn chế bám mùi thức ăn."
  },
  {
    id: 6,
    title: "Phòng Trọ Gác Lửng Giá Rẻ Mới Kính Coong Gần ĐH Sư Phạm Kỹ Thuật",
    address: "29/8 Đường Hoàng Diệu 2, Phường Linh Trung, Thủ Đức",
    price: 2800000,
    deposit: 3000000,
    category: "Phòng trọ gác lửng",
    categoryId: 3,
    area: 20,
    rating: 4.4,
    reviewCount: 19,
    available: true,
    featured: true,
    description: "Phòng trọ có gác lửng đúc bê tông kiên cố, ốp gạch sạch sẽ. Chiều cao gác thoải mái không lo đụng đầu. Phòng tắm khép kín, có kệ bếp nấu ăn, bồn rửa chén tiện lợi."
  },
  {
    id: 8,
    title: "Căn Hộ Dịch Vụ Cao Cấp View Sông Sài Gòn Thảo Điền",
    address: "12 Đường Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2, TP. Thủ Đức",
    price: 12000000,
    deposit: 15000000,
    category: "Căn hộ dịch vụ",
    categoryId: 4,
    area: 55,
    rating: 4.9,
    reviewCount: 5,
    available: true,
    featured: true,
    description: "Căn hộ dịch vụ sang trọng bậc nhất tại khu Thảo Điền, view trực diện sông Sài Gòn. Giá thuê đã bao gồm các dịch vụ cao cấp: dọn phòng 3 lần/tuần, thay drap giường hàng tuần, giặt ủi."
  }
];

export default function RoomGrid() {
  return (
    <div className="room-grid-container">
      <div className="room-grid-header">
        <h2>Phòng trọ nổi bật</h2>
        <p>Tìm kiếm nơi ở phù hợp nhất với nhu cầu của bạn qua danh sách các phòng trọ tiện nghi, giá cả phải chăng.</p>
      </div>

      <div className="room-grid">
        {ROOMS_DATA.map((room) => (
          <div key={room.id} className="room-card-wrapper">
            <RoomCard
              room={room}
              imageSrc={`https://picsum.photos/seed/room${room.id}/300/200`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
