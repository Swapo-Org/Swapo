// src/pages/OAuthCallback.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/useToast';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [debugInfo, setDebugInfo] = useState<string>('');

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const urlParams = new URLSearchParams(location.search);

        // Debug information
        const debugData = {
          fullUrl: window.location.href,
          pathname: location.pathname,
          search: location.search,
          allParams: Object.fromEntries(urlParams.entries()),
        };
        console.log('=== OAuth Callback Debug ===', debugData);
        setDebugInfo(JSON.stringify(debugData, null, 2));

        const accessToken = urlParams.get('access');
        const refreshToken = urlParams.get('refresh');
        const userId = urlParams.get('user_id');
        const email = urlParams.get('email');
        const username = urlParams.get('username');

        if (!accessToken) {
          showToast('Authentication failed. Missing token.', 'error');
          setTimeout(() => navigate('/login', { replace: true }), 2000);
          return;
        }

        // Build user object
        const user = {
          user_id: userId || '',
          email: email || '',
          username: username || '',
        };

        // ✅ Save tokens
        localStorage.setItem('authToken', accessToken);
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken);
        }
        localStorage.setItem('user', JSON.stringify(user));

        // ✅ Update context
        login(accessToken, user);

        showToast('Successfully logged in!', 'success');

        // ✅ Redirect
        if (location.pathname.includes('onboarding')) {
          navigate('/onboarding', { replace: true });
        } else {
          navigate('/dashboard', { replace: true });
        }
      } catch (error) {
        console.error('OAuth callback error:', error);
        setDebugInfo(`Error: ${String(error)}`);
        setTimeout(() => {
          showToast('Authentication failed. Please try again.', 'error');
          navigate('/login', { replace: true });
        }, 2000);
      }
    };

    handleOAuthCallback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        <p className="mb-4 text-lg text-gray-700">Completing authentication...</p>

        {debugInfo && (
          <div className="mt-6 rounded bg-gray-100 p-4 text-left">
            <p className="mb-2 text-sm font-semibold text-gray-700">Debug Info:</p>
            <pre className="overflow-auto text-xs text-gray-600">{debugInfo}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default OAuthCallback;
