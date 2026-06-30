import React, { useState, forwardRef } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

const SearchBar = forwardRef(({ onSearch }, ref) => {
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
        {/* InputGroup: thêm class is-focused để CSS xử lý trạng thái focus */}
        <InputGroup className={`search-input-group ${isFocused ? 'is-focused' : ''}`}>
          {/* Search Icon */}
          <InputGroup.Text className={`search-icon-text ${isFocused ? 'focused' : ''}`}>
            🔍
          </InputGroup.Text>

          {/* Input */}
          <Form.Control
            ref={ref}
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Tìm kiếm phòng theo tên, địa chỉ..."
            className="search-form-control border-0 shadow-none"
          />

          {/* Clear Button */}
          {keyword !== '' && (
            <InputGroup.Text
              onClick={handleClear}
              className="search-clear-btn"
              title="Xóa"
            >
              ✕
            </InputGroup.Text>
          )}

          {/* Search Button */}
          <Button
            type="submit"
            className="search-submit-btn fw-semibold"
          >
            Tìm kiếm
          </Button>
        </InputGroup>

        {/* Error Message */}
        {error && (
          <div className="search-error d-flex align-items-center gap-2 mt-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </Form>
    </div>
  );
});

export default SearchBar;
