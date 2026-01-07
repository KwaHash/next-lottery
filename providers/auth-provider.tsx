"use client";

import { createContext, useContext, useState, type ReactNode, useEffect } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import LoadingIndicator from "@/components/loading-indicator";

export interface AuthState {
  user_id: string;
  user_email: string;
  user_balance: number;
}

interface AuthContextType extends AuthState {
  updateAuthState: (state: Partial<AuthState>) => void;
}

const AuthContext = createContext<AuthContextType>({
  user_id: "",
  user_email: "",
  user_balance: 0,
  updateAuthState: () => {},
});

const PUBLIC_PATHS = ["/non-member", "/login", "/sign-up", "/forgot-password", "/reset-password"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [authState, setAuthState] = useState<AuthState>({
    user_id: "",
    user_email: "",
    user_balance: 0,
  });

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);

      const isPublicPath = PUBLIC_PATHS.some((path) => pathName.startsWith(path));
      if (isPublicPath) {
        setIsLoading(false);
        return;
      }

      const tokenData = localStorage.getItem("jwt-token");
      if (!tokenData) {
        router.push("/non-member");
        setIsLoading(false);
        return;
      }

      try {
        const { access_token, refresh_token } = JSON.parse(tokenData);
        const { data } = await axios.post("/api/auth/me", {
          access_token,
          refresh_token,
        });

        if (data.is_authenticated) {
          setAuthState({
            user_id: data.user_id,
            user_email: data.user_email,
            user_balance: data.user_balance,
          });

          if (data.access_token) {
            localStorage.setItem(
              "jwt-token",
              JSON.stringify({
                access_token: data.access_token,
                refresh_token,
              })
            );
          }
        } else {
          router.push("/non-member");
        }
      } catch {
        router.push("/non-member");
      } finally {
        setIsLoading(false);
      }
    };

    void checkAuth();
  }, [pathName]);

  const updateAuthState = (newState: Partial<AuthState>) => {
    setAuthState((prev) => ({ ...prev, ...newState }));
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <AuthContext.Provider value={{ ...authState, updateAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}