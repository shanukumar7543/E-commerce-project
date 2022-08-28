import React from 'react'
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";

function Add() {
    let [bank_name, setBank_name] = useState('');         
    let [details, setDetails] = useState('');         
    let [account_no, setAccount_no] = useState('');         
    let [ifsc_code, setIfsc_code] = useState('');         
    let [address, setAddress] = useState('');                 
    
  
 
   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
        bank_name : bank_name,
        details : details,
        account_no : account_no,
        ifsc_code : ifsc_code,
        address : address,
      };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/bank/bank", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  

return (
  <>
  <Container flud="md"style={{backgroundColor:"white",width:"1000px",color:"black",padding:"15px",margin:"30px"}}>
      <div><h1 style={{fontSize:"25px",color:"black"}}>Add_Bank</h1></div>
      <Row>
          <Col>
          <label>Bank_name</label>
              <input className="form-control" placeholder=" " type="text" value={bank_name} onChange={(e) => setBank_name(e.target.value)} />
             
              <label>Details</label>
              <input className="form-control" placeholder=" " type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
             
              <label>Account_no</label>
              <input className="form-control" placeholder=" " type="text" value={account_no} onChange={(e) => setAccount_no(e.target.value)} />
             
              <label>Ifsc_code</label>
              <input className="form-control" placeholder=" " type="text" value={ifsc_code} onChange={(e) => setIfsc_code(e.target.value)} />
             
              <label>Address</label>
              <input className="form-control" placeholder=" " type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
             
        
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

export default Add;