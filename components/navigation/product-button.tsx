"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export function ProductButton({
  isExpanded,
  onClick,
  className,
  children,
}: ProductButtonProps) {
  return (
    <Button
      variant="default"
      onClick={onClick}
      className={cn(
        // Mobile-first responsive sizing:
        // h-12 (48px) ensures touch target > 44px
        // w-full takes full width on mobile
        // text-base (16px) is readable on mobile, sm:text-lg scales up
        "w-full justify-between h-12 text-base sm:text-lg font-medium",
        // Smooth transitions for theme switching and interactions
        "transition-all duration-300 ease-in-out",
        // Active state scale for tactile feel
        "active:scale-[0.98]",
        // Theme-aware colors are handled by variant="default" (using --primary/--primary-foreground)
        // Light Mode: Black bg, White text
        // Dark Mode: White bg, Black text
        className,
      )}
    >
      {children}
      {isExpanded ? (
        <ChevronUp className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <ChevronDown className="h-5 w-5 transition-transform duration-300" />
      )}
    </Button>
  );
}
