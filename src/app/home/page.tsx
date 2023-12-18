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
import { db, dbNotesInstance, firebaseApp } from '@/utils/config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getAllMessages, sendMessage } from '../service/message';
import TextInput from '../components/TextInput';
export default function HomePage() {

  const sendHandler = (text: string) => {
    const formBody = {
      id: new Date().toISOString(),
      message: text,
      sender: '123',
      receiver: '321',
      timestamp: new Date().toISOString(),

    }
    sendMessage(formBody)

  }


  return (
    <div className='grid grid-cols-6 box-border h-[calc(100vh-44px)] '>
      <div className='col-span-2 px-4 overflow-hidden flex flex-col py-4'>
        <Navbar />
        <TextInput label='search' name='search' placeHolder='Ketik disini untuk mencari' variant='standard'  />

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
        <div className='px-6 overflow-y-auto py-3 bg-third flex-1 h-100'>
          {[...Array(50).keys()].map(
            i => (<ChatItem index={i} key={i} />)
          )}

        </div>

        <BottomActionChat onSendHandler={sendHandler} />
      </div>
    </div>
  )
}
