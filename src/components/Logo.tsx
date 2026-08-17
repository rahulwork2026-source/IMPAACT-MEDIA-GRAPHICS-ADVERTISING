import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

const sizeClasses = {
  sm: "w-[104px] sm:w-[112px]",
  md: "w-[116px] sm:w-[124px] lg:w-[132px]",
  lg: "w-[160px] sm:w-[176px]",
  xl: "w-[200px] sm:w-[224px]",
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
