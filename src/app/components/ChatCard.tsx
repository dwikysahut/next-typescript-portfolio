import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { AiOutlinePushpin } from "react-icons/ai";
export default function ChatCard() {
  return (
    <div className='flex py-2 '>
      <div className='flex flex-1 gap-2 w-[100%]'>
        <div className='justify-center'>
          <IoPersonCircle size={58} />
        </div>
        <div className='flex flex-col justify-center  w-[100%]  overflow-hidden'>
          <p className='text-lg font-bold'>halo</p>
          <p className='font-light text-xs truncate text-gray-400'>Halo saya dwiky saat ini saya sedang menawarkan banyak kesempatan untuk anda yang mau</p>
        </div>
        <div className='flex flex-col justify-center items-end gap-2 flex-1'>
          <p className='font-light text-xs text-gray-400'>06:59</p>
          <AiOutlinePushpin size={15} />
        </div>
      </div>


    </div>
  )
}
