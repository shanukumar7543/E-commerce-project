import React from 'react'
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";

function Add_User() {
    let [user_id, setUser_id] = useState('');         
    let [user_name, setUser_name] = useState('');         
    let [date_of_joining, setDate_of_joining] = useState('');         
    let [password, setPassword] = useState('');         
    let [role, setRole] = useState('');         
    let [contact, setContact] = useState('');         
    
  
 
   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
        user_id : user_id,
        user_name : user_name,
        date_of_joining : date_of_joining,
        password : password,
        role : role,
        contact : contact,
      };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/user/user", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  


return (
  <>
  <Container flud="md"style={{backgroundColor:"white",width:"1000px",color:"black",padding:"15px",margin:"30px"}}>
      <div><h1 style={{fontSize:"25px",color:"black"}}>Add_User</h1></div>
      <Row>
          <Col>
          <label>User_id</label>
              <input className="form-control" placeholder=" " type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
             
              <label>User_name</label>
              <input className="form-control" placeholder=" " type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} />
             
              <label>Date_of_joining</label>
              <input className="form-control" placeholder=" " type="date" value={date_of_joining} onChange={(e) => setDate_of_joining(e.target.value)} />
             
              <label>Password</label>
              <input className="form-control" placeholder=" " type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
             
              <label>Role</label>
              <input className="form-control" placeholder=" " type="text" value={role} onChange={(e) => setRole(e.target.value)} />
             
              <label>Contact</label>
              <input className="form-control" placeholder=" " type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
    
        
          </Col>
         
      </Row><br />
      <Row>
          <Col>
          <button type='submit' style={{padding:'10px',marginRight:'10px',fontSize:"15px"}} onClick={submitData} className="btn btn-primary">Save</button>
            <button style={{padding:'10px',marginRight:'10px',justifyContent:'space-between',fontSize:"15px"}} className="btn btn-danger" >Cancel</button>
          </Col>
      </Row>
  </Container>

</>

  )
}

export default Add_User;