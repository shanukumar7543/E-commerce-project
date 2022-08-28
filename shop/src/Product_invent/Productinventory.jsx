import React from 'react'
import { useEffect , useState} from 'react';
import { Button,Modal,Row,Col } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// DataTable_step1

function Productinventory() {
  let [data, setData] = useState([])
  const [show, setShow] = useState(false);
  let [search, setSearch] = useState('');
  let [filtereproduct_name, setFilterProduct_name] = useState([]);

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
  

  

  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  
  async function datafetch(){
    let response = await fetch("http://localhost:4000/productenv/productenv",{
      method: "GET",
    });
    let data =await response.json();
    console.log("hello",data); 
    setData(data)
    setFilterProduct_name(data)
  }
  useEffect(()=>{
    datafetch();
  }, []);


  function submitData(product_id,catigory_id,subcatigory_id,product_name,price,mfd,exp,shop_id,qty,descripation){
    setProduct_id(product_id);
    setCatigory_id(catigory_id);
    setSubcatigory_id(subcatigory_id);
    setProduct_name(product_name);
    setPrice(price);
    setMfd(mfd);
    setExp(exp);
    setShop_id(shop_id);
    setQty(qty);
    setDescripation(descripation);
     //  setShow(true);
  // DataTable_step2
  handleShow()
  
  }

  function patchData(){
    let data={product_id,catigory_id,subcatigory_id,product_name,price,mfd,exp,shop_id,qty,descripation}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/productenv/productenv/${product_id}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }

  // DataTable_step3
  const Columns =[
   
    {
      name:"Product_id",
      selector:row => row.product_id
      
    },
    {
      name:"Catigory_id",
      selector:row => row.catigory_id
      
    },
    {
      name:"Subcatigory_id",
      selector:row => row.subcatigory_id
      
    },
    {
      name:"Product_name",
      selector:row => row.product_name
      
    },
    {
      name:"Price",
      selector:row => row.price
      
    },
    {
      name:"Mfd",
      selector:row => row.mfd
      
    },
    {
      name:"Exp",
      selector:row => row.exp
      
    },
    {
      name:"Shop_id",
      selector:row => row.shop_id
      
    },
    {
      name:"Qty",
      selector:row => row.qty
      
    },
    {
      name:"Descripation",
      selector:row => row.descripation
      
    },
    
    {
      name: "Update",
       cell:row => {return(<Button variant="primary"  onClick={()=>{ handleShow();submitData(row.product_id,row.catigory_id,row.subcatigory_id,row.product_name,row.price,row.mfd,row.exp,row.shop_id,row.qty,row.descripation);}}><EditIcon/></Button>)}
    },
    {
      name: "Delete",
       cell:row => {return (<Button variant="danger" onClick={()=>{deleteData(row.productsfecific_id)}}><DeleteIcon/></Button>)}
    }
  ]


  function deleteData(product_id){
    let reqData={
      method:'DELETE'
    }
    fetch(`http://localhost:4000/productenv/productenv/${product_id}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
 

  useEffect(() => {
    let result = data.filter(value => {
      return value.product_name.toLowerCase().match(search.toLowerCase());
    })
    setFilterProduct_name(result);
  }, [search])
  
  return (
    <>
    <div className='table-container'>
    <Row>
        <Col xs={6}>Product_invent</Col>
        <Col style={{paddingLeft:"440px",fontSize:"20px",listStyle:"none"}} xs={6}><Link to="/add_productenv"><AddCircleIcon/></Link></Col>
     
      </Row>
    <DataTable
      // title="View_offer"
      columns={Columns}
      data= {filtereproduct_name}
      pagination
      highlightOnHover
      fixedHeader
      subHeader
      subHeaderComponent={
        <input type="search" 
        placeholder='search here'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      }
      />
    </div>
      
                

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>


        {/* <div><h1>Add_offer</h1></div> */}
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

      </>
               
  )
}

export default Productinventory;
