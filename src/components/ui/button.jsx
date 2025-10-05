import React from "react"
import { cn } from "@/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[var(--primary)] hover:bg-[var(--primary-600)] text-white",
    outline: "border border-[rgba(44,44,44,0.08)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-white",
    ghost: "bg-transparent text-[var(--dark)] hover:bg-[rgba(44,44,44,0.04)]",
    lux: "accent-gradient text-[rgba(20,20,20,0.95)] shadow-[0_6px_24px_rgba(201,165,90,0.18)]",
  }

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-md px-8",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-transform transform-gpu will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "shadow-sm hover:shadow-md active:translate-y-0.5",
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