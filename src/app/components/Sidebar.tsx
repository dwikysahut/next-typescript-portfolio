import React from 'react'
import { FiPhone } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BsChatText } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbArchive } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
export default function Sidebar() {
  return (
    <aside className='w-[50px] min-h-screen bg-primary flex flex-col items-center p-2 justify-between'>
      <div className=' flex flex-col items-center  gap-6'>
        <FaWhatsapp size={30} color='green' />
        <div className='relative'>
          <BsChatText size={20} />
          <div className='rounded-full bg-green-600 absolute top-[-8px] right-[-10px] w-[18px] flex justify-center items-center h-[18px]'>
            <span className=' text-[10px] text-black'>23</span>
          </div>

        </div>
        <FiPhone size={20} />
        <HiOutlineStatusOnline size={25} />
      </div>
      <div className=' flex flex-col items-center  gap-6'>
        <IoIosStarOutline size={20} />
        <TbArchive size={20} />
        <IoSettingsOutline size={20} />
        <IoPersonCircleSharp size={30} />
      </div>


    </aside>
  )
}
