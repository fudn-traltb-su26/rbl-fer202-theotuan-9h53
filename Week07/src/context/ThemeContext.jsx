import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Init từ localStorage bằng lazy initialization
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Hàm chuyển đổi theme
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Lắng nghe thay đổi của isDark để cập nhật giao diện
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
