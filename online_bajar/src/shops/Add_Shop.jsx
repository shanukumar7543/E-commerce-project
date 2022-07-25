import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { useEffect, useState } from "react";
import { Row, Col, Container, } from "react-bootstrap";

const Add_Shop = () => {
  let [reg_no, setReg_no] = useState('');
  let [shop_id, setShop_id] = useState('');
  let [shop_name, setShop_name] = useState('');
  let [owner, setOwner] = useState('');
  let [address, setAddress] = useState('');
  let [city, setCity] = useState('');
  let [state, setState] = useState('');
  let [contact, setContact] = useState('');
  let [password, setPassword] = useState('');
  let [type, setType] = useState('');
  let [status, setStatus] = useState('');
  let [turnover, setTurnover] = useState('');
  let [gst, setGst] = useState('');
  let [pin, setPin] = useState('');
  let [terms_condition, setTerms_condition] = useState('');
  let [url, setUrl] = useState('');
  let [discripation, setDiscripation] = useState('');


  function submitData() {
    // alert("you are clicked")
    let userdata = {
      reg_no: reg_no,
      shop_id: shop_id,
      shop_name: shop_name,
      owner: owner,
      address: address,
      city: city,
      state: state,
      contact: contact,
      password: password,
      type: type,
      status: status,
      turnover: turnover,
      gst: gst,
      pin: pin,
      terms_condition: terms_condition,
      url: url,
      discripation: discripation,


    };
    let reqData = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata)
    }
    fetch("http://localhost:4000/shopreg/shopreg", reqData)
      .then(response => console.log(`Data Submitted ${response.status}`))
  }
  return (
    <div>

      <Container flud="md" style={{backgroundColor:"black",width:"800px",color:"white",padding:"15px",margin:"30px"}}>
        <h1 style={{fronSize:"90px",color:"white"}}>Add_shop</h1>
        {/* <div><h1>Add_offer</h1></div> */}
        <Row>
          <Col>
            <div style={{display:"flex" ,color:"white",width:"900px",height:"400px",textAlign:"center",paddingLeft:"55px",paddingBottom:"33px"}} >
              <div style={{margin:"64px",}}>
                <label>Reg_no</label>
                <input className="form-control" placeholder="Type_here" type="text" value={reg_no} onChange={(e) => setReg_no(e.target.value)} />

                <label>Shop_id</label>
                <input className="form-control" placeholder="Type_here" type="text" value={shop_id} onChange={(e) => setShop_id(e.target.value)} />

                <label>Shop_name</label>
                <input className="form-control" placeholder="Type_here" type="text" value={shop_name} onChange={(e) => setShop_name(e.target.value)} />

                <label>Owner</label>
                <input className="form-control" placeholder="Type_here" type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />

                <label>Address</label>
                <input className="form-control" placeholder="Type_here" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              
                <label>City</label>
                <input className="form-control" placeholder="Type_here" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
              <div style={{marginTop:"60px"}}>
                <label>State</label>
                <input className="form-control" placeholder="Type_here" type="text" value={state} onChange={(e) => setState(e.target.value)} />

                <label>Contact</label>
                <input className="form-control" placeholder="Type_here" type="text" value={contact} onChange={(e) => setContact(e.target.value)} />

                <label>Password</label>
                <input className="form-control" placeholder="Type_here" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              
                <label>Type</label>
                <input className="form-control" placeholder="Type_here" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                
                <label>Status</label>
                <input className="form-control" placeholder="Type_here" type="text" value={status} onChange={(e) => setStatus(e.target.value)} />

                <label>Turnover</label>
                <input className="form-control" placeholder="text" type="text" value={turnover} onChange={(e) => setTurnover(e.target.value)} />
              </div>
              <div style={{marginTop:"60px" ,margin:"65px"}}>
                <label>Gst</label>
                <input className="form-control" placeholder="Type_here" type="text" value={gst} onChange={(e) => setGst(e.target.value)} />

                <label>Pin</label>
                <input className="form-control" placeholder="Type_here" type="text" value={pin} onChange={(e) => setPin(e.target.value)} />

                <label>Terms_condition</label>
                <input className="form-control" placeholder="text" type="text" value={terms_condition} onChange={(e) => setTerms_condition(e.target.value)} />

                <label>Url</label>
                <input className="form-control" placeholder="Type_here" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

                <label>Discripation</label>
                <input className="form-control" placeholder="Type_here" type="text" value={discripation} onChange={(e) => setDiscripation(e.target.value)} />

              </div>
            </div>
          </Col>
        </Row><br />
        <Row>
          <Col className='button'>
            <button onClick={submitData} className="btn btn-primary">Save</button>
            <button className="btn btn-danger">Cancel</button>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Add_Shop;
