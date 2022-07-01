import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  type?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, type = "filled", size, onClick }: ButtonProps) => {
  let className = "button";

  if (!!type) {
    className += type === "filled" ? " filled" : " outlined";
  }

  return (
    <button
      className={className}
      onClick={(e) => (!!onClick ? onClick(e) : null)}
    >
      {title}
    </button>
  );
};

export default Button;
