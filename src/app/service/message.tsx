import { messageType } from "@/type/type"
import { dbNotesInstance } from "@/utils/config/firebase"
import { addDoc, getDocs } from "firebase/firestore"

export const sendMessage = (message: messageType) => {
  addDoc(dbNotesInstance, message)
}


export const getAllMessages = async () => {
  const data = await getDocs(dbNotesInstance);
  console.log(data)

}