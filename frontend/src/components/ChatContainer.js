import React from 'react'
import ChatHeader from "../components/ChatHeader.js"
import MatchesDisplay from "../components/MatchesDisplay.js"
import ChatDisplay from "../components/ChatDisplay.js"
function ChatContainer(props) {
  return (
    <div className='chat-container'>
      <ChatHeader user={props.user} />
      <div>
        <button className='option'>Matches</button>
        <button className='option'>Chat</button>
      </div>

      <MatchesDisplay matches={props.user.matches}/>
      
      
      <ChatDisplay/>

    </div>
  )
}

export default ChatContainer
