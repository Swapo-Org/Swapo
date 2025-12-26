import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // iOS Safari fix: Double-check localStorage directly after context loads
    const verifyAuth = async () => {
      // Small delay for iOS Safari
      await new Promise((resolve) => setTimeout(resolve, 50));
      setIsReady(true);
    };

    if (!loading) {
      verifyAuth();
    }
  }, [loading]);

  if (loading || !isReady) {
    return <div>Loading authentication state...</div>;
  }

  // iOS Safari fix: Double-check localStorage as fallback
  const token =
    localStorage.getItem('authToken') ||
    localStorage.getItem('token') ||
    localStorage.getItem('access_token');

  const hasAuth = isAuthenticated || !!token;

  return hasAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
