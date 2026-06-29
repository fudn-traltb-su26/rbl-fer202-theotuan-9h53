import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Giả định biến isAdmin để kiểm tra quyền
  const isAdmin = false; 

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
