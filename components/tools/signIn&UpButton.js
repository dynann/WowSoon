import React from 'react';

const Button = ({ type = "submit", text = "Sign In", className = "" }) => {
  return (
    <button
      type={type}
      className={` w-[350px] h-[59px] max-w-xs py-4 rounded-[24px] flex items-center justify-center bg-primary text-secondary ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

