"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

export default function SignupPage() {
  const { signup, loginWithGoogle } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await signup(username, email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-black">
      <div className="flex flex-1 items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-white border border-black rounded-3xl shadow-2xl p-12 relative">
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
            Create Account
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
                htmlFor="username"
                className="block text-sm font-semibold mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 rounded-lg bg-black text-white font-bold text-lg shadow hover:bg-white hover:text-black border border-black transition disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">
              Or sign up with
            </span>
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
                setError("Google Signup Failed");
              }}
              onNonOAuthError={() => {
                setError(
                  "Google popup was blocked by your browser. Allow popups for this site and try again."
                );
              }}
              theme="outline"
              size="large"
              shape="rectangular"
              width="320"
              text="signup_with"
              useOneTap={false}
            />
          </div>

          <p className="mt-8 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline hover:text-black font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
