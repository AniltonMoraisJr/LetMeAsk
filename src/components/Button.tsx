import React, { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  isOutline = false,
  ...props
}) => {
  return (
    <button className={`button ${isOutline ? "outlined" : ""}`} {...props} />
  );
};
