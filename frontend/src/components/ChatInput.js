import React, { useState } from 'react'

function ChatInput() {
const [textArea,setTextArea]    =   useState();  
return (
    <div className='chat-input'>
      <textarea value={textArea} onChange={(e)=>setTextArea(e.target.value)}/>
      <button className='secondary-btn'>Submit</button>
    </div>
  )
}

export default ChatInput
