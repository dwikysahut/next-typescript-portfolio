import React, { ReactNode } from 'react'

export default function profileLayout({ children }: { children: ReactNode }) {
  return (
  <div className="flex min-w-full justify-center items-center min-h-screen">
   {children}
  </div>
  )
}
