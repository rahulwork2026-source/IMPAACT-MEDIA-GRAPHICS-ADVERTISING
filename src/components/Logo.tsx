import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

const sizeClasses = {
  sm: "w-[132px] sm:w-[144px]",
  md: "w-[158px] sm:w-[174px] lg:w-[190px]",
  lg: "w-[208px] sm:w-[232px]",
  xl: "w-[260px] sm:w-[288px]",
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
