import React, { useEffect, useState } from 'react'
import ChatContainer from '../components/ChatContainer.js'
import TinderCard from "react-tinder-card"
import { useCookies } from "react-cookie"
import axios from "axios"
function Dashboard() {
  const [cookies, setCookies, removeCookies] = useCookies(['user'])
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState([]);
  const [lastDirection, setLastDirection] = useState()
  const db = [
    {

      first_name: 'Scarlet',
      url: '/images/scarlet.webp'
    },

    {
      first_name: 'Elizabeth',
      url: '/images/elizabeth.webp'
    },

    {
      first_name: 'Monica Hall',
      url: '/images/monica.jpg'
    },

    {
      first_name: 'Megan',
      url: '/images/megan.webp'
    },

    {
      first_name: 'Katrina',
      url: '/images/katrina.webp'
    }
  ]
  const characters = db
  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/user/${cookies.UserId}`);
      if (response.data.user !== null) {
        setUser(response.data.user);
      }
    }
    catch (err) {
      console.log(err)
    }


  }
  const getGenderedUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/get/gendered/users/${user.user_id}`);
      setGenderedUsers(response.data.genderedUsers);
    }
    catch (err) {
      console.log(err)
    }
  }
  const swiped = (direction, swipedUser) => {
    // console.log('removing: ' + swipedUser)
    if(direction === 'right')
    {
      updateMatches(swipedUser);
    }
    setLastDirection(direction)
  }

  const updateMatches = async (swipedUser) => {
    console.log(swipedUser);
    try {
      const response = await axios.put(`http://localhost:4000/add/matches`,{'id':user.user_id,'swiped_user_id':swipedUser});
      getUser();
    }
    catch (err) {
      console.log(err)
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }




  useEffect(() => {
    getUser()

  }, [])

  useEffect(() => {
      if(user)
      {
      getGenderedUsers()
      }
    },[user])

  return (
    <>
      {user && <div className='dashboard'>
        <ChatContainer user={user} />
        <div className='swipe-container'>
          <div className='card-container'>

            {genderedUsers.map((character) =>
              <TinderCard className='swipe' key={character.first_name} onSwipe={(dir) => swiped(dir, character.user_id)} onCardLeftScreen={() => outOfFrame(character.first_name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                  <h3>{character.first_name}</h3>
                </div>
              </TinderCard>
            )}
            <div className='swipe-info'>
              {lastDirection ? <p> You swiped {lastDirection}</p> : <p />}
            </div>

          </div>
          {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
        </div>
      </div>}
    </>
  )
}

export default Dashboard
