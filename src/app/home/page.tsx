'use client';

import React from 'react'
import Navbar from '../components/Navbar'
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';
import ChatCard from '../components/ChatCard';
import { IoPersonCircle } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import BottomActionChat from '../components/BottomActionChat';
import ChatItem from '../components/ChatItem';
export default function HomePage() {
  return (
    <div className='grid grid-cols-6 box-border h-[calc(100vh-44px)] '>
      <div className='col-span-2 px-4 overflow-hidden flex flex-col py-4'>
        <Navbar />
        <TextField
          id="standard-basic"
          InputLabelProps={{
            style: { color: '#fff', fontWeight: '100', fontSize: '13px' },

          }}

          label="Search or Start new Chat"
          variant="standard"
          sx={{ input: { color: 'white', borderBottom: "1px solid #ffffff", }, width: '100%' }} />
        <div className=' mt-5 flex-1 overflow-y-auto h-100'>
          {[...Array(20).keys()].map(
            i => (<ChatCard key={i} />)
          )}
        </div>
      </div> 
      <div className="col-span-4 flex flex-col overflow-hidden">
        <div className='p-4 py-1 '>
          <div className='flex gap-2'>
            <IoPersonCircle size={55} />
            <div className='flex justify-between flex-1'>
              <div className='flex flex-col justify-center'>
                <p className='font-bold text-sm'>Keluarga</p>
                <p className='text-xs font-extralight text-gray-300'>saya, adek, +62849230023</p>
              </div>
              <div className='flex flex-row justify-around items-center gap-7'>
                <CiVideoOn size={20} />
                <FiPhone size={20} />
                <VscSearch size={20} />

              </div>
            </div>
          </div>
          {/* <div></div> */}


        </div>
        <div className='px-6 overflow-y-auto pt-3 bg-white flex-1 h-100'>
          {[...Array(50).keys()].map(
            i => (<ChatItem index={i} key={i} />)
          )}

        </div>

        <BottomActionChat />
      </div>
    </div>
  )
}
