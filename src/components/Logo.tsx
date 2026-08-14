import React, { useState } from "react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
  id = "site-logo",
}) => {
  const [hasError, setHasError] = useState(false);

  // The supplied logo is a wide mark; fixed heights keep it crisp and aligned in each layout.
  const sizeClasses = {
    sm: "h-6 sm:h-7 w-auto max-w-[190px]",
    md: "h-7 sm:h-8 md:h-9 w-auto max-w-[220px] sm:max-w-[250px]",
    lg: "h-9 sm:h-10 md:h-11 w-auto max-w-[280px]",
    xl: "h-12 sm:h-14 md:h-16 w-auto max-w-[380px]",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;
  const logoSrc = variant === "dark"
    ? "/images/logonew-transparent.png"
    : "/images/logonew-transparent-light.png";

  if (hasError) {
    // Elegant fallback if image asset is unavailable
    return (
      <div
        id={id}
        className={`logo-fallback inline-flex items-center gap-1.5 font-black tracking-tight select-none ${className}`}
        aria-label="IMPAACT MEDIA"
      >
        <span
          className="text-lg sm:text-xl md:text-2xl font-black text-[#E51B24] tracking-tight uppercase"
          style={{ fontFamily: "'Nissan Brand', 'Nissan Brand Bold', sans-serif" }}
        >
          IMPAACT
        </span>
        <span
          className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight ${
            variant === "dark" ? "text-white" : "text-zinc-900"
          }`}
          style={{ fontFamily: "'Nissan Brand', 'Nissan Brand Bold', sans-serif" }}
        >
          MEDIA
        </span>
      </div>
    );
  }

  return (
    <div
      className={`logo inline-flex items-center justify-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <img
        id={id}
        src={logoSrc}
        alt="IMPAACT MEDIA Graphics & Advertising"
        onError={(e) => {
          setHasError(true);
        }}
        className={`${currentSizeClass} object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-all duration-300`}
        style={{
          verticalAlign: "middle",
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default Logo;
