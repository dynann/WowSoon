import React from 'react';

const Button = ({ type = "submit", text = "Sign In", className = "" }) => {
  return (
    <button
      type={type}
      className={`bg-secondary text-white w-[350px] h-[59px] max-w-xs py-4 rounded-[24px] flex items-center justify-center ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
