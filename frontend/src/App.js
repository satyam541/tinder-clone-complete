import Home       from "./pages/Home";
import Dashboard  from "./pages/Dashboard";
import Onboard    from "./pages/Onboard";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import React from "react" 
import { useCookies } from "react-cookie"
const App = () => {
  const [cookies,setCookies,removeCookies]    = useCookies(['user'])
  const authToken   = cookies.AuthToken;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {authToken && <Route path="/dashboard" element={<Dashboard />} />}
          {authToken && <Route path="/onboard" element={<Onboard />} />}
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
