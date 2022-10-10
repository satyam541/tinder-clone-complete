import React, { useEffect,useState } from 'react'
import axios from "axios"

function MatchesDisplay(props) {
  const matchedUserIds  = props.matches!== null ? props.matches.map(({user_id})=>user_id) : [];
  const [matchedProfiles,setMatchedProfiles] = useState([]);
  const getMatches= async ()=>{

    try {
      const response = await axios.get(`http://localhost:4000/users`,{params:{user_id: JSON.stringify(matchedUserIds)}});
      setMatchedProfiles(response.data.users);

      
    }
    catch (err) {
      console.log(err)
    }

  }

  const setClickedUser = async (user) => { 

    await props.setClickedUser(user);
    // try {
    //   const response = await axios.get(`http://localhost:4000/get/chats`,{params:{from_id:props.userId,to_id:user.user_id}});
      
    // }
    // catch (err) {
    //   console.log(err)
    // }
  }

  useEffect(() => {
    
    getMatches();

  },[props.matches])

  return (
    <>
      <div className='matches-display'>
        {matchedProfiles.length !== 0 && matchedProfiles.map((match,index)=>
          <div key={index} className="match-card" onClick={()=>setClickedUser(match)}>
      
          <div className='img-container'>
            <img src={match.url} alt={match.first_name + " profile"} />
          </div>
          <h3>{match.first_name}</h3>
        </div>
        )}
      </div>
    </>
  )
}

export default MatchesDisplay
