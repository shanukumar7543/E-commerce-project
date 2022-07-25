import React from 'react'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Button,Modal,Row,Col } from 'react-bootstrap';

function View_SubCategory() {
  let [data , setData] = useState([])
  const [show, setShow] = useState(false);
  let [catigory_id, setCatigory_id] = useState('');
  let [subcatigory_id, setSubcatigory_id] = useState('');
  let [name, setName] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  async function datafetch(){
    let response = await fetch("http://localhost:4000/productsub/productsub",{
      method: "GET",
    });
    let data =await response.json();
    console.log("hello",data);
    setData(data) 
  }
  useEffect(()=>{
    datafetch();
  }, []);

  function submitData(catigory_id,subcatigory_id,name){
    setCatigory_id(catigory_id);
    setSubcatigory_id(subcatigory_id);
    setName(name);
  }

  function patchData(){
    let data={catigory_id,subcatigory_id,name}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/productsub/productsub/${catigory_id}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }
 
  function deleteData(catigory_id){
    let reqData={
      method:'DELETE'
    }
    fetch(`http://localhost:4000/productsub/productsub/${catigory_id}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
  
  
  return (
    <div>
        <h1>View_SubCategory</h1>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Category_id</th>
          <th>Subcategory_id</th>
          <th>Name</th>
          <th>Update</th>
          <th>Delete</th>
         
          
        </tr>
      </thead>
      <tbody>
        
        {
        data.map((value ,index)=>{
          return(
            <tr key={index }>
               <td> {value.catigory_id}</td>
                <td>{value.subcatigory_id}</td>
                <td>{value.name}</td>
                
                <td><Button variant="primary"  onClick={()=>{ handleShow();submitData(value.catigory_id,value.subcatigory_id,value.name);}}>Update</Button></td>
                <td><Button variant="danger" onClick={()=>{deleteData(value.catigory_id)}}>Delete</Button></td>
                
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
          
               </Modal.Header>
               <Modal.Body>

                <div><h1>Add_Subcategory</h1></div>
      <Row>
          <Col>
              <label>Category_id</label>
              <input className="form-control" placeholder="offer_id" type="text" value={catigory_id} onChange={(e) => setCatigory_id(e.target.value)} />
              <label>Subcategory_id</label>
              <input className="form-control" placeholder="coupon_code" type="text" value={subcatigory_id} onChange={(e) => setSubcatigory_id(e.target.value)} />
              
              <label>Name</label>
              <input className="form-control" placeholder="coupon_code" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              
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

export default View_SubCategory;
