import { dataUserType } from '@/type/type'
import React from 'react'

export default function CardProfile({data}:{data:dataUserType|undefined}) {
  return (
    <div className='flex w-[60vw] h-[200px] bg-slate-400 rounded-2xl shadow-xl hover:bg-slate-500 transition-all duration-500'>
      {data && <p>{data.email}</p>}
    </div>
  )
}
