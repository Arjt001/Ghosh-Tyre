"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface BookCallButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
}

export function BookCallButton({
  className,
  onClick,
  text = "Book A Call",
}: BookCallButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden",
        "px-4 py-2 rounded-xl",
        "bg-gradient-to-r from-[#F10D17] to-[#b80a11]",
        "hover:from-[#d00b14] hover:to-[#9f080e]",
        "text-white font-semibold text-xs sm:text-sm",
        "shadow-lg hover:shadow-[#F10D17]/30",
        "transition-all duration-300 ease-out",
        "transform active:scale-95",
        "border border-white/20",
        "focus:outline-none focus:ring-2 focus:ring-[#F10D17]/50",
        "cursor-pointer shrink-0 select-none",
        className
      )}
    >
      <div className="relative flex items-center justify-center gap-2">
        <span
          className="relative flex items-center justify-center shrink-0"
          style={{ width: 16, height: 16 }}
        >
          <motion.span
            initial={false}
            animate={isHovered ? { y: -16, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", left: 0, right: 0 }}
            className="flex items-center justify-center"
          >
            <Phone className="w-3.5 h-3.5 text-white fill-current" />
          </motion.span>
          <motion.span
            initial={false}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", left: 0, right: 0 }}
            className="flex items-center justify-center"
          >
            <Phone className="w-3.5 h-3.5 text-white fill-current" />
          </motion.span>
        </span>

        {/* Text with subtle shift */}
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 whitespace-nowrap">
          {text}
        </span>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-out"
        />
      </div>
    </button>
  );
}
