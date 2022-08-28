import React from 'react'
import { useEffect , useState} from 'react';
import { Button,Modal,Row,Col } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// DataTable_step1

function Productspecif() {
  let [data, setData] = useState([])
  const [show, setShow] = useState(false);
  let [search, setSearch] = useState('');
  let [filtereproduct_id, setFilterProduct_id] = useState([]);

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
  

  

  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  
  async function datafetch(){
    let response = await fetch("http://localhost:4000/productspeci/productspeci",{
      method: "GET",
    });
    let data =await response.json();
    console.log("hello",data); 
    setData(data)
    setFilterProduct_id(data)
  }
  useEffect(()=>{
    datafetch();
  }, []);


  function submitData(productsfecific_id,product_id,dimension,size,color,price,mfd,exp_date,height,photo){
    setProductsfecific_id(productsfecific_id);
    setProduct_id(product_id);
    setDimension(dimension);
    setSize(size);
    setColor(color);
    setPrice(price);
    setMfd(mfd);
    setExp_date(exp_date);
    setHeight(height);
    setPhoto(photo);
     //  setShow(true);
  // DataTable_step2
  handleShow()
  
  }

  function patchData(){
    let data={productsfecific_id,product_id,dimension,size,color,price,mfd,exp_date,height,photo}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/productspeci/productspeci/${productsfecific_id}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }

  // DataTable_step3
  const Columns =[
    {
      name:"Productsfecific_id",
      selector:row => row.productsfecific_id
      
    },
    {
      name:"Product_id",
      selector:row => row.product_id
      
    },
    {
      name:"Dimension",
      selector:row => row.dimension
      
    },
    {
      name:"Size",
      selector:row => row.size
      
    },
    {
      name:"Color",
      selector:row => row.color
      
    },
    {
      name:"Price",
      selector:row => row.price
      
    },
    {
      name:"Color",
      selector:row => row.color
      
    },
    {
      name:"Mfd",
      selector:row => row.mfd
      
    },
    {
      name:"Exp_date",
      selector:row => row.exp_date
      
    },
    {
      name:"Height",
      selector:row => row.height
      
    },
    {
      name:"Photo",
      selector:row => row.photo
      
    },
    
    {
      name: "Update",
       cell:row => {return(<Button variant="primary"  onClick={()=>{ handleShow();submitData(row.productsfecific_id,row.product_id,row.dimension,row.size,row.color,row.price,row.mfd,row.exp_date,row.height,row.photo);}}><EditIcon/></Button>)}
    },
    {
      name: "Delete",
       cell:row => {return (<Button variant="danger" onClick={()=>{deleteData(row.productsfecific_id)}}><DeleteIcon/></Button>)}
    }
  ]


  function deleteData(user_id){
    let reqData={
      method:'DELETE'
    }
    fetch(`http://localhost:4000/productspeci/productspeci/${productsfecific_id}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
 

  useEffect(() => {
    let result = data.filter(value => {
      return value.product_id.toLowerCase().match(search.toLowerCase());
    })
    setFilterProduct_id(result);
  }, [search])
  
  return (
    <>
    <div className='table-container'>
    <Row>
        <Col xs={6}>Product_specification</Col>
        <Col style={{paddingLeft:"440px",fontSize:"20px",listStyle:"none"}} xs={6}><Link to="/add_productspeci"><AddCircleIcon/></Link></Col>
     
      </Row>
    <DataTable
      // title="View_offer"
      columns={Columns}
      data= {filtereproduct_id}
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

export default Productspecif;
