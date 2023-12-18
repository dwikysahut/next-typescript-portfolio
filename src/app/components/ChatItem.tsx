import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'

const color = [
  "red", "blue", "green", "yellow"
]
export default function ChatItem({ index }: { index: number | 0 }) {
  return (
    <>
      {
        index % 2 === 0 ?
          <div className='flex gap-2 justify-end'>
            <div className=' bg-secondary flex p-1 rounded-br-none rounded-tr-xl rounded-tl-xl rounded-bl-xl px-2'>

              <div className='flex flex-col justify-center'>
                <p className={`text-purple-200 text-sm`}>Jo</p>
                <p className='text-[11px]'>iya ada apa?</p>
              </div>
              <div className='flex flex-col justify-end items-end ml-4'>
                <span className='text-[9px] font-extralight'>16.02</span>
              </div>

            </div>

          </div> :
          <div className='flex gap-2'>
            <IoPersonCircle size={35} color='black' />
            <div className='bg-secondary flex = p-1 rounded-br-xl rounded-tr-xl rounded-tl-none rounded-bl-xl px-2'>
              <div className='flex flex-col justify-center '>
                <p className='text-purple-200 text-sm'>dwiky</p>
                <p className='text-[11px]'>dwiky van</p>
              </div>
              <div className='flex flex-col justify-end items-end ml-4'>
                <span className='text-[9px] font-extralight'>16.02</span>

              </div>
            </div>
          </div>

      }
    </>

  )
}
