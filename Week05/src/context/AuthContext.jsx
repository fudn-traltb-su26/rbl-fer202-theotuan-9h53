import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Khôi phục phiên đăng nhập từ localStorage nếu có
  useEffect(() => {
    const storedUser = localStorage.getItem('rental_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user', e);
      }
    }
  }, []);

  const loginWithGoogle = (googleUserData) => {
    setUser(googleUserData);
    localStorage.setItem('rental_user', JSON.stringify(googleUserData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rental_user');
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
