import React, { useEffect, useState } from 'react'
import ChatContainer from '../components/ChatContainer.js'
import TinderCard from "react-tinder-card"
import { useCookies } from "react-cookie"
import axios from "axios"
function Dashboard() {
  const [cookies,setCookies,removeCookies]    = useCookies(['user'])  
  const [user,setUser]                        = useState(null);
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


    const getUser = async ()  => {
      try {
          const response = await axios.get(`http://localhost:4000/user/${cookies.UserId}`);
          setUser(response.data.user);
      }
      catch (err)
      {
        const response=err;
        setUser(response);
      }
    
    
    }
    useEffect(() => {
      getUser();
    },[])

  return (
    <>
      {user && <div className='dashboard'>
        <ChatContainer user={user} />
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
      </div>}
    </>
  )
}

export default Dashboard
