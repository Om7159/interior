import React from 'react'

export const Textarea = React.forwardRef(({ className = '', rows = 4, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={`w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${className}`}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
