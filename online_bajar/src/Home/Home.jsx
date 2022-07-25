import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../Login/Login'
function Home() {
  return (
    <div>
      <h1>This is my home page</h1>
      <Login/>
    </div>
    
  )
}


<li><Link to="/homepage">HOME</Link></li>
export default Home;
