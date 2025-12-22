"use client";

import React from "react";
import Sidebar from "@/components/sidebar/page"; // Import consistent sidebar

// --- ICONS & DATA ---
const WordIcon = () => (
  <div className="w-8 h-8 bg-[#185abd] rounded-sm flex items-center justify-center relative shadow-sm">
    <span className="text-white font-bold text-[10px] absolute left-1 top-1">
      W
    </span>
  </div>
);

const recentFiles = [
  {
    id: 1,
    name: "Affidavit format.docx",
    date: "Sun at 07:17 PM",
    path: "X: » CASES",
    icon: <WordIcon />,
  },
  {
    id: 2,
    name: "Bablu.docx",
    date: "Thu at 01:34 PM",
    path: "OneDrive » Docs",
    icon: <WordIcon />,
  },
  {
    id: 3,
    name: "hacks.docx",
    date: "14 December",
    path: "Documents",
    icon: <WordIcon />,
  },
];

export default function DocumentsPage() {
  return (
    <div className="flex h-screen bg-[#191919] text-white font-sans overflow-hidden">
      {/* Shared Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="px-10 py-8 max-w-[1600px] w-full mx-auto">
          <h1 className="text-3xl font-semibold mb-8">Open</h1>

          <div className="w-full">
            <div className="grid grid-cols-12 text-xs text-gray-500 pb-2 px-2 border-b border-[#333] mb-2">
              <div className="col-span-8">Name</div>
              <div className="col-span-4 text-right pr-4">Date modified</div>
            </div>
            <div className="space-y-1">
              {recentFiles.map((file) => (
                <div
                  key={file.id}
                  className="group grid grid-cols-12 items-center py-2.5 px-2 rounded hover:bg-[#292929] cursor-pointer transition border border-transparent hover:border-[#333]"
                >
                  <div className="col-span-8 flex items-center gap-4 min-w-0">
                    <div className="flex-shrink-0">{file.icon}</div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-white truncate">
                        {file.name}
                      </span>
                      <span className="text-[11px] text-gray-500 truncate">
                        {file.path}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-4 text-right text-xs text-gray-400 pr-4">
                    {file.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
