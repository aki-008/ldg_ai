"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Import Auth Context

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuth(); // Get user and logout function

  // Helper for active styling
  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center py-3 text-sm font-medium transition-colors relative group
      ${isCollapsed ? "justify-center px-2" : "px-6"}
      ${
        isActive
          ? "bg-[#222] text-white"
          : "text-gray-400 hover:bg-[#111] hover:text-white"
      }`;
  };

  return (
    <aside
      className={`bg-black text-white flex flex-col h-screen flex-shrink-0 border-r border-[#222] transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[80px]" : "w-[250px]"
      }`}
    >
      {/* Header / Toggle Section */}
      <div
        className={`flex ${
          isCollapsed
            ? "flex-col items-center gap-6 pt-6 pb-4"
            : "flex-row items-center justify-between p-6 mb-2"
        }`}
      >
        {/* LOGO */}
        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          <span className="text-black font-extrabold text-xs tracking-tighter">
            {isCollapsed ? "L" : "LDG"}
          </span>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-white transition p-1.5 rounded-md hover:bg-[#222]"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 mt-2">
        {/* Home */}
        <Link href="/dashboard" className={getLinkClasses("/dashboard")}>
          {pathname === "/dashboard" && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          )}
          <svg
            className="w-6 h-6"
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
          {!isCollapsed && <span className="ml-4 truncate">Home</span>}
        </Link>

        {/* New */}
        <Link href="/generate" className={getLinkClasses("/generate")}>
          {pathname === "/generate" && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          )}
          <svg
            className="w-6 h-6"
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
          {!isCollapsed && <span className="ml-4 truncate">New</span>}
        </Link>

        {/* Open */}
        <Link href="/documents" className={getLinkClasses("/documents")}>
          {pathname === "/documents" && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          )}
          <svg
            className="w-6 h-6"
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
          {!isCollapsed && <span className="ml-4 truncate">Open</span>}
        </Link>
      </nav>

      {/* Bottom Account Section */}
      <div className="p-4 mt-auto border-t border-[#222]">
        <div
          className={`flex flex-col gap-2 ${isCollapsed ? "items-center" : ""}`}
        >
          {/* User Info */}
          <div
            className={`flex items-center w-full text-left py-2 text-gray-400 ${
              isCollapsed ? "justify-center" : "px-2"
            }`}
          >
            {user?.picture ? (
              <img
                src={user.picture}
                alt="User"
                className="h-8 w-8 rounded-full border border-gray-600 shrink-0"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-[#333] border border-gray-600 flex items-center justify-center text-xs text-white shrink-0">
                {user?.username?.charAt(0).toUpperCase() || "U"}
              </div>
            )}

            {!isCollapsed && (
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-white truncate">
                  {user?.username}
                </p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className={`flex items-center text-red-400 hover:bg-[#222] hover:text-red-300 rounded py-2 transition ${
              isCollapsed ? "justify-center w-8 h-8" : "w-full px-2"
            }`}
            title="Logout"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            {!isCollapsed && <span className="ml-3 text-sm">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
