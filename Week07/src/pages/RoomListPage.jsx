import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import RoomGrid from '../components/RoomGrid';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import SectionWrapper from '../components/SectionWrapper';

const RoomListPage = ({ 
  rooms, 
  keyword, 
  setKeyword, 
  activeCategory, 
  setActiveCategory, 
  categories 
}) => {
  // Trạng thái loading
  const [loading, setLoading] = useState(true);
  
  // State lưu dữ liệu phòng sau khi tải
  const [roomList, setRoomList] = useState([]);
  
  // Ref cho ô tìm kiếm
  const searchInputRef = useRef(null);

  // Effect 1 (Giả lập tải dữ liệu từ Server)
  useEffect(() => {
    setLoading(true);
    
    // Giả lập độ trễ mạng
    const timer = setTimeout(() => {
      setRoomList(rooms); // Đổ dữ liệu vào state
      setLoading(false);  // Tắt loading
    }, 800);

    // Cleanup function: dọn dẹp timer để tránh memory leak
    return () => clearTimeout(timer);
  }, []); // Phụ thuộc rỗng để chạy 1 lần khi mount

  // Effect 2: Tự động focus ô tìm kiếm khi dữ liệu đã tải xong
  useEffect(() => {
    if (loading === false) {
      searchInputRef.current?.focus();
    }
  }, [loading]);

  return (
    <Container className="mt-5 mb-5">
      <SectionWrapper title="Danh sách phòng cho thuê">
        
        <CategoryList 
          categories={categories} 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        
        <div className="mt-4 mb-3">
          <SearchBar onSearch={(kw) => setKeyword(kw)} ref={searchInputRef} />
        </div>
        
        {loading ? (
          <div className="text-center my-5 py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
            <p className="mt-3 text-muted">Đang tải dữ liệu phòng...</p>
          </div>
        ) : (
          <>
            {keyword && (
              <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                🔍 Kết quả tìm kiếm cho: <strong>"{keyword}"</strong> — {rooms.length} phòng tìm thấy
              </p>
            )}
            
            {/* Truyền rooms thay vì roomList để search filter hoạt động mượt mà hơn khi props thay đổi */}
            <RoomGrid rooms={rooms} />
          </>
        )}

      </SectionWrapper>
    </Container>
  );
};

export default RoomListPage;
