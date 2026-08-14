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

  // Proportional sizing calibrated for PC, tablet, and mobile with sharp text visibility
  const sizeClasses = {
    sm: "h-7 sm:h-8 md:h-8.5 w-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px]",
    md: "h-8 sm:h-8.5 md:h-9 lg:h-9.5 xl:h-10 w-auto max-w-[200px] sm:max-w-[225px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[310px]",
    lg: "h-9.5 sm:h-11 md:h-12 lg:h-13 w-auto max-w-[240px] sm:max-w-[270px] md:max-w-[300px] lg:max-w-[340px]",
    xl: "h-13 sm:h-15 md:h-17 w-auto max-w-[320px] sm:max-w-[380px] md:max-w-[440px]",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;
  const logoSrc = variant === "dark" ? "/images/logo-white.png" : "/images/logo.png";

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
      className={`logo div.logo-wrapper inline-flex items-center justify-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <img
        id={id}
        src={logoSrc}
        alt="IMPAACT MEDIA Graphics & Advertising"
        onError={(e) => {
          // If dark logo variant fails, try default logo
          const target = e.currentTarget;
          if (target.src.includes("logo-white.png")) {
            target.src = "/images/logo.png";
          } else {
            setHasError(true);
          }
        }}
        className={`${currentSizeClass} object-contain transition-all duration-300`}
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

