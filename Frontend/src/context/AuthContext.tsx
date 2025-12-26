import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  [key: string]: any;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}

interface AuthContextType extends AuthState {
  login: (token: string, user: User) => void;
  logout: () => void;
  loading: boolean;
}

const defaultState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const AuthContext = createContext<AuthContextType>({
  ...defaultState,
  login: () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultState);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // iOS Safari fix: Add small delay to ensure localStorage is ready
    const initAuth = async () => {
      try {
        // Small delay for iOS Safari to initialize storage
        await new Promise((resolve) => setTimeout(resolve, 50));

        // Try multiple possible token keys for redundancy
        const token =
          localStorage.getItem('authToken') ||
          localStorage.getItem('token') ||
          localStorage.getItem('access_token');

        const userJson = localStorage.getItem('user');

        if (token) {
          setAuthState({
            isAuthenticated: true,
            token,
            user: userJson ? JSON.parse(userJson) : null,
          });
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = (token: string, user: User) => {
    try {
      // iOS Safari fix: Save to multiple keys for redundancy
      localStorage.setItem('authToken', token);
      localStorage.setItem('token', token); // Backup key

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      // iOS Safari fix: Force a sync with a timestamp
      localStorage.setItem('lastLogin', Date.now().toString());

      // Update state
      setAuthState({
        isAuthenticated: true,
        token,
        user,
      });

      // iOS Safari fix: Verify token was actually saved
      const verify = localStorage.getItem('authToken');
      if (!verify) {
        console.error('Token failed to save, retrying...');
        // Retry once
        localStorage.setItem('authToken', token);
        localStorage.setItem('token', token);
      }
    } catch (error) {
      console.error('Error saving auth data:', error);
      // Still update state even if localStorage fails
      setAuthState({
        isAuthenticated: true,
        token,
        user,
      });
    }
  };

  const logout = () => {
    try {
      // Clear all possible token keys
      localStorage.removeItem('authToken');
      localStorage.removeItem('token');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      localStorage.removeItem('lastLogin');
    } catch (error) {
      console.error('Error clearing auth data:', error);
    }

    setAuthState(defaultState);
    navigate('/login', { replace: true });
  };

  const value: AuthContextType = {
    isAuthenticated: authState.isAuthenticated,
    token: authState.token,
    user: authState.user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
