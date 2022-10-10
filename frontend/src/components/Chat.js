import React from 'react'
import ucFirst from "ucfirst";
function Chat(props) {
  // console.log(props.descendingOrderMessages);
  return (
    <>
      <div className='chat-display'>
      {props.descendingOrderMessages.length!==0 && props.descendingOrderMessages.map((descendingOrderMessage,_index)=>
      <div key={_index}>
              <div className='chat-message-header'>
                <div className='img-container'>
                  <img src={descendingOrderMessage.url} alt={descendingOrderMessage.name + " profile"} />
                </div>
                <p>{ucFirst(descendingOrderMessage.name)}</p>
              </div>
              <p>{descendingOrderMessage.message}</p>
          </div>
      )}

      </div>
    </>
  )
}

export default Chat
