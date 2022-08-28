import React from 'react'
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";

function Add_productenv() {
    let [product_id, setProduct_id] = useState('');         
  let [catigory_id, setCatigory_id] = useState('');         
  let [subcatigory_id, setSubcatigory_id] = useState('');         
  let [product_name, setProduct_name] = useState('');                 
  let [price, setPrice] = useState('');                 
  let [mfd, setMfd] = useState('');                 
  let [exp, setExp] = useState('');                 
  let [shop_id, setShop_id] = useState('');                 
  let [qty, setQty] = useState('');                 
  let [descripation, setDescripation] = useState('');                 
  

   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
        product_id : product_id,
        catigory_id : catigory_id,
        subcatigory_id : subcatigory_id,
        product_name : product_name,
        price : price,
        mfd : mfd,
        exp : exp,
        shop_id : shop_id,
        qty : qty,
        descripation : descripation,
      };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/productenv/productenv", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  

return (
  <>
  <Container flud="md"style={{backgroundColor:"white",width:"1000px",color:"black",padding:"15px",margin:"30px"}}>
      <div><h1 style={{fontSize:"25px",color:"black"}}>Add_productenv</h1></div>
      <Row>
          <Col>
          <label>Product_id</label>
              <input className="form-control" placeholder=" " type="text" value={product_id} onChange={(e) => setProduct_id(e.target.value)} required/>
             
              <label>Catigory_id</label>
              <input className="form-control" placeholder=" " type="text" value={catigory_id} onChange={(e) => setCatigory_id(e.target.value)} required/>
             
              <label>Subcatigory_id</label>
              <input className="form-control" placeholder=" " type="text" value={subcatigory_id} onChange={(e) => setSubcatigory_id(e.target.value)} required/>
             
              <label>Product_name</label>
              <input className="form-control" placeholder=" " type="text" value={product_name} onChange={(e) => setProduct_name(e.target.value)} required/>
             
              <label>Price</label>
              <input className="form-control" placeholder=" " type="text" value={price} onChange={(e) => setPrice(e.target.value)} required/>
             
              <label>Mfd</label>
              <input className="form-control" placeholder=" " type="date" value={mfd} onChange={(e) => setMfd(e.target.value)} required/>
             
              <label>Exp</label>
              <input className="form-control" placeholder=" " type="date" value={exp} onChange={(e) => setExp(e.target.value)} required/>
             
              <label>Shop_id</label>
              <input className="form-control" placeholder=" " type="text" value={shop_id} onChange={(e) => setShop_id(e.target.value)} required/>
             
              <label>Qty</label>
              <input className="form-control" placeholder=" " type="text" value={qty} onChange={(e) => setQty(e.target.value)} required/>
             
              <label>Descripation</label>
              <input className="form-control" placeholder=" " type="text" value={descripation} onChange={(e) => setDescripation(e.target.value)} required/>
             
        
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

export default Add_productenv;