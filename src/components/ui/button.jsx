import React from "react"
import { cn } from "@/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[var(--primary)] hover:bg-[var(--primary-600)] text-white hover:shadow-[0_8px_32px_rgba(var(--primary-rgb),0.24)] hover:scale-[1.02]",
    outline: "border border-[rgba(44,44,44,0.08)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-white hover:shadow-[0_8px_24px_rgba(44,44,44,0.15)] hover:scale-[1.02] hover:border-transparent",
    ghost: "bg-transparent text-[var(--dark)] hover:bg-[rgba(44,44,44,0.04)] hover:shadow-[0_4px_16px_rgba(44,44,44,0.08)] hover:scale-[1.01]",
    lux: "accent-gradient text-[rgba(20,20,20,0.95)] shadow-[0_6px_24px_rgba(201,165,90,0.18)] hover:shadow-[0_12px_40px_rgba(201,165,90,0.32)] hover:scale-[1.03] hover:brightness-110",
  }

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-md px-8",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ease-out transform-gpu will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none",
        "shadow-sm hover:shadow-md active:translate-y-0.5 active:scale-[0.98] active:shadow-sm",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }