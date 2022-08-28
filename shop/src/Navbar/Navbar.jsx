import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div style={{display:"flex", height:"80px",width:"100%",backgroundColor:"black",color:"white",textAlign:"center",textAlign:"justify",justifyContent:"center",paddingTop:"10px",position:"fixed"}}>
      <div style={{fontSize:"xx-large"}}>
        Shop_Page
      </div>
        <div className='login'>
      <Link to="/login">Login</Link>
        </div>
           <div className='welcome'>
            Welcome Shanu
            </div>
    </div>
    
   
  </>
  )
}




export default Navbar
