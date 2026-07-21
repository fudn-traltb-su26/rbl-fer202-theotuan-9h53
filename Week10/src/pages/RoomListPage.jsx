import { useEffect, useRef } from 'react';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';
import RoomGrid from '../components/RoomGrid';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import SectionWrapper from '../components/SectionWrapper';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';

const RoomListPage = ({ 
  keyword, 
  setKeyword, 
  activeCategory, 
  setActiveCategory, 
  categories 
}) => {
  // Tích hợp Debounce: Khai báo debouncedKeyword = useDebounce(keyword, 400)
  const debouncedKeyword = useDebounce(keyword, 400);

  // Tái cấu trúc mã nguồn: Thay thế useEffect + axios thủ công bằng custom hook useFetch
  const { data: rawRooms, loading, error, refetch } = useFetch(
    'http://localhost:3001/rooms',
    debouncedKeyword ? { q: debouncedKeyword } : {}
  );

  const roomList = rawRooms || [];

  // Ref cho ô tìm kiếm
  const searchInputRef = useRef(null);

  // Tự động focus ô tìm kiếm khi dữ liệu đã tải xong và không lỗi
  useEffect(() => {
    if (loading === false && !error) {
      searchInputRef.current?.focus();
    }
  }, [loading, error]);

  // Derived state: lọc phòng theo category (nếu API `q` tìm kiếm chung theo keyword)
  const filteredRooms = roomList.filter(room => {
    const matchCat = activeCategory === null || room.categoryId === activeCategory;
    return matchCat;
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
              <Button variant="outline-danger" onClick={refetch}>
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
