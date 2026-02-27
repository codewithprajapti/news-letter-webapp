"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="md:hidden block border-0 relative">
        <div className="flex flex-col">
          <button onClick={toggleMenu} className="text-logo">
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        <div
          className={`fixed top-15 right-0 h-screen bg-white w-64 p-4 transform transition-transform duration-300 z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Links */}
          <div className="flex flex-col gap-2 text-lg">
            <Link href="/">Tesla</Link>
            <Link href="/usBusiness">US Business Headlines</Link>
            <Link href="/techCrunch">TechCrunch</Link>
            <Link href="/wallStreet">Wall Street Journal</Link>
          </div>
        </div>
      </div>
    </>
  );
}
