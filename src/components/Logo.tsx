import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

const sizeClasses = {
  sm: "w-[126px] sm:w-[140px]",
  md: "w-[172px] sm:w-[188px] lg:w-[200px]",
  lg: "w-[220px] sm:w-[250px]",
  xl: "w-[280px] sm:w-[320px]",
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
        className="block h-auto w-full"
        draggable={false}
      />
    </div>
  );
};

export default Logo;
