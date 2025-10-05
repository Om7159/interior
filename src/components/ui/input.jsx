import React from 'react'

export const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${className}`}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input
