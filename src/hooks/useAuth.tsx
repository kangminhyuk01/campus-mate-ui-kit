
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userId: string, userName?: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 페이지 로드시 기존 인증 정보 확인
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem('authToken');
      const userId = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');

      if (token && userId) {
        // TODO: 여기에서 토큰 유효성을 서버에서 검증하는 로직 추가
        // 현재는 단순히 localStorage에 있으면 로그인된 것으로 처리
        setUser({
          id: userId,
          name: userName || userId
        });
      }
    } catch (error) {
      console.error('인증 상태 확인 중 오류:', error);
      // 오류 발생시 로그아웃 처리
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = (token: string, userId: string, userName?: string) => {
    // 로그인 정보를 localStorage에 저장
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    if (userName) {
      localStorage.setItem('userName', userName);
    }

    setUser({
      id: userId,
      name: userName || userId
    });
  };

  const logout = () => {
    // 로그아웃시 모든 인증 정보 제거
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 내에서 사용되어야 합니다');
  }
  return context;
};
