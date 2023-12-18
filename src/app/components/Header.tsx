'use client'

import React from 'react'

import { FaRegWindowRestore, FaRegWindowMinimize } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
export default function Header() {
  return (

    <div className='flex justify-between bg-primary py-3 px-2'>
      <div className='flex-[5]'>
        <h1 className='font-light text-sm'>Whatsapp</h1>
      </div>
      <div className='flex flex-1 items-center gap-8 justify-end mr-4'>
        <FaRegWindowMinimize size={15} />
        <FaRegWindowRestore size={15} />
        <button onClick={() => {
          window.open("", "_blank", "");
          window.close();
        }}>
          <IoMdClose size={20} />

        </button>
      </div>
    </div>

  )
}
