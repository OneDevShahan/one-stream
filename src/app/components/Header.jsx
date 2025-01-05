"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <img
              src="/Logo.svg"
              alt="Logo"
              className="h-10 w-10 cursor-pointer"
            />
            <span className="text-lg md:text-2xl font-bold ml-2">
              OneStream
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* User Profile & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="p-2 border rounded-full dark:bg-gray-800 bg-gray-300 text-sm"
            onClick={() => alert("Favorite List (Coming Soon!)")}
          >
            ❤️ Favorites
          </button>

          <button
            className="p-2 border rounded-full dark:bg-gray-800 bg-gray-300 text-sm"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border rounded-full dark:bg-gray-800 bg-gray-300 text-sm"
            >
              👤
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border rounded-md shadow-lg">
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Settings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => alert("Logging out...")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex flex-col md:hidden p-4">
        <button
          className="p-2 border rounded-md w-full text-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
        {menuOpen && (
          <nav className="flex flex-col items-center space-y-4 mt-4 text-sm font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>

            <button
              className="p-2 border rounded-full dark:bg-gray-800 bg-gray-300 text-sm"
              onClick={() => alert("Favorite List (Coming Soon!)")}
            >
              ❤️ Favorites
            </button>

            <button
              className="p-2 border rounded-full dark:bg-gray-800 bg-gray-300 text-sm"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
            </button>

            <button
              className="p-2 border rounded-full dark:bg-gray-800 bg-gray-300 text-sm"
              onClick={() => alert("Logging out...")}
            >
              👤 Logout
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
