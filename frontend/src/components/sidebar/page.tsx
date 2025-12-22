"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  // Helper for active styling
  const getLinkClasses = (path: string) => {
    // strict check or startsWith check depending on need.
    // Using strict for Home/New, startsWith for Open if it has sub-routes.
    const isActive = pathname === path;

    return `flex items-center px-6 py-3 text-sm font-medium transition-colors relative group
      ${
        isActive
          ? "bg-[#222] text-white"
          : "text-gray-400 hover:bg-[#111] hover:text-white"
      }`;
  };

  return (
    <aside className="w-[250px] bg-black text-white flex flex-col h-screen flex-shrink-0 border-r border-[#222]">
      {/* Logo Section */}
      <div className="p-6 mb-6">
        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-extrabold text-xs tracking-tighter">
            LDG
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {/* Home */}
        <Link href="/dashboard" className={getLinkClasses("/dashboard")}>
          {pathname === "/dashboard" && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          )}
          <svg
            className="w-5 h-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Link>

        {/* New */}
        <Link href="/generate" className={getLinkClasses("/generate")}>
          {pathname === "/generate" && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          )}
          <svg
            className="w-5 h-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
          New
        </Link>

        {/* Open */}
        <Link href="/documents" className={getLinkClasses("/documents")}>
          {pathname === "/documents" && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          )}
          <svg
            className="w-5 h-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Open
        </Link>
      </nav>

      {/* Bottom Account Section (Matching Image 2) */}
      <div className="p-4 mt-auto">
        <button className="flex items-center w-full text-left px-2 py-2 text-gray-400 hover:bg-[#111] rounded hover:text-white transition">
          <div className="h-8 w-8 rounded-full bg-[#111] border border-gray-600 flex items-center justify-center text-xs text-white mr-3">
            N
          </div>
          <span className="text-sm font-medium">Account</span>
        </button>
      </div>
    </aside>
  );
}
