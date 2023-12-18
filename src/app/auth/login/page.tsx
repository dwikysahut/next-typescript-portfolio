'use client';
import React, { useState } from 'react'


const TextInput = React.lazy(() => import('@/app/components/TextInput'))
import { Button, FormControl, FormLabel, Input } from '@mui/material'
import { FaWhatsapp } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi';
import AutoTyping from '@/app/components/AutoTyping';

export default function LoginPage() {

  const [textElement, setTextElement] = useState('Welcome ...');
  const [textShow, setTextShow] = useState({ index: 0, text: '', isFull: false });


  return (
    <div className='min-h-screen bg-primary flex justify-center  items-center'>
      <div className='flex bg-secondary py-2 mx-[20vw] rounded-xl  min-h-[400px]   shadow-lg flex-1'>
        <div className='flex-1 justify-center items-center flex'>
          <FaWhatsapp size={250} />
        </div>
        <div className='flex-1 p-7 border-l-2'>

          
          <AutoTyping delayStart={800} delayEnd={100} text='Welcome...'>
            {(text:string)=><h1 className=' block  text-[38px]'>{text}</h1>}
            </AutoTyping>

          <form className='mt-3 flex px-4 flex-col gap-5'>
            <FormControl sx={{ width: '100%' }}>
              <TextInput label='Username' name='Username' placeHolder='Ketik disini untuk mencari' variant='standard' />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <TextInput label='Password' name='Password' placeHolder='Ketik disini untuk mencari' variant='standard' />
            </FormControl>
            <Button className='bg-green-700 mt-9' color='success' variant='contained' startIcon={<FiLogIn />} sx={{ backgroundColor: 'green' }}>Login</Button>
          </form>

        </div>
      </div>
    </div>
  )
}
