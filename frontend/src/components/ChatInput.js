import React, { useState } from 'react'
import axios from "axios"
function ChatInput(props) {
const [textArea,setTextArea]    =   useState("");  
const userId                    = props.user.user_id;
const clickedUserId             = props.clickedUser.user_id;

const addMessage  = async ()  =>{
  try {
    if(textArea===null || textArea.length===0)
    {
      alert("Please enter message !");
      return false;
    }
    const response = await axios.post(`http://localhost:4000/send/message`,{timestamp:new Date().toISOString(),from_user_id:userId,to_user_id:clickedUserId,message:textArea});
    props.getUserMessages();
    props.getClickedUserMessages();
    setTextArea("");
    // const response = await axios.get(`http://localhost:4000/users`,{params:{user_id: JSON.stringify(matchedUserIds)}});
  }
  catch (err) {
    console.log(err)
  }
}


return (
    <div className='chat-input'>
      <textarea value={textArea} onChange={(e)=>setTextArea(e.target.value)}/>
      <button className='secondary-btn' onClick={addMessage}>Submit</button>
    </div>
  )
}

export default ChatInput
