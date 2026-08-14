import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

const sizeClasses = {
  sm: { name: "text-lg", badge: "px-1 py-0.5 text-[5px]", subtitle: "text-[5px] tracking-[0.18em]" },
  md: { name: "text-[22px] sm:text-[24px]", badge: "px-1.5 py-0.5 text-[6px]", subtitle: "text-[6px] tracking-[0.2em]" },
  lg: { name: "text-[28px] sm:text-[32px]", badge: "px-2 py-1 text-[8px]", subtitle: "text-[8px] tracking-[0.22em]" },
  xl: { name: "text-[38px] sm:text-[44px]", badge: "px-2.5 py-1.5 text-[10px]", subtitle: "text-[10px] tracking-[0.24em]" },
};

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
  id = "site-logo",
}) => {
  const styles = sizeClasses[size] || sizeClasses.md;
  const textColor = variant === "dark" ? "text-white" : "text-zinc-950";

  return (
    <div
      id={id}
      className={`inline-flex flex-col items-center leading-none select-none ${className}`}
      aria-label="IMPAACT MEDIA Graphics & Advertising, since 2005"
    >
      <div className="flex items-center gap-1 whitespace-nowrap">
        <span className={`${styles.name} font-black tracking-[-0.075em] text-[#ef2529]`}>
          IMPAACT
        </span>
        <span className={`${styles.name} font-black tracking-[-0.07em] ${textColor}`}>
          MEDIA
        </span>
        <span className={`${styles.badge} rounded-[2px] bg-[#ef2529] text-center font-black leading-[0.9] tracking-tight text-white`}>
          <span className="block">SINCE</span>
          <span className="block">2005</span>
        </span>
      </div>
      <span className={`mt-0.5 font-black uppercase ${styles.subtitle} ${textColor}`}>
        Graphics <span className="text-[#ef2529]">&amp;</span> Advertising
      </span>
    </div>
  );
};

export default Logo;
