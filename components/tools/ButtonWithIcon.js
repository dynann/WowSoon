"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

function ButtonWithIcon({ label, icon: Icon, route, onClick }) {
  const router = useRouter();

  const handleClick = () => {
    if(onClick){
      onClick()
    } else if(route){
      router.push(route)
    }
  };

  return (
    <button
      className="relative bg-accent text-secondary font-semibold w-[350px] h-[59px] rounded-2xl flex items-center justify-start px-6"
      onClick={handleClick}
    >
      {/* Render the icon */}
      {Icon && (
        <Icon className="absolute left-6 top-1/2 transform -translate-y-1/2 text-blue-500" size={24} />
      )}

      {/* Vertical separator */}
      <span className="absolute left-[62px] top-1/2 transform -translate-y-1/2 text-gray-500">
        &#8739;
      </span>

      {/* Button label */}
      <span className="pl-[75px]">{label}</span>
    </button>
  );
}

export default ButtonWithIcon;
