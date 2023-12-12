import React from 'react'
import { VscSmiley } from "react-icons/vsc";
import { GrAttachment } from "react-icons/gr";
import { Input } from '@mui/material';
import { LuSendHorizonal } from "react-icons/lu";
export default function BottomActionChat() {
  return (
    <div className='h-[50px] px-5 flex gap-5 items-center '>
      <VscSmiley size={20} />
      <GrAttachment size={20} />
      <Input placeholder='Type a message' sx={{ input: { color: 'white', borderBottom: "1px solid #ffffff", }, width: '100%' }} />
      <LuSendHorizonal size={20} />
    </div>
  )
}
