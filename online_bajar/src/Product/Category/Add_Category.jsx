import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";


function Add_Category() {
  let [catigory_id, setCatigory_id] = useState('');         
    let [catigory_name, setCatigory_name] = useState('');
    
   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
      catigory_id : catigory_id,
      catigory_name : catigory_name,
      
    };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/product/product", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  
  
  return (
      <>
      <Container flud="md"style={{backgroundColor:"black",width:"800px",color:"white",padding:"25px",margin:"30px"}}>
      <h1>Add_Category</h1>
      <Row>
          <Col>
              <label>Category_id</label>
              <input className="form-control" placeholder="Type_here" type="text" value={catigory_id} onChange={(e) => setCatigory_id(e.target.value)} />
              <label>Category_name</label>
              <input className="form-control" placeholder="Type_here" type="text" value={catigory_name} onChange={(e) => setCatigory_name(e.target.value)} />
              
              
          </Col>
      </Row><br />
      <Row>
          <Col>
              <button onClick={submitData} className="btn btn-primary">Save</button>
              <button className="btn btn-danger">Cancel</button>
          </Col>
      </Row>
  </Container>
  
  </>
    
    
  )
}

export default Add_Category;
