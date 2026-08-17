import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

const sizeClasses = {
  sm: "w-[112px] sm:w-[120px]",
  md: "w-[128px] sm:w-[138px] lg:w-[148px]",
  lg: "w-[176px] sm:w-[192px]",
  xl: "w-[216px] sm:w-[240px]",
};

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
  id = "site-logo",
}) => {
  return (
    <div
      id={id}
      className={`inline-flex shrink-0 select-none ${sizeClasses[size]} ${className}`}
    >
      <img
        src={variant === "dark"
          ? "/images/logo white.png"
          : "/images/logo black.png"}
        alt="IMPAACT MEDIA Graphics & Advertising"
        className="block h-auto w-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)]"
        draggable={false}
      />
    </div>
  );
};

export default Logo;
