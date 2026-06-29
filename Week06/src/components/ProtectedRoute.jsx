import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Mock authentication logic
  const isAllowed = true; 

  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
