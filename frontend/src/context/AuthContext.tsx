"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface User {
  username: string;
  email: string;
  picture?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: (credential: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from token on startup
  useEffect(() => {
    const loadUser = async () => {
      const token = Cookies.get("auth_token");
      if (token) {
        try {
          const res = await api.get("/auth/users/me");
          setUser(res.data);
        } catch (error) {
          console.error("Failed to load user", error);
          Cookies.remove("auth_token");
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/sign_in", { email, password });
      // The backend returns { access_token, token_type, username }
      const { access_token } = res.data;

      // Save token to cookie (secure in production)
      Cookies.set("auth_token", access_token, {
        expires: 7,
        secure: window.location.protocol === "https:",
        sameSite: "strict",
      });

      // Fetch full user details immediately
      const userRes = await api.get("/auth/users/me");
      setUser(userRes.data);
      router.push("/dashboard");
    } catch (error: any) {
      throw new Error(error.response?.data?.detail || "Login failed");
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      await api.post("/auth/sign_up", { username, email, password });
      // Auto-login after signup
      await login(email, password);
    } catch (error: any) {
      throw new Error(error.response?.data?.detail || "Signup failed");
    }
  };

  const loginWithGoogle = async (credential: string) => {
    try {
      // Backend validates Google ID Token directly via /users/me logic
      // We manually set the cookie first so the interceptor picks it up
      Cookies.set("auth_token", credential, {
        expires: 1,
        secure: window.location.protocol === "https:",
        sameSite: "strict",
      });

      const res = await api.get("/auth/users/me");
      setUser(res.data);
      router.push("/dashboard");
    } catch (error: any) {
      Cookies.remove("auth_token");
      throw new Error(error.response?.data?.detail || "Google Login failed");
    }
  };

  const logout = () => {
    Cookies.remove("auth_token");
    setUser(null);
    router.push("/login");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <AuthContext.Provider
        value={{ user, loading, login, signup, loginWithGoogle, logout }}
      >
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
