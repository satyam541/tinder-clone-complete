import Home               from "./pages/Home";
import Dashboard          from "./pages/Dashboard";
import Onboard            from "./pages/Onboard";
import LoadingSpinner     from "./components/LoadingSpinner";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import React ,{useState} from "react" 
import { useCookies } from "react-cookie"
const App = () => {
  const [cookies,setCookies,removeCookies]    = useCookies(['user'])
  const authToken                             = cookies.AuthToken;
  const [isLoading,setIsLoading]              = useState(false);
  console.log(isLoading);
  return (
    <div>
      {isLoading && <LoadingSpinner/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home loader={isLoading} />} />
          {authToken && <Route path="/dashboard" element={<Dashboard loader={isLoading} />} />}
          {authToken && <Route path="/onboard" element={<Onboard />} />}
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
