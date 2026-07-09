import { useState, useEffect, useRef } from 'react';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';
import RoomGrid from '../components/RoomGrid';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import SectionWrapper from '../components/SectionWrapper';
import { getRooms } from '../services/roomService';

const RoomListPage = ({ 
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

  // State lưu lỗi (nếu có)
  const [error, setError] = useState(null);
  
  // Ref cho ô tìm kiếm
  const searchInputRef = useRef(null);

  // Hàm gọi API lấy dữ liệu phòng
  const fetchRooms = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRooms();
      // axios response.data chứa dữ liệu thực tế từ server
      setRoomList(response.data);
    } catch (err) {
      console.error('Lỗi khi fetch rooms:', err);
      setError(err.message || 'Không thể kết nối tới server. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  // Effect 1: Gọi API khi component mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchRooms();
  }, []); // Phụ thuộc rỗng để chạy 1 lần khi mount

  // Effect 2: Tự động focus ô tìm kiếm khi dữ liệu đã tải xong và không lỗi
  useEffect(() => {
    if (loading === false && !error) {
      searchInputRef.current?.focus();
    }
  }, [loading, error]);

  // Derived state: lọc phòng theo keyword và category dựa trên roomList từ API
  const filteredRooms = roomList.filter(room => {
    const matchKw = !keyword || room.title.toLowerCase().includes(keyword.toLowerCase());
    const matchCat = activeCategory === null || room.categoryId === activeCategory;
    return matchKw && matchCat;
  });

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
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </Spinner>
            <p className="mt-3 text-muted">Đang tải dữ liệu phòng...</p>
          </div>
        ) : error ? (
          <div className="my-5">
            <Alert variant="danger" className="d-flex align-items-center justify-content-between">
              <div>
                <strong>Lỗi tải dữ liệu:</strong> {error}
              </div>
              <Button variant="outline-danger" onClick={fetchRooms}>
                Thử lại
              </Button>
            </Alert>
          </div>
        ) : (
          <>
            {keyword && (
              <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                🔍 Kết quả tìm kiếm cho: <strong>"{keyword}"</strong> — {filteredRooms.length} phòng tìm thấy
              </p>
            )}
            
            <RoomGrid rooms={filteredRooms} />
          </>
        )}

      </SectionWrapper>
    </Container>
  );
};

export default RoomListPage;
