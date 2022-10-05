import React,{useState} from "react" 
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

const AuthModal = ({setShowModal,signUp})=>{
  const [email,setEmail]                      = useState(null)
  const [password,setPassword]                = useState(null)
  const [confirmPassword,setConfirmPassword]  = useState(null)
  const [error,setError]                      = useState(null)
  const [cookies,setCookies,removeCookies]    = useCookies(['user'])      
  let navigate = useNavigate();
  const handleClick = ()=>{
  
    setShowModal(false);
  
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try
    {
      if(signUp && (password!==confirmPassword))
      {
          setError("passwords needs to match")
          return
      }
      const response  = await axios.post(`http://localhost:4000/${signUp ? 'signup' :'login'}`,{email,password})
      // console.log(response.data);
      // setCookies('Email',response.data.email)
      setCookies("UserId",response.data.userId)
      setCookies("Email",response.data.email)
      // setCookies("User",response.data.userObject)
      setCookies('AuthToken',response.data.token)
      // console.log(response);
      const success   = response.status ==  201;
      if(success && signUp) navigate("/onboard")
      if(success && !signUp) navigate("/dashboard")
      window.location.reload();
      

    }
    catch (error)
    {
      console.log(error);
    }


  
  }



  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>x</div>
      <h2>{signUp ? "Create Account":"Log In"}</h2>
      <p>By clicking Log in, you agree to our terms. Learn how we process our Privacy Policy and Cookie Policy.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" name="email" placeholder="email"
         required={true} onChange={(e)=>setEmail(e.target.value)}  />
        <input type="password" id="password" name="password" placeholder="password"
         required={true} onChange={(e)=>setPassword(e.target.value)}  />
        {signUp && <input type="password" id="confirm_password" name="confirm_password" placeholder="confirm_password"
         required={true} onChange={(e)=>setConfirmPassword(e.target.value)}  />}

        <input className="secondary-btn" type="submit"/>
        <p>{error}</p>
      </form>
      <hr/>
      <h2>Get The App</h2>
      AUTH MODAL
    </div>

  )


}

export default AuthModal