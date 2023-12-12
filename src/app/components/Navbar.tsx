import React from 'react'
import { PiNotePencil } from "react-icons/pi";
import { MdOutlineFilterList } from "react-icons/md";
export default function Navbar() {
  return (
   
    <div className='flex justify-between'>
      <div>
        <h1 className='font-bold text-xl'>Chats</h1>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <PiNotePencil size={20} />
        <MdOutlineFilterList size={20} />
      </div>

    </div>

  )
}
