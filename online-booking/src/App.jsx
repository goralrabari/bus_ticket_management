import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";           


import BusBooking from "./components/BusBooking";

 

function App() {
 
  return (
    
<Router>
      <Routes>
        <Route path="/" element={<BusBooking />} />
        <Route path="/select-seat/:busId" element={<SeatSelection />} />
      </Routes>
    </Router>

    
   
   
  )

}

export default App;
