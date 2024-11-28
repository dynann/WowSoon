import React from "react";
import { Button3 } from "oxy-ui";
import "oxy-ui/dist/style.css";

const CustomButton = ({ children, onClick, className, ...props }) => {
  return (
    <Button3 onClick={onClick} className={className} {...props}>
      {children}
    </Button3>
  );
};

export default CustomButton;
