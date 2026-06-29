import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedKeyword = keyword.trim();

    if (trimmedKeyword.length < 2) {
      setError('Vui lòng nhập ít nhất 2 ký tự để tìm kiếm');
      return;
    }

    setError('');
    if (onSearch) {
      onSearch(trimmedKeyword);
    }
  };

  const handleClear = () => {
    setKeyword('');
    setError('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="search-bar-wrapper mb-4">
      <Form onSubmit={handleSubmit}>
        {/* InputGroup sử dụng Bootstrap classes thay vì inline style */}
        <InputGroup className={`search-input-group ${isFocused ? 'search-focused' : ''}`}>
          {/* Search Icon */}
          <InputGroup.Text className={`search-icon-text bg-white border-0 ps-3 ${isFocused ? 'text-primary' : 'text-secondary'}`}>
            🔍
          </InputGroup.Text>

          {/* Input */}
          <Form.Control
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Tìm kiếm phòng theo tên, địa chỉ..."
            className="border-0 shadow-none bg-white text-dark search-input py-3"
          />

          {/* Clear Button */}
          {keyword !== '' && (
            <InputGroup.Text
              onClick={handleClear}
              className="search-clear-btn bg-white border-0 pe-1"
              title="Xóa"
            >
              ✕
            </InputGroup.Text>
          )}

          {/* Search Button */}
          <Button
            type="submit"
            className="search-submit-btn border-0 fw-semibold px-4"
          >
            Tìm kiếm
          </Button>
        </InputGroup>

        {/* Error Message */}
        {error && (
          <div className="d-flex align-items-center gap-2 mt-2 text-danger search-error">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </Form>
    </div>
  );
};

export default SearchBar;
