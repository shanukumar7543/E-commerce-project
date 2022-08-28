import React from 'react'
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer';
// import { Routes,Route } from 'react-router-dom';
// import Login from './Login/Login';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
   <>
   <Navbar/>
   <Mainpage/>
   <Slider/>
   <Slider/>
   <Slider/>
   <Slider/>
   <Slider/>
   <Footer/>
   
   {/* <li><Link to="/login">Login</Link></li> 
   
     

<Routes>
<Route path="/login" element={<Login />} />
</Routes> */}
</>
</div>
  )
}

export default App;


          

