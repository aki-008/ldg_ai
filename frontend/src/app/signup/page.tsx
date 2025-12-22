import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-black">
      <div className="flex flex-1 items-center justify-center py-20">
        <div className="w-full max-w-md bg-white border border-black rounded-3xl shadow-2xl p-12 relative">
          <div className="flex flex-col items-center mb-8">
            <img src="/legal-logo.svg" alt="Legal Logo" className="h-14 w-14 mb-2 drop-shadow" />
            <span className="text-2xl font-extrabold tracking-widest text-black uppercase">LDG</span>
          </div>
          <h1 className="text-3xl font-extrabold mb-8 text-center tracking-tight">Create your account</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l8.293 6.293a1 1 0 001.414 0L21 7" stroke="currentColor" strokeWidth="1.5"/></svg>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 1110 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 1110 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>
                </span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-black text-white font-bold text-lg shadow hover:bg-white hover:text-black border border-black transition"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link href="/login" className="underline hover:text-black font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
