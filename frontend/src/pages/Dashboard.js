import React, { useState } from 'react'
import ChatContainer from '../components/ChatContainer.js'
import TinderCard from "react-tinder-card"
function Dashboard() {
  const db = [
    {

      name: 'Scarlet',
      url: '/images/scarlet.webp'
    },

    {
      name: 'Elizabeth',
      url: '/images/elizabeth.webp'
    },

    {
      name: 'Monica Hall',
      url: '/images/monica.jpg'
    },

    {
      name: 'Megan',
      url: '/images/megan.webp'
    },

    {
      name: 'Katrina',
      url: '/images/katrina.webp'
    }
  ]
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  return (
    <div className='dashboard'>
      <ChatContainer />
      <div className='swipe-container'>
        <div className='card-container'>

          {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
          <div className='swipe-info'>
            {lastDirection ? <p> You swiped {lastDirection}</p> :<p/>}
          </div>

        </div>
        {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
      </div>
    </div>
  )
}

export default Dashboard
