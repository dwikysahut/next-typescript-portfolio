import Image from 'next/image'
import HomeLayout from './components/HomeLayout';
import { Component } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { redirect } from 'next/navigation';


export default function Home() {

  redirect('/auth/login');

  return (
    <main className="bg-primary flex min-h-screen flex-col items-center justify-center">
      <div className='animate-bounce transition-all duration-1000'>

        <FaWhatsapp size={150} />

      </div>
      <h1 className="text-center mt-3 font-extrabold font-serif text-xl">Welcome</h1>
    </main>
  )
}
