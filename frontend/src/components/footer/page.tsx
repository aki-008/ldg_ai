'use client';

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 mt-20 shadow-inner">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/legal-logo.svg" alt="Legal Logo" className="h-10 w-10 drop-shadow-lg" />
              <span className="text-xl font-extrabold tracking-widest text-white uppercase">LDG</span>
            </div>
            <p className="text-sm text-white opacity-80">
              Draft legally structured documents with verified clauses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/generate" className="hover:underline transition">
                  Document Generator
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:underline transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:underline transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:underline transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/terms" className="hover:underline transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:underline transition">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="#faq" className="hover:underline transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="mailto:support@ldg.io" className="hover:underline transition">
                  Email Support
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:underline transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:underline transition">
                  Status Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white opacity-70">
              © {currentYear} LDG. All rights reserved. Not legal advice.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://twitter.com"
                className="text-white hover:text-black hover:bg-white p-2 rounded transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 01.77 16.07a11.616 11.616 0 005.516 1.694" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-black hover:bg-white p-2 rounded transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.553-1.553-2.553-1.554 0-1.792 1.214-1.792 2.46v3.271H8.84V9.297h2.616v1.297h.037c.364-.691 1.255-1.413 2.583-1.413 2.766 0 3.276 1.817 3.276 4.18v4.977zM5.005 8.080c-.889 0-1.604-.721-1.604-1.607a1.607 1.607 0 111.604 1.607zm1.348-2.953c0 .894-.721 1.616-1.616 1.616S2.72 6.021 2.72 5.127A1.616 1.616 0 014.337 3.51c.894 0 1.616.722 1.616 1.616zM17.668 1H2.225C1.02 1 0 2.02 0 3.225v13.554C0 17.98 1.02 19 2.225 19h15.443c1.207 0 2.225-1.02 2.225-2.225V3.225C19.893 2.02 18.876 1 17.668 1z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                className="text-white hover:text-black hover:bg-white p-2 rounded transition"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.112-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.547 9.547 0 012.503.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.192 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
