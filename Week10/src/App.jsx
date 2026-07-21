import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from './store/cartSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomListPage from './pages/RoomListPage';
import RoomDetailPage from './pages/RoomDetailPage';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import RoomManagePage from './pages/admin/RoomManagePage';
import './App.css';

const CATEGORIES = [
  { id: 1, name: 'Căn hộ dịch vụ', icon: '🏢' },
  { id: 2, name: 'Phòng trọ gác lửng', icon: '🪜' },
  { id: 3, name: 'Studio', icon: '🎨' },
  { id: 4, name: 'Ở ghép', icon: '🤝' },
  { id: 5, name: 'Nhà nguyên căn', icon: '🏡' }
];

const ALL_ROOMS = [
  {
    id: 1,
    categoryId: 1,
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
    categoryId: 3,
    title: "Căn hộ Studio Vinhomes Grand Park, Đầy đủ tiện ích",
    address: "Phân khu Rainbow, Vinhomes Grand Park, Quận 9, TP. HCM",
    area: "30",
    price: 4500000,
    deposit: "5,000,000",
    isAvailable: true
  },
  {
    id: 3,
    categoryId: 1,
    title: "Chung cư mini khép kín sạch sẽ gần ĐH GTVT",
    address: "Đường 385, Phường Tăng Nhơn Phú A, Quận 9, TP. Thủ Đức",
    area: "28",
    price: 4200000,
    deposit: "4,200,000",
    isAvailable: true
  },
  {
    id: 4,
    categoryId: 2,
    title: "Phòng trọ gác lửng giá rẻ cho sinh viên gần ĐH SPKT",
    address: "Đường Hoàng Diệu 2, Phường Linh Trung, TP. Thủ Đức",
    area: "20",
    price: 2800000,
    deposit: "3,000,000",
    isAvailable: false
  }
];

function App() {
  // State lưu từ khóa tìm kiếm — lifting state up từ SearchBar lên App
  const [keyword, setKeyword] = useState('');

  // State lựa chọn danh mục phòng
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Lấy ra giá trị biến động totalItems từ Redux
  const totalItems = useSelector(selectTotalItems);

  // useEffect theo dõi sát sao dependency [totalItems]
  useEffect(() => {
    if (totalItems > 0) {
      document.title = `CozySpace - ${totalItems} phòng đã lưu`;
    } else {
      document.title = 'CozySpace - Hệ thống thuê phòng';
    }

    // Hàm dọn dẹp để khôi phục tiêu đề gốc khi component unmount
    return () => {
      document.title = 'CozySpace - Hệ thống thuê phòng';
    };
  }, [totalItems]);

  // Thêm dòng log này để user test dễ dàng qua Console
  console.log("Danh mục đang chọn hiện tại (activeCategory):", activeCategory);

  // Derived state: lọc phòng theo keyword và category
  const filteredRooms = ALL_ROOMS.filter(room => {
    const matchKw = !keyword || room.title.toLowerCase().includes(keyword.toLowerCase());
    const matchCat = activeCategory === null || room.categoryId === activeCategory;
    return matchKw && matchCat;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header savedCount={5} />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={
            <HomePage 
              categories={CATEGORIES}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              keyword={keyword}
              setKeyword={setKeyword}
              filteredRooms={filteredRooms}
            />
          } />
          <Route path="/rooms" element={
            <RoomListPage 
               rooms={filteredRooms}
               keyword={keyword}
               setKeyword={setKeyword}
               activeCategory={activeCategory}
               setActiveCategory={setActiveCategory}
               categories={CATEGORIES}
            />
          } />
          <Route path="/rooms/:id" element={<RoomDetailPage rooms={ALL_ROOMS} />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/admin/rooms" element={
            <ProtectedRoute>
              <RoomManagePage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
