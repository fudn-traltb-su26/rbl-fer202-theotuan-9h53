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
        <InputGroup
          style={{
            borderRadius: '50px',
            overflow: 'hidden',
            boxShadow: isFocused
              ? '0 0 0 3px rgba(79, 70, 229, 0.2), 0 4px 20px rgba(0,0,0,0.1)'
              : '0 4px 20px rgba(0,0,0,0.08)',
            transition: 'box-shadow 0.3s ease',
            border: isFocused ? '2px solid #4F46E5' : '2px solid #e5e7eb',
          }}
        >
          {/* Search Icon */}
          <InputGroup.Text
            style={{
              background: '#fff',
              border: 'none',
              paddingLeft: '18px',
              color: isFocused ? '#4F46E5' : '#9ca3af',
              transition: 'color 0.3s ease',
              fontSize: '1.1rem',
            }}
          >
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
            style={{
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              fontSize: '0.95rem',
              padding: '14px 8px',
              background: '#fff',
              color: '#111827',
            }}
          />

          {/* Clear Button */}
          {keyword !== '' && (
            <InputGroup.Text
              onClick={handleClear}
              style={{
                background: '#fff',
                border: 'none',
                cursor: 'pointer',
                color: '#9ca3af',
                fontSize: '1rem',
                paddingRight: '4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              title="Xóa"
            >
              ✕
            </InputGroup.Text>
          )}

          {/* Search Button */}
          <Button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              border: 'none',
              borderRadius: '0 50px 50px 0',
              padding: '0 28px',
              fontWeight: '600',
              fontSize: '0.9rem',
              letterSpacing: '0.3px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Tìm kiếm
          </Button>
        </InputGroup>

        {/* Error Message */}
        {error && (
          <div
            className="d-flex align-items-center gap-2 mt-2"
            style={{
              color: '#ef4444',
              fontSize: '0.83rem',
              paddingLeft: '12px',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </Form>
    </div>
  );
};

export default SearchBar;
