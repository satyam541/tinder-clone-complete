import Home       from "./pages/Home";
import Dashboard  from "./pages/Dashboard";
import Onboard    from "./pages/Onboard";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import React from "react" 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboard" element={<Onboard />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
