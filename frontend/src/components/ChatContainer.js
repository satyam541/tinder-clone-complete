import React,{useState,useEffect} from 'react'
import ChatHeader from "../components/ChatHeader.js"
import MatchesDisplay from "../components/MatchesDisplay.js"
import ChatDisplay from "../components/ChatDisplay.js"
function ChatContainer(props) {
  const [clickedUser,setClickedUser] = useState(null);

  const userClicked = ()  =>{

    console.log(clickedUser);
  
  }
  

  useEffect(() =>{

    userClicked();

  },[clickedUser])



  return (
    <div className='chat-container'>
      <ChatHeader user={props.user} />
      <div>
        <button className='option' onClick={()=>setClickedUser(null)}>Matches</button>
        <button className='option' disabled={clickedUser ? false :true} >Chat</button>
      </div>

      {!clickedUser && <MatchesDisplay matches={props.user.matches} setClickedUser={setClickedUser}/>}
      
      
      {clickedUser && <ChatDisplay user={props.user} clickedUser={clickedUser}/>}

    </div>
  )
}

export default ChatContainer
