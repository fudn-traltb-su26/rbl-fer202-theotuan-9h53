import RoomCard from './RoomCard';

// Internal static data containing information of at least 4 different rental rooms
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
    amenities: ["Wifi", "Điều hòa", "Ban công", "Bếp"]
  },
  {
    id: 2,
    title: "Căn Hộ Studio Cao Cấp Gần ĐH FPT - Vinhomes Grand Park",
    address: "Phân khu Rainbow, Vinhomes Grand Park, Phường Long Thạnh Mỹ, Quận 9",
    price: 4500000,
    deposit: 5000000,
    category: "Studio",
    categoryId: 1,
    area: 30,
    rating: 4.9,
    reviewCount: 24,
    available: true,
    featured: true,
    amenities: ["Wifi", "Điều hòa", "Hồ bơi", "Gym"]
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
    amenities: ["Wifi", "Điều hòa", "Thang máy", "Tủ lạnh"]
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
    featured: false,
    amenities: ["Wifi", "Gác lửng", "Kệ bếp"]
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
    amenities: ["Wifi", "Điều hòa", "Hồ bơi", "Gym"]
  },
  {
    id: 10,
    title: "Homestay Ở Ghép Cao Cấp Đầy Đủ Tiện Nghi Gần ĐH FPT Thủ Đức",
    address: "Đường Võ Chí Công, Phường Phố Hữu, Quận 9, TP. Thủ Đức",
    price: 1600000,
    deposit: 1600000,
    category: "Ở ghép / Homestay",
    categoryId: 5,
    area: 70,
    rating: 4.7,
    reviewCount: 12,
    available: true,
    featured: false,
    amenities: ["Wifi", "Giường đơn", "Bếp chung"]
  }
];

const RoomGrid = ({ onBook }) => {
  return (
    <div className="room-grid-section">
      <div className="room-grid-header-container">
        <h2 className="room-grid-section-title">Phòng Cho Thuê Nổi Bật</h2>
        <p className="room-grid-section-subtitle">
          Danh sách phòng trọ và căn hộ dịch vụ cao cấp, đầy đủ tiện nghi, phù hợp nhất dành cho bạn.
        </p>
      </div>
      
      <div className="room-grid-container">
        {ROOMS_DATA.map((room) => (
          // key={room.id} is applied directly to the outer wrapper component returned by map
          <RoomCard key={room.id} room={room} onBook={onBook} />
        ))}
      </div>
    </div>
  );
};

export default RoomGrid;
export { ROOMS_DATA };
