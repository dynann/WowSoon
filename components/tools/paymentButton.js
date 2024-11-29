"use client";
import React from "react";

export default function PaymentButton({
  icon,
  label,
  buttonWidth = "w-[350px]", // Default button width
}) {
  return (
    <div className={`${buttonWidth} px-4`}>
      <button className="flex items-center justify-start w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
        {/* Icon Section */}
        <div className="flex-shrink-0 w-8 h-8">
          {icon} {/* Render the passed icon */}
        </div>
        {/* Spacer */}
        <span className="mx-3 text-gray-500">&#8739;</span> {/* Adjusted space */}
        {/* Text Section */}
        <span className="text-base font-medium text-gray-700">{label}</span>
      </button>
    </div>
  );
}
