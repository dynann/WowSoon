"use client";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";

export default function CustomDropdown() {
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const locations = ["Phnom Penh", "Siem Reap", "Battambang"];

  return (
    <div className="relative inline-block text-left text-black">
      <div className="flex items-center">
        <MdLocationOn className="text-2xl cursor-pointer text-primary" />
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="ml-2 bg-transparent rounded px-2 py-1 text-left w-full focus:outline-none"
        >
          {selectedLocation}
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
          <ul className="py-1">
            {locations.map((location) => (
              <li
                key={location}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
