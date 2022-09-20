import React , {useState} from 'react'
import ChatContainer from '../components/ChatContainer.js'
import TinderCard from "react-tinder-card"
function Dashboard() {
  return (
    <div className='dashboard'>
      <ChatContainer/>
      <div className='swiper-container'>
        <div className='card-container'>

          

        </div>
      </div>
    </div>
  )
}

export default Dashboard
