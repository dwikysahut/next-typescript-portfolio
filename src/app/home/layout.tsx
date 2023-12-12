import React, { ReactNode } from 'react'

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-w-full h-screen  box-border">
      <Sidebar />
      <div className='flex flex-col w-100 flex-1'>
        <Header />
        <section className='bg-secondary w-100 flex-auto px-2'>
          {children}
        </section>

      </div>
    </main>
  )
}
