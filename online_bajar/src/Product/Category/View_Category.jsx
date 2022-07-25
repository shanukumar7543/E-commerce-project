import React from 'react'
import { useEffect,useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Button,Modal,Row,Col } from 'react-bootstrap';



function View_Category() {
  let [data,setData]= useState([])
  const [show, setShow] = useState(false);
  let [catigory_id, setCatigory_id] = useState('');
  let [catigory_name, setCatigory_name] = useState('');
  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function datafetch(){
    let response = await fetch("http://localhost:4000/product/product",{
      method: "GET",
    });
    let data =await response.json();
    console.log("hello",data); 
    setData(data)
  }
  useEffect(()=>{
    datafetch();
  }, []);
  

  function submitData(catigory_id,catigory_name){
    setCatigory_id(catigory_id);
    setCatigory_name(catigory_name);
  }

  function patchData(){
    let data={catigory_id,catigory_name}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/product/product/${catigory_id}`,reqData)
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
    fetch(`http://localhost:4000/product/product/${catigory_id}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
  

  return (
    <div>
      <h1>View_Category</h1>
      <Table striped bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th>Category_id</th>
          <th>Category_name</th>
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
                <td>{value.catigory_name}</td>

                <td><Button variant="primary"  onClick={()=>{ handleShow();submitData(value.catigory_id,value.catigory_name);}}>Update</Button></td>
                <td><Button variant="danger" onClick={()=>{deleteData(value.catigory_id)}}>Delete</Button></td>
                
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
          
               </Modal.Header>
               <Modal.Body>

                <div><h1>Add_Category</h1></div>
      <Row>
          <Col>
              <label>Catigory_id</label>
              <input className="form-control" placeholder="offer_id" type="text" value={catigory_id} onChange={(e) => setCatigory_id(e.target.value)} />
              <label>Catigory_name</label>
              <input className="form-control" placeholder="coupon_code" type="text" value={catigory_name} onChange={(e) => setCatigory_name(e.target.value)} />
              
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

export default View_Category;
