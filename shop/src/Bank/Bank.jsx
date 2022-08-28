import React from 'react'
import { useEffect , useState} from 'react';
import { Button,Modal,Row,Col } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// DataTable_step1

function User() {
  let [data, setData] = useState([])
  const [show, setShow] = useState(false);
  let [search, setSearch] = useState('');
  let [filteredbank_name, setFilterBank_name] = useState([]);

  let [bank_name, setBank_name] = useState('');         
  let [details, setDetails] = useState('');         
  let [account_no, setAccount_no] = useState('');         
  let [ifsc_code, setIfsc_code] = useState('');         
  let [address, setAddress] = useState('');                 
  

  

  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  
  async function datafetch(){
    let response = await fetch("http://localhost:4000/bank/bank",{
      method: "GET",
    });
    let data =await response.json();
    console.log("hello",data); 
    setData(data)
    setFilterBank_name(data)
  }
  useEffect(()=>{
    datafetch();
  }, []);


  function submitData(bank_name,details,account_no,ifsc_code,address){
    setBank_name(bank_name);
    setDetails(details);
    setAccount_no(account_no);
    setIfsc_code(ifsc_code);
    setAddress(address);
     //  setShow(true);
  // DataTable_step2
  handleShow()
  
  }

  function patchData(){
    let data={bank_name,details,account_no,ifsc_code,address}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/bank/bank/${account_no}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }

  // DataTable_step3
  const Columns =[
    {
      name:"Bank_name",
      selector:row => row.bank_name
      
    },
    {
      name:"Details",
      selector:row => row.details
      
    },
    {
      name:"Account_no",
      selector:row => row.account_no
      
    },
    {
      name:"Ifsc_code",
      selector:row => row.ifsc_code
      
    },
    {
      name:"Address",
      selector:row => row.address
      
    },
    
    {
      name: "Update",
       cell:row => {return(<Button variant="primary"  onClick={()=>{ handleShow();submitData(row.bank_name,row.details,row.account_no,row.ifsc_code,row.address);}}><EditIcon/></Button>)}
    },
    {
      name: "Delete",
       cell:row => {return (<Button variant="danger" onClick={()=>{deleteData(row.account_no)}}><DeleteIcon/></Button>)}
    }
  ]


  function deleteData(account_no){
    let reqData={
      method:'DELETE'
    }
    fetch(`http://localhost:4000/bank/bank/${account_no}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
 

  useEffect(() => {
    let result = data.filter(value => {
      return value.bank_name.toLowerCase().match(search.toLowerCase());
    })
    setFilterBank_name(result);
  }, [search])
  
  return (
    <>
    <div className='table-container'>
    <Row>
        <Col xs={6}>Add_Bank</Col>
        <Col style={{paddingLeft:"440px",fontSize:"20px",listStyle:"none"}} xs={6}><Link to="/add"><AddCircleIcon/></Link></Col>
     
      </Row>
    <DataTable
      // title="View_offer"
      columns={Columns}
      data= {filteredbank_name}
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
              <label>Bank_name</label>
              <input className="form-control" placeholder=" " type="text" value={bank_name} onChange={(e) => setBank_name(e.target.value)} />
             
              <label>Details</label>
              <input className="form-control" placeholder=" " type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
             
              <label>Account_no</label>
              <input className="form-control" placeholder=" " type="text" value={account_no} onChange={(e) => setAccount_no(e.target.value)} />
             
              <label>Ifsc_code</label>
              <input className="form-control" placeholder=" " type="text" value={ifsc_code} onChange={(e) => setIfsc_code(e.target.value)} />
             
              <label>Address</label>
              <input className="form-control" placeholder=" " type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
             
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

export default User;
