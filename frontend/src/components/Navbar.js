import React from 'react'
import logoDark from "../images/logoDark.png"
import logoLight from "../images/logoLight.png"
import logoDefault from "../images/logoDefault.png"
function Navbar({minimal,authToken,setShowModal,showModal,setIsSignUp}) {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  
  }

  return (
    <>
     <nav>
        <div className='logo-container'>
            <img className='logo' src={minimal ? logoDefault:logoLight}/>    
        </div>   
        
        {!authToken && !minimal && <div><button className="nav-button" onClick={handleClick} disabled={showModal}>Log in</button></div>}
     </nav> 
    </>
  )
}

export default Navbar
