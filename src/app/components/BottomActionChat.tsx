'use client'
import React, { useState } from 'react'

import { VscSmiley } from "react-icons/vsc";
import { GrAttachment } from "react-icons/gr";
import { Button, Input } from '@mui/material';
import { LuSendHorizonal } from "react-icons/lu";

type actionProps = {
  onSendHandler: (text: string) => void,

}
export default function BottomActionChat({ onSendHandler }: actionProps) {

  const [text, setText] = useState<string>('');
  return (
    <div className='h-[50px] px-5 flex gap-5 items-center'>
      <VscSmiley size={20} />
      <GrAttachment size={20} />
      <Input onChange={(e) => setText(e.target.value)} placeholder='Type a message' sx={{ input: { color: 'white', borderBottom: "1px solid #ffffff", }, width: '100%' }} />
      <Button onClick={() => onSendHandler(text)}><LuSendHorizonal size={20} /></Button>
    </div>
  )
}
