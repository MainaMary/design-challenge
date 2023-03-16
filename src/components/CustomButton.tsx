import React from "react";
export interface BtnProps {
    type?: "submit" | "button" | "reset";
    className?: string;
    onClick?: (x: any) => void;
    children: string;
    color?: boolean;
  }

const CustomButton = ({
  type = "submit",
  className = "",
  children,
  onClick,
  color,
}: BtnProps) => {
  const backgroundColor = {
    primary: {
    bColor: "bg-gradient-to-r from-[#FF9420] to-[#FFB86C]",
      text: "text-white",
    
     
      width: "w-1/2",
    },
    secondary: {
      bColor: "bg-white",
      text: "text-secondary",
      
      width: "w-1/4",
    },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `${
          color
            ? backgroundColor.primary.bColor
            : backgroundColor.secondary.bColor
        } 
        ${
          color
            ? backgroundColor.primary.width
            : backgroundColor.secondary.width
        }
      
       
         rounded-sm md:items-center text-black py-3 px-4 text-base  font-medium 
        ${
          color ? backgroundColor.primary.text : backgroundColor.secondary.text
        } ` + className
      }
    >
      {children}
    </button>
  );
};

export default CustomButton;
