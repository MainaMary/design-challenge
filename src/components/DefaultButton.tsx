import React from "react";
 interface BtnProps {
  type?: "submit" | "button" | "reset";
  className?: string;
  onClick?: (x: any) => void;
  children: string;
  color?: boolean;
}

const DefaultButton = ({
  type = "submit",
  className = "",
  children,
  onClick,
}: BtnProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default DefaultButton;
