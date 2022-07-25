import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";

function Add_SubCategory() {
  let [catigory_id, setCatigory_id] = useState('');         
    let [subcatigory_id, setSubcatigory_id] = useState('');
    let [name, setName] = useState('');
    
   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
      catigory_id : catigory_id,
      subcatigory_id : subcatigory_id,
      name : name,
      
    };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/productsub/productsub", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  
    
  
  return (
    <>
      
      
      <Container flud="md"style={{backgroundColor:"black",width:"800px",color:"white",padding:"25px",margin:"30px"}}>
      <h1>Add_SubCategory</h1>
      <Row>
          <Col>
              <label>Category_id</label>
              <input className="form-control" placeholder="Type_here" type="text" value={catigory_id} onChange={(e) => setCatigory_id(e.target.value)} />
             
              <label>Cubcategory_id</label>
              <input className="form-control" placeholder="Type_here" type="text" value={subcatigory_id} onChange={(e) => setSubcatigory_id(e.target.value)} />
              
              <label>Name</label>
              <input className="form-control" placeholder="Type_here" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              
              
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

export default Add_SubCategory;

