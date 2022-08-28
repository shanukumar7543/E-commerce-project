import React from 'react'
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";

function Add_productspeci() {
    let [productsfecific_id, setProductsfecific_id] = useState('');         
    let [product_id, setProduct_id] = useState('');         
    let [dimension, setDimension] = useState('');         
    let [size, setSize] = useState('');         
    let [color, setColor] = useState('');                 
    let [price, setPrice] = useState('');                 
    let [mfd, setMfd] = useState('');                 
    let [exp_date, setExp_date] = useState('');                 
    let [height, setHeight] = useState('');                 
    let [photo, setPhoto] = useState('');                 
    
  
    

   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
        productsfecific_id:productsfecific_id,
        product_id : product_id,
        dimension : dimension,
        size : size,
        color : color,
        price : price,
        mfd : mfd,
        exp_date : exp_date,
        height : height,
        photo : photo,
      };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/productspeci/productspeci", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  

return (
  <>
  <Container flud="md"style={{backgroundColor:"white",width:"1000px",color:"black",padding:"15px",margin:"30px"}}>
      <div><h1 style={{fontSize:"25px",color:"black"}}>Add_productspeci</h1></div>
      <Row>
          <Col>
          <label>Product_sfecific_id</label>
              <input className="form-control" placeholder=" " type="text" value={productsfecific_id} onChange={(e) => setProductsfecific_id(e.target.value)} required/>
             
              <label>Product_id</label>
              <input className="form-control" placeholder=" " type="text" value={product_id} onChange={(e) => setProduct_id(e.target.value)} required/>
             
              <label>Dimension</label>
              <input className="form-control" placeholder=" " type="text" value={dimension} onChange={(e) => setDimension(e.target.value)} required/>
             
              <label>Size</label>
              <input className="form-control" placeholder=" " type="text" value={size} onChange={(e) => setSize(e.target.value)} required/>
             
              <label>Color</label>
              <input className="form-control" placeholder=" " type="text" value={color} onChange={(e) => setColor(e.target.value)} required/>
             
              <label>Price</label>
              <input className="form-control" placeholder=" " type="text" value={price} onChange={(e) => setPrice(e.target.value)} required/>
             
              <label>Mfd</label>
              <input className="form-control" placeholder=" " type="date" value={mfd} onChange={(e) => setMfd(e.target.value)} required/>
             
              <label>Exp_date</label>
              <input className="form-control" placeholder=" " type="date" value={exp_date} onChange={(e) => setExp_date(e.target.value)} required/>
             
              <label>Height</label>
              <input className="form-control" placeholder=" " type="text" value={height} onChange={(e) => setHeight(e.target.value)} required/>
             
              <label>Photo</label>
              <input className="form-control" placeholder=" " type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} required/>
             
            
        
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

export default Add_productspeci;