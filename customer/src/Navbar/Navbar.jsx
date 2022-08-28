import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      
        <div className="container-fluid py-2">
          <div className="row">
            <div className="col-2">
             <h3>Ecomm</h3> 
            </div>
            <div className="col-5">
              <div style={{display: "flex"}}>
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="col-1" >
            <a href="url" style={{color:"white"}}>My Account</a>  
              
            </div>
            <div className="col-2">
            <a href="url" style={{color:"white"}}>Become a Seller</a>

            </div>
            <div className="col-1">
            <a href="url" style={{color:"white"}}> More</a>
  
            </div>
            <div className="col-1">
            <a href="url" style={{color:"white"}}>Cart</a>
   
            </div>
          </div>
        </div>
      
    </>
  )
}
export default Navbar;
