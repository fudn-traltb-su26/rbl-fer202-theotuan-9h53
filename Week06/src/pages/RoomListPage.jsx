import React from 'react';
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
  categories, 
  onReserve 
}) => {
  return (
    <Container className="mt-5 mb-5">
      <SectionWrapper title="Danh sách phòng cho thuê">
        
        <CategoryList 
          categories={categories} 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        
        <div className="mt-4 mb-3">
          <SearchBar onSearch={(kw) => setKeyword(kw)} />
        </div>
        
        {keyword && (
          <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
            🔍 Kết quả tìm kiếm cho: <strong>"{keyword}"</strong> — {rooms.length} phòng tìm thấy
          </p>
        )}
        
        <RoomGrid rooms={rooms} onReserve={onReserve} />

      </SectionWrapper>
    </Container>
  );
};

export default RoomListPage;
