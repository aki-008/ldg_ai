"use client";

import React from "react";
import Sidebar from "@/components/sidebar/page"; // Import consistent sidebar
import Link from "next/link";

// Mock Data for Dashboard
const statsData = [
  { title: "Total Documents", value: "124" },
  { title: "Pending Signatures", value: "8" },
  { title: "Saved Templates", value: "32" },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#191919] text-white font-sans">
      {/* Shared Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-[#333] flex items-center justify-between px-8 bg-[#191919]">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center text-xs">
            JD
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-[#222] p-6 rounded-lg border border-[#333]"
              >
                <p className="text-sm font-medium text-gray-400 mb-1">
                  {stat.title}
                </p>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="bg-[#222] border border-[#333] rounded-lg p-8 text-center">
            <h2 className="text-lg font-semibold mb-2">Welcome to LDG</h2>
            <p className="text-gray-400 mb-6">
              Start by creating a new legal document or opening an existing one.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/newdocuments"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition"
              >
                Create New
              </Link>
              <Link
                href="/documents"
                className="bg-[#333] hover:bg-[#444] text-white px-6 py-2 rounded-md text-sm font-medium transition"
              >
                Open Documents
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
