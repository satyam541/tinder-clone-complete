import React from 'react'
import ucFirst from "ucfirst";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
function ChatHeader(props) {
  let navigate = useNavigate();
  const [cookies,setCookies,removeCookies]    = useCookies(['user']) 

  const logout  = ()=>{ 
    removeCookies('UserId',cookies.UserId);
    removeCookies('AuthToken',cookies.AuthToken);
    removeCookies('Email',cookies.Email);
    removeCookies('User',cookies.User);
    props.setIsLoading(true)
    navigate('/');
    window.location.reload();

  }
  return (
    <div className='chat-container-header'>
      <div className='profile'>
        <div className='img-container'>
            <img src={props.user!==null && ucFirst(props.user.url)} alt="not found" />
        </div>
        <h3>{props.user!==null && ucFirst(props.user.first_name)}</h3>
      </div>
      <i className='log-out-icon' onClick={logout}>←</i>
    </div>
  )
}

export default ChatHeader
