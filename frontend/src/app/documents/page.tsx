"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar/page"; // Import consistent sidebar

// --- ICONS ---
const Icons = {
  Word: () => (
    <div className="w-8 h-8 bg-[#185abd] rounded-sm flex items-center justify-center relative shadow-sm">
      <span className="text-white font-bold text-[10px] absolute left-1 top-1">
        W
      </span>
      <div className="w-4 h-0.5 bg-white absolute bottom-2 right-1 opacity-50"></div>
      <div className="w-4 h-0.5 bg-white absolute bottom-3 right-1 opacity-50"></div>
    </div>
  ),
  Folder: () => (
    <div className="w-8 h-8 bg-[#ffd700] rounded-sm flex items-center justify-center shadow-sm">
      <svg
        className="w-5 h-5 text-yellow-900"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    </div>
  ),
  PDF: () => (
    <div className="w-8 h-8 bg-[#b30b00] rounded-sm flex items-center justify-center text-white font-bold text-[8px] shadow-sm">
      PDF
    </div>
  ),
  Back: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ),
};

// --- MOCK DATA ---

// 1. Templates for Top Band
const templates = [
  { name: "Blank document", img: "bg-white" },
  {
    name: "Non-Disclosure Agreement",
    img: "bg-white border-t-8 border-blue-800",
  },
  { name: "Rental Agreement", img: "bg-white border-t-8 border-green-700" },
  { name: "Legal Notice", img: "bg-white border-t-8 border-red-700" },
  { name: "Affidavit", img: "bg-white border-t-8 border-gray-600" },
  { name: "Employment Contract", img: "bg-orange-50" },
];

// 2. Folder Structure Data
interface FileItem {
  id: string;
  name: string;
  type: "folder" | "docx" | "pdf";
  date: string;
  path: string;
  owner: string;
}

// Root Level (Cases)
const rootCases: FileItem[] = [
  {
    id: "case-101",
    name: "Sharma Property Dispute",
    type: "folder",
    date: "Sun at 07:17 PM",
    path: "X: » CASES » CIVIL",
    owner: "Me",
  },
  {
    id: "case-102",
    name: "TechSolutions Merger",
    type: "folder",
    date: "Thu at 01:34 PM",
    path: "OneDrive » Corporate",
    owner: "Me",
  },
  {
    id: "case-103",
    name: "Estate of Late Mrs. Gupta",
    type: "folder",
    date: "14 December",
    path: "X: » WILLS",
    owner: "Me",
  },
  {
    id: "loose-1",
    name: "Quick Notes.docx",
    type: "docx",
    date: "Yesterday",
    path: "Desktop",
    owner: "Me",
  },
];

// Inside Folders (Files)
const folderContents: Record<string, FileItem[]> = {
  "case-101": [
    {
      id: "f1",
      name: "Plaint_Draft_v2.docx",
      type: "docx",
      date: "Oct 24, 2023",
      path: "Sharma Property » Drafts",
      owner: "Me",
    },
    {
      id: "f2",
      name: "Property_Map.pdf",
      type: "pdf",
      date: "Oct 23, 2023",
      path: "Sharma Property » Evidence",
      owner: "Surveyor",
    },
  ],
  "case-102": [
    {
      id: "f3",
      name: "Merger_Agreement.docx",
      type: "docx",
      date: "Oct 20, 2023",
      path: "TechSolutions » Final",
      owner: "Legal Team",
    },
  ],
  default: [],
};

export default function DocumentsPage() {
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);

  // Determine items to show
  const displayedItems = currentFolderId
    ? folderContents[currentFolderId] || folderContents["default"]
    : rootCases;

  const currentFolderName = currentFolderId
    ? rootCases.find((c) => c.id === currentFolderId)?.name
    : "Recent";

  return (
    <div className="flex h-screen bg-[#191919] text-white font-sans overflow-hidden">
      {/* 1. Sidebar */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="px-10 py-8 max-w-[1600px] w-full mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Good morning</h1>

          {/* --- TOP BAND: TEMPLATES --- */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-gray-300">
                Start a new document
              </h2>
              <button className="text-xs text-blue-400 hover:text-blue-300">
                More templates →
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {templates.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 group cursor-pointer text-center w-32"
                >
                  <div
                    className={`h-40 w-32 ${t.img} rounded shadow-md mb-3 transition-transform group-hover:-translate-y-1 relative overflow-hidden`}
                  >
                    {/* Mock text lines to look like a doc */}
                    <div className="absolute top-6 left-4 right-4 h-1 bg-black/10 mb-1"></div>
                    <div className="absolute top-8 left-4 right-4 h-1 bg-black/10 mb-1"></div>
                    <div className="absolute top-10 left-4 right-10 h-1 bg-black/10"></div>
                    {/* Plus overlay on hover */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="bg-blue-600 text-white rounded-full p-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 group-hover:text-white truncate px-1">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- SEARCH BAR --- */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#292929] text-sm text-white placeholder-gray-400 rounded py-2.5 pl-10 pr-4 border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
            </div>
          </div>

          {/* --- NAVIGATION TABS --- */}
          <div className="flex items-center gap-6 border-b border-[#333] mb-4">
            <button className="text-sm font-semibold pb-3 border-b-2 border-blue-500 text-blue-500">
              {currentFolderId ? "Browse" : "Recent"}
            </button>
            <button className="text-sm font-medium pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition">
              Shared with Me
            </button>
            <button className="text-sm font-medium pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition">
              Favorites
            </button>
          </div>

          {/* --- FOLDER / FILE BROWSER --- */}
          <div className="w-full">
            {/* Breadcrumb / Back Button */}
            {currentFolderId && (
              <div
                className="mb-4 flex items-center text-gray-400 hover:text-white cursor-pointer"
                onClick={() => setCurrentFolderId(null)}
              >
                <Icons.Back />
                <span className="ml-2 text-sm">Back to Recent</span>
                <span className="mx-2 text-gray-600">/</span>
                <span className="text-white text-sm font-bold">
                  {currentFolderName}
                </span>
              </div>
            )}

            {/* Table Headers */}
            <div className="grid grid-cols-12 text-xs text-gray-500 pb-2 px-2 border-b border-[#333] mb-1">
              <div className="col-span-6 md:col-span-7">Name</div>
              <div className="col-span-3 md:col-span-3 hidden sm:block">
                Date modified
              </div>
              <div className="col-span-3 md:col-span-2 hidden sm:block text-right pr-4">
                Owner
              </div>
            </div>

            {/* List Rows */}
            <div className="space-y-1">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    item.type === "folder" ? setCurrentFolderId(item.id) : null
                  }
                  className="group grid grid-cols-12 items-center py-2.5 px-2 rounded hover:bg-[#292929] cursor-pointer transition border border-transparent hover:border-[#333]"
                >
                  {/* Name Column */}
                  <div className="col-span-12 sm:col-span-6 md:col-span-7 flex items-center gap-4 min-w-0">
                    <div className="flex-shrink-0">
                      {item.type === "folder" ? (
                        <Icons.Folder />
                      ) : item.type === "pdf" ? (
                        <Icons.PDF />
                      ) : (
                        <Icons.Word />
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-white truncate">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-gray-500 truncate">
                        {item.path}
                      </span>
                    </div>
                  </div>

                  {/* Date Column */}
                  <div className="hidden sm:block col-span-3 text-xs text-gray-400">
                    {item.date}
                  </div>

                  {/* Owner Column */}
                  <div className="hidden sm:block col-span-3 md:col-span-2 text-xs text-gray-400 text-right pr-4">
                    {item.owner}
                  </div>
                </div>
              ))}

              {displayedItems.length === 0 && (
                <div className="text-center py-10 text-gray-500 text-sm">
                  Empty folder
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
