import React,{ useEffect,useState } from 'react'
import Chat from "../components/Chat.js"
import ChatInput from "../components/ChatInput.js"
import axios from "axios"
function ChatDisplay(props) {

  const [userMessages,setUserMessages]                = useState(null);
  const [clickedUserMessages,setClickedUserMessages]  = useState(null);

  const getUserMessages= async ()=>{


    try {

      const response = await axios.get(`http://localhost:4000/get/chats`,{params:{from_id:props.user.user_id,to_id:props.clickedUser.user_id}});
      return response.data.chats;
      // const response = await axios.get(`http://localhost:4000/users`,{params:{user_id: JSON.stringify(matchedUserIds)}});
    }
    catch (err) {
      console.log(err)
    }

  }
  const getClickedUserMessages= async (from_id,to_id)=>{


    try {

      const response = await axios.get(`http://localhost:4000/get/chats`,{params:{from_id:props.clickedUser.user_id,to_id:props.user.user_id}});
      return response.data.chats;
      // const response = await axios.get(`http://localhost:4000/users`,{params:{user_id: JSON.stringify(matchedUserIds)}});
    }
    catch (err) {
      console.log(err)
    }

  }


  useEffect(() => {
    getUserMessages().then(function(result){
      setUserMessages(result);
    });
    
    getClickedUserMessages().then(function(result){
      setClickedUserMessages(result);
    });
  },[getUserMessages,getClickedUserMessages])

  const messages  = [];
  if(userMessages!==null)
  {
    userMessages.forEach(userMessage=>{
      const formattedMessage          = {}
      formattedMessage['name']        = props.user.first_name;
      formattedMessage['user_id']     = props.user.user_id;
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
      formattedMessage['user_id']     = props.clickedUser.user_id;
      formattedMessage['url']         = props.clickedUser.url;
      formattedMessage['message']     = clickedUserMessage.message;
      formattedMessage['timestamp']   = clickedUserMessage.timestamp;
      messages.push(formattedMessage);
    })
  }
  const descendingOrderMessages = messages.sort((a,b)=>a.timestamp.localeCompare(b.timestamp))
  return (
    <>
    <Chat descendingOrderMessages={descendingOrderMessages} clickedUser={props.clickedUser} />
    <ChatInput user={props.user} clickedUser={props.clickedUser} getUserMessages={getUserMessages} getClickedUserMessages={getClickedUserMessages} />
    </>
  )
}

export default ChatDisplay
