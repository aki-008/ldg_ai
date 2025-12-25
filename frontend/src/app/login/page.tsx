"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-black dark:text-black">
      <div className="flex flex-1 items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-white border border-black rounded-3xl shadow-2xl p-12 relative">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <img
              src="/legal-logo.svg"
              alt="Legal Logo"
              className="h-14 w-14 mb-2 drop-shadow"
            />
            <span className="text-2xl font-extrabold tracking-widest text-black uppercase">
              LDG
            </span>
          </div>

          <h1 className="text-3xl font-extrabold mb-8 text-center tracking-tight">
            Sign in
          </h1>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 rounded-lg bg-black text-white font-bold text-lg shadow hover:bg-white hover:text-black border border-black transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                  loginWithGoogle(credentialResponse.credential).catch((err) =>
                    setError(err.message)
                  );
                }
              }}
              onError={() => {
                setError("Google Login Failed");
              }}
              theme="outline"
              size="large"
              shape="rectangular"
              width="320"
            />
          </div>

          <p className="mt-8 text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="underline hover:text-black font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
