import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className="
    rounded-full
    bg-gray-500
    px-4
    py-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    text-white
    hover:opacity-75
    transition"
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
