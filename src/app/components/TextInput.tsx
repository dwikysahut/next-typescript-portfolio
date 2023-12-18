import React from 'react'

import { inputType } from '@/type/type'
import { TextField } from '@mui/material'


export default function TextInputField({ label, name, placeHolder, variant }: inputType) {
  return (

    <TextField
      id={name}
      InputLabelProps={{
        style: { color: '#fff', fontWeight: '100', fontSize: '13px' },

      }}

      label={label}
      variant="standard"
      sx={{ input: { color: 'white', borderBottom: "1px solid #ffffff", }, width: '100%' }} />

  )
}
