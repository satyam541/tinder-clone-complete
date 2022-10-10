import React,{ useEffect,useState } from 'react'
import Chat from "../components/Chat.js"
import ChatInput from "../components/ChatInput.js"
import axios from "axios"
function ChatDisplay(props) {

  const [userMessages,setUserMessages]                = useState(null);
  const [clickedUserMessages,setClickedUserMessages]  = useState(null);

  const getMessages= async (from_id,to_id)=>{


    try {

      const response = await axios.get(`http://localhost:4000/get/chats`,{params:{from_id:from_id,to_id:to_id}});
      return response.data.chats;
      // const response = await axios.get(`http://localhost:4000/users`,{params:{user_id: JSON.stringify(matchedUserIds)}});
    }
    catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    getMessages(props.user.user_id,props.clickedUser.user_id).then(function(result){
      setUserMessages(result);
    });
    
    getMessages(props.clickedUser.user_id,props.user.user_id).then(function(result){
      setClickedUserMessages(result);
    });
  },[props.clickedUser])

  const messages  = [];
  if(userMessages!==null)
  {
    userMessages.forEach(userMessage=>{
      const formattedMessage          = {}
      formattedMessage['name']        = props.user.first_name;
      formattedMessage['url']         = props.user.url;
      formattedMessage['message']     = userMessage.message;
      formattedMessage['timestamp']   = userMessage.timestamp;
      messages.push(formattedMessage);
    })
  }
  
  if(clickedUserMessages!==null)
  {
    clickedUserMessages.forEach(clickedUserMessage=>{
      const formattedMessage          = {}
      formattedMessage['name']        = props.clickedUser.first_name;
      formattedMessage['url']         = props.clickedUser.url;
      formattedMessage['message']     = clickedUserMessage.message;
      formattedMessage['timestamp']   = clickedUserMessage.timestamp;
      messages.push(formattedMessage);
    })
  }
  console.log(messages);
  return (
    <>
    <Chat/>
    <ChatInput/>
    </>
  )
}

export default ChatDisplay
