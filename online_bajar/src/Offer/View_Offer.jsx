import React from 'react'
import { useEffect , useState} from 'react';
import { Button,Modal,Row,Col } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';

function View_Offer() {
  let [data, setData] = useState([])
  const [show, setShow] = useState(false);
  let [offer_id, setOffer_id] = useState('');         
  let [coupon_code, setCoupon_code] = useState('');
  let [from_date, setFrom_date] = useState('');
  let [to_date, setTo_date] = useState('');
  let [discount_persentage, setDiscount_persentage] = useState('');
  let [flat_discount, setFlat_discount] = useState('');
  let [valid_in, setValid_in] = useState('');
  let [bank_offer, setBank_offer] = useState('');


  

  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  
  const datafetch = async () => {
    let response = await fetch("http://localhost:4000/offer/offer",{
      method: "GET",
    });
    let data = await response.json();
    console.log("hello",data); 
    setData(data)
  }

  useEffect(() =>{
    datafetch()
  }, []);


  function submitData(offer_id,coupon_code,from_date,to_date,discount_persentage){
    setOffer_id(offer_id);
    setCoupon_code(coupon_code);
   setFrom_date(from_date);
   setTo_date(to_date);
   discount_persentage(discount_persentage);
   flat_discount(flat_discount);
   valid_in(valid_in);
   bank_offer(bank_offer);
  //  setShow(true);
  
  }

  function patchData(){
    let data={offer_id,coupon_code,from_date,to_date,discount_persentage,flat_discount,valid_in,bank_offer}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/offer/offer/${offer_id}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }


  function deleteData(offer_id){
    let reqData={
      method:'DELETE'
    }
    fetch(`http://localhost:4000/offer/offer/${offer_id}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
  // useEffect(() => {
  //   async function dataFetch() {
  //     let response = await fetch('http://localhost:4000/offer/offer')
  //     let Udata = await response.json()
  //     setData(Udata)
  //     console.log('Hi')
  //     console.log(Udata)
  //   }
  //   dataFetch()
  // }, [])
  
  
  return (
    <div>
      <h1>View_Offer</h1>
      <Table  responsive>
      <thead>
        <tr>
          <th>Offer_id</th>
          <th>Coupon_code</th>
          <th>From_date</th>
          <th>To_date</th>
          <th>Discount_persentage</th>
          <th>Flat_discount</th>
          <th>Valid_in</th>
          <th>Bank_offer</th>
          <th>Update</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        
        {
        data.map((value ,index)=>{
          return(
            <tr key={index }>
               <td> {value.offer_id}</td>
                <td>{value.coupon_code}</td>
                <td>{value.from_date}</td>
                <td>{value.to_date}</td>
                <td>{value.discount_persentage}</td>
                <td>{value.flat_discount}</td>
                <td>{value.valid_in}</td>
                <td>{value.bank_offer}</td>
                <td><Button variant="primary"  onClick={()=>{ handleShow();submitData(value.offer_id,value.coupon_code,value.from_date,value.to_date,value.discount_persentage,value.flat_discount,value.valid_in,value.bank_offer);}}>Update</Button></td>
                <td><Button variant="danger" onClick={()=>{deleteData(value.offer_id)}}>Delete</Button></td>
                

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>


        <div><h1>Add_offer</h1></div>
      <Row>
          <Col>
              <label>Offer_id</label>
              <input className="form-control" placeholder="offer_id" type="text" value={offer_id} onChange={(e) => setOffer_id(e.target.value)} />
              <label>Coupon_code</label>
              <input className="form-control" placeholder="coupon_code" type="text" value={coupon_code} onChange={(e) => setCoupon_code(e.target.value)} />
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
      

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={patchData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                </tr>
            
          )
        })
      }
        
        
      </tbody>
    </Table>
      
    </div>
  )
}

export default View_Offer;
