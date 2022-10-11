import React , {useEffect, useState} from 'react'
import Navbar from "../components/Navbar.js"
import AuthModal from "../components/AuthModal.js"
function Home(props) {
  const [showModal,setShowModal]              = useState(false);
  const [signUp,setIsSignUp]                  = useState(props.loader);

  const authToken=false;
  const userAction =  ()  =>{
    setShowModal(true);
    setIsSignUp(true);
  }


  useEffect(()=>{
    props.setIsLoading(false)
  },[]);

  return (
    <div className='overlay' style={props.isLoading ? {filter: `blur(4px)`}:{filter: `blur(0px)`}} >
    <Navbar minimal={false} authToken={false} setShowModal={setShowModal} showModal={showModal}
    setIsSignUp={setIsSignUp}  />
      <div className="home">
        <h1 className='primary-title'> <div className='text-rainbow-animation'> Swipe Right </div></h1>
        <button className='primary-button' onClick={userAction}>
        {authToken ? "Sign out": "Create Account"}

        </button>
    {showModal && (
      <AuthModal setShowModal={setShowModal} signUp={signUp} setIsLoading={props.setIsLoading} />
    )}

      </div>
    </div>
  )
}

export default Home
