import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Lazy initialization để lấy giá trị từ localStorage
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Fallback nếu localStorage bị chặn (vd: ẩn danh)
      console.warn(`Lỗi khi đọc key "${key}" từ localStorage:`, error);
      return initialValue;
    }
  });

  // Hàm cập nhật state và đồng bộ localStorage
  const setValue = (value) => {
    try {
      // Hỗ trợ truyền callback tương tự useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // 1. Cập nhật React state
      setStoredValue(valueToStore);
      
      // 2. Cập nhật localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Lỗi khi lưu key "${key}" vào localStorage:`, error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
