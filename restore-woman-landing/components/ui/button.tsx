import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium uppercase tracking-wider transition-all duration-300",
          "disabled:opacity-50 disabled:pointer-events-none",
          // Variants
          {
            "bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary":
              variant === "primary",
            "bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground":
              variant === "secondary",
            "bg-white text-primary border border-primary hover:bg-primary hover:text-white":
              variant === "outline",
            "bg-transparent text-primary hover:bg-primary/10":
              variant === "ghost",
          },
          // Sizes
          {
            "px-6 py-3 text-xs": size === "sm",
            "px-10 py-5 text-sm": size === "md",
            "px-14 py-6 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
