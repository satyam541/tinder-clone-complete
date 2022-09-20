import React from 'react'
import ChatHeader from "../components/ChatHeader.js"
import MatchesDisplay from "../components/MatchesDisplay.js"
import ChatDisplay from "../components/ChatDisplay.js"
function ChatContainer() {
  return (
    <div className='chat-container'>
      <ChatHeader/>
      <div>
        <button className='option'>Matches</button>
        <button className='option'>Chat</button>
      </div>

      <MatchesDisplay/>
      
      
      <ChatDisplay/>

    </div>
  )
}

export default ChatContainer
