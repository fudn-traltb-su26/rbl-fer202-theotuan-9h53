import { useEffect, useRef } from 'react';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';
import RoomGrid from '../components/RoomGrid';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import SectionWrapper from '../components/SectionWrapper';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';

const BookListPage = ({ 
  keyword, 
  setKeyword, 
  activeCategory, 
  setActiveCategory, 
  categories 
}) => {
  // Tích hợp Debounce cho từ khóa tìm kiếm (400ms)
  const debouncedKeyword = useDebounce(keyword, 400);

  // Tái cấu trúc mã nguồn: Gọi useFetch thay vì useEffect + axios thủ công
  const { data: books, loading, error, refetch } = useFetch(
    'http://localhost:3001/rooms',
    debouncedKeyword ? { q: debouncedKeyword } : {}
  );

  const bookList = books || [];

  // Ref cho ô tìm kiếm
  const searchInputRef = useRef(null);

  // Auto-focus input sau khi data tải xong
  useEffect(() => {
    if (!loading && !error) {
      searchInputRef.current?.focus();
    }
  }, [loading, error]);

  const filteredBooks = bookList.filter(book => {
    const matchCat = activeCategory === null || book.categoryId === activeCategory;
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
            <p className="mt-3 text-muted">Đang tải dữ liệu...</p>
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
                🔍 Kết quả tìm kiếm cho: <strong>"{keyword}"</strong> — {filteredBooks.length} kết quả tìm thấy
              </p>
            )}
            
            <RoomGrid rooms={filteredBooks} />
          </>
        )}
      </SectionWrapper>
    </Container>
  );
};

export default BookListPage;
