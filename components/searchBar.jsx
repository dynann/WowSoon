"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative">
      <FiSearch
        className="text-2xl cursor-pointer"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      />
      {isSearchOpen && (
        <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-md p-2 z-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none"
          />
        </div>
      )}
    </div>
  );
}
