import {  TextFieldVariants } from "@mui/material"

export type dataUserType = {
  email: string,
  first_name: string,
  id: number,

}

export type messageType = {
  id: string,
  message: string,
  sender: string,
  receiver: string,
  timestamp: string,
}

export type inputType = {
  label: string,
  name: string,
  placeHolder: string,
  variant: TextFieldVariants  | undefined,
}