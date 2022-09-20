import React , {useState} from 'react'
import Navbar from "../components/Navbar.js"
import AuthModal from "../components/AuthModal.js"
function Home() {
  const [showModal,setShowModal] =useState(false);
  const [signUp,setIsSignUp] = useState(null);
  const authToken=false;
  const userAction =  ()  =>{
    console.log('userAction');
    setShowModal(true);
    setIsSignUp(true);
  }
  return (
    <div className='overlay'>
    <Navbar minimal={false} authToken={false} setShowModal={setShowModal} showModal={showModal}
    setIsSignUp={setIsSignUp}  />
      <div className="home">
        <h1 className='primary-title'>Swipe Right</h1>
        <button className='primary-button' onClick={userAction}>
        {authToken ? "Sign out": "Create Account"}

        </button>
    {showModal && (
      <AuthModal setShowModal={setShowModal} signUp={signUp}/>
    )}

      </div>
    </div>
  )
}

export default Home
