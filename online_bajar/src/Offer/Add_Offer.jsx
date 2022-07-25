import React from 'react'
import { useState } from 'react';
import { Row, Col, Container,} from "react-bootstrap";

function Add() {
    let [offer_id, setOffer_id] = useState('');         
    let [coupon_code, setCoupon_code] = useState('');
    let [from_date, setFrom_date] = useState('');
    let [to_date, setTo_date] = useState('');
    let [discount_persentage, setDiscount_persentage] = useState('');
    let [flat_discount, setFlat_discount] = useState('');
    let [valid_in, setValid_in] = useState('');
    let [bank_offer, setBank_offer] = useState('');
    
 
   
  function submitData() {
    // alert("you are clicked")
    let userdata = {
      offer_id : offer_id,
      coupon_code : coupon_code,
      from_date : from_date,
      to_date : to_date,
      discount_persentage : discount_persentage,
      flat_discount : flat_discount,
      valid_in : valid_in,
      bank_offer : bank_offer,
    };
    let reqData = {
        method : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/offer/offer", reqData)
        .then(response => console.log(`Data Submitted ${response.status}`))
}
  

return (
  <>
  <Container flud="md"style={{backgroundColor:"black",width:"800px",color:"white",padding:"25px",margin:"30px"}}>
      <div><h1>Add_offer</h1></div>
      <Row>
          <Col>
              <label>Offer_id</label>
              <input className="form-control" placeholder="Type_here" type="text" value={offer_id} onChange={(e) => setOffer_id(e.target.value)} />
              <label>Coupon_code</label>
              <input className="form-control" placeholder="Type_here" type="text" value={coupon_code} onChange={(e) => setCoupon_code(e.target.value)} />
              <label>From_date</label>
              <input className="form-control" placeholder="text" type="date" value={from_date} onChange={(e) => setFrom_date(e.target.value)} />
              <label>To_date</label>
              <input className="form-control" placeholder="text" type="date" value={to_date} onChange={(e) => setTo_date(e.target.value)} />
              <label>Discount_persentage</label>
              <input className="form-control" placeholder="text" type="text" value={discount_persentage} onChange={(e) => setDiscount_persentage(e.target.value)} />
              
              <label>Flat_discount</label>
              <input className="form-control" placeholder="text" type="text" value={flat_discount} onChange={(e) => setFlat_discount(e.target.value)} />
              
              <label>Valid_in</label>
              <input className="form-control" placeholder="text" type="date" value={valid_in} onChange={(e) => setValid_in(e.target.value)} />
              
              <label>Bank_offer</label>
              <input className="form-control" placeholder="text" type="text" value={bank_offer} onChange={(e) => setBank_offer(e.target.value)} />
              
              
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

export default Add;
