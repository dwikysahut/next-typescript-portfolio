import React, { ReactNode, useEffect, useState } from "react";

function AutoTyping({ text, delayStart,delayEnd, children }: { text: string, delayStart: number, delayEnd:number, children: (text: string) => boolean | void | React.ReactElement | null | undefined}) {
  const [currentText, setCurrentText] = useState({ text: '', index: 0, isFull: false })

  useEffect(() => {
    if (currentText.index <= text.length && !currentText.isFull) {

      if (currentText.index == text.length) {
        setCurrentText(prevState => ({ ...prevState, isFull: true }))
      }
      else {

        const timeout = setTimeout(() => {
          setCurrentText((prevState) => ({ ...prevState, text: prevState.text + text[prevState.index], index: prevState.index + 1 }))
        }, delayStart)
        return () => clearTimeout(timeout)
      }

    }
    else {
      if (currentText.index > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prevState) => ({ ...prevState, text: text.slice(0, prevState.index), index: prevState.index - 1 }))
        }, delayEnd)
        return () => clearTimeout(timeout)
      }
      else {
        setCurrentText(prevState => ({ ...prevState, isFull: false, index: 1 }))
      }




      //setCurrentText((prevState)=>({text:text[0],index:1}))

    }
  }, [text, delayStart,delayEnd, currentText])

  return (
    <>
      {children(currentText.text)}
    </>
  )
}
export default AutoTyping;