"use client";

import Link from "next/link";
import Sidebar from "@/components/sidebar/page";

// --------------------
// LEGAL TEMPLATES DATA
// --------------------
const legalTemplates = [
  {
    title: "Bail Application",
    href: "/documentform/bailform",
    category: "Criminal Law",
  },
  {
    title: "Non-Disclosure Agreement",
    href: "/your-path-here/nda",
    category: "Corporate Law",
  },
  {
    title: "Rental Agreement",
    href: "/your-path-here/rental-agreement",
    category: "Property Law",
  },
  {
    title: "Affidavit",
    href: "/your-path-here/affidavit",
    category: "General",
  },
  {
    title: "Employment Contract",
    href: "/your-path-here/employment-contract",
    category: "Labour Law",
  },
];

export default function DocumentsPage() {
  return (
    <div className="flex h-screen bg-[#191919] text-white overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-10 py-8 max-w-[1600px] mx-auto">
          <h1 className="text-3xl font-semibold mb-8">
            Create Legal Document
          </h1>

          {/* TEMPLATES */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">
              Choose a template
            </h2>

            <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
              {legalTemplates.map((template, index) => (
                <Link
                  key={index}
                  href={template.href}
                  className="group w-36 flex-shrink-0"
                >
                  {/* TEMPLATE CARD */}
                  <div className="h-44 w-36 bg-white rounded shadow-md relative transition-transform group-hover:-translate-y-1">
                    {/* Mock document lines */}
                    <div className="absolute top-6 left-4 right-4 h-1 bg-black/10" />
                    <div className="absolute top-9 left-4 right-6 h-1 bg-black/10" />
                    <div className="absolute top-12 left-4 right-8 h-1 bg-black/10" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                        Create
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <p className="mt-3 text-xs text-gray-300 group-hover:text-white text-center truncate">
                    {template.title}
                  </p>

                  {/* CATEGORY */}
                  <p className="text-[10px] text-gray-500 text-center">
                    {template.category}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}
