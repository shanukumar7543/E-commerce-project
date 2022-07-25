import React from 'react';
import { useEffect ,useState} from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Button,Row ,Col,Modal} from 'react-bootstrap'



function View_Shop() {
  let [data, setData] = useState([])
  const [show, setShow] =useState(false);
  let [reg_no , setReg_no]=useState('');
  let [shop_id , setShop_id]=useState('');
  let [shop_name , setShop_name]=useState('');
  let [owner , setOwner]=useState('');
  let [address , setAddress]=useState('');
  let [city , setCity]=useState('');
  let [state , setState]=useState('');
  let [contact , setContact]=useState('');
  let [password , setPassword]=useState('');
  let [type , setType]=useState('');
  let [status , setStatus]=useState('');
  let [turnover , setTurnover]=useState('');
  let [gst , setGst]=useState('');
  let [pin , setPin]=useState('');
  let [terms_condition , setTerms_condition]=useState('');
  let [url , setUrl]=useState('');
  let [discripation , setDiscripation]=useState('');
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

        
  async function datafetch(){
  let response = await fetch("http://localhost:4000/shopreg/shopreg",{
    method: "GET",
  });
  let data =await response.json();
  console.log("hello",data);
  setData(data) 
}
useEffect(()=>{
  datafetch();
}, []);

function submitData(reg_no,shop_id,shop_name,owner,address,city,state,contact,password,type,status,turnover,gst,pin,terms_condition,url,discripation){
  setReg_no(reg_no)
  setShop_id(shop_id);
  setShop_name(shop_name);
  setOwner(owner);
  setAddress(address);
  setCity(city);
  setState(state);
  setContact(contact);
  setPassword(password);
  setType(type);
  setStatus(status);
  setTurnover(turnover);
  setGst(gst);
  setPin(pin);
  setTerms_condition(terms_condition);
  setUrl(url);
  setDiscripation(discripation);
//  setShow(true);
  
}

function patchData(){
  let data={reg_no,shop_id,shop_name,owner,address,city,state,contact,password,type,status,turnover,gst,pin,terms_condition,url,discripation}
  let reqData={
    method:'PATCH',
    headers:{  
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  }
  fetch(`http://localhost:4000/shopreg/shopreg/${reg_no}`,reqData)
  .then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
    })
  })
}


function deleteData(reg_no){
  let reqData={
    method:'DELETE'
  }
  fetch(`http://localhost:4000/shopreg/shopreg/${reg_no}`,reqData)
  .then((res)=>{
    if(res.status===200){
      console.warn(200);
    }
  })
}
  
 return (
    <div>
      <h1>View_Shop</h1>
      <Table striped bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th>Reg_no</th>
          <th>Shop_id</th>
          <th>Shop_name</th>
          <th>Owner</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Contact</th>
          <th>Password</th>
          <th>Type</th>
          <th>Status</th>
          <th>Turnover</th>
          <th>Gst</th>
          <th>Pin</th>
          <th>Terms_condition</th>
          <th>Url</th>
          <th>Description</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        
        {
        data.map((value ,index)=>{
          return(
            <tr key={index }>
               <td> {value.reg_no}</td>
                <td>{value.shop_id}</td>
                <td>{value.shop_name}</td>
                <td>{value.owner}</td>
                <td>{value.address}</td>
                <td>{value.city}</td>
                <td>{value.state}</td>
                <td>{value.contact}</td>
                <td>{value.password}</td>
                <td>{value.type}</td>
                <td>{value.status}</td>
                <td>{value.turnover}</td>
                <td>{value.gst}</td>
                <td>{value.pin}</td>
                <td>{value.terms_condition}</td>
                <td>{value.url}</td>
                <td>{value.discripation}</td>
                
                <td><Button variant="primary"  onClick={()=>{ handleShow();submitData(value.reg_no,value.shop_id,value.shop_name,value.owner,value.address,value.city,value.state,value.contact,value.password,value.type,value.status,value.turnover,value.gst,value.pin,value.terms_condition,value.url,value.discripation);}}>Update</Button></td>
                <td><Button variant="danger" onClick={()=>{deleteData(value.reg_no)}}>Delete</Button></td>
                

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>


        <div><h1>View Shop</h1></div>
      <Row>
          <Col>
              <label>Reg_no</label>
              <input className="form-control" placeholder="type_here" type="text" value={reg_no} onChange={(e) => setReg_no(e.target.value)} />
              
              <label>Shop_id</label>
              <input className="form-control" placeholder="type_here" type="text" value={shop_id} onChange={(e) => setShop_id(e.target.value)} />
              
              <label>Shop_name</label>
              <input className="form-control" placeholder="type_here" type="text" value={shop_name} onChange={(e) => setShop_name(e.target.value)} />
              
              <label>Owner</label>
              <input className="form-control" placeholder="type_here" type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
              
              <label>Address</label>
              <input className="form-control" placeholder="type_here" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              
              <label>City</label>
              <input className="form-control" placeholder="type_here" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              
              <label>State</label>
              <input className="form-control" placeholder="type_here" type="text" value={state} onChange={(e) => setState(e.target.value)} />
              
              <label>Contact</label>
              <input className="form-control" placeholder="type_here" type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
              
              <label>Password</label>
              <input className="form-control" placeholder="type_here" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
              
              <label>Type</label>
              <input className="form-control" placeholder="type_here" type="text" value={type} onChange={(e) => setType(e.target.value)} />
              
              <label>Status</label>
              <input className="form-control" placeholder="type_here" type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
              
              <label>Turnover</label>
              <input className="form-control" placeholder="type_here" type="text" value={turnover} onChange={(e) => setTurnover(e.target.value)} />
              
              <label>Gst</label>
              <input className="form-control" placeholder="type_here" type="text" value={gst} onChange={(e) => setGst(e.target.value)} />
              
              <label>Pin</label>
              <input className="form-control" placeholder="type_here" type="text" value={pin} onChange={(e) => setPin(e.target.value)} />
              
              <label>Terms_condition</label>
              <input className="form-control" placeholder="type_here" type="text" value={terms_condition} onChange={(e) => setTerms_condition(e.target.value)} />
              
              <label>Url</label>
              <input className="form-control" placeholder="type_here" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
              
              <label>Discripation</label>
              <input className="form-control" placeholder="type_here" type="text" value={discripation} onChange={(e) => setDiscripation(e.target.value)} />
              
              
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

export default View_Shop;
