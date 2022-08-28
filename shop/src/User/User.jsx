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
  let [filtereduser_name, setFilterUser_name] = useState([]);

  let [user_id, setUser_id] = useState('');         
  let [user_name, setUser_name] = useState('');         
  let [date_of_joining, setDate_of_joining] = useState('');         
  let [password, setPassword] = useState('');         
  let [role, setRole] = useState('');         
  let [contact, setContact] = useState('');         
  

  

  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  
  async function datafetch(){
    let response = await fetch("http://localhost:4000/user/user",{
      method: "GET",
    });
    let data =await response.json();
    console.log("hello",data); 
    setData(data)
    setFilterUser_name(data)
  }
  useEffect(()=>{
    datafetch();
  }, []);
   
  

  function submitData(user_id,user_name,date_of_joining,password,role,contact){
    setUser_id(user_id);
    setUser_name(user_name);
    setDate_of_joining(date_of_joining);
    setPassword(password);
    setRole(role);
    setContact(contact);



     //  setShow(true);
  // DataTable_step2
  handleShow()
  
  }

  function patchData(){
    let data={user_id,user_name,date_of_joining,password,role,contact,}
    let reqData={
      method:'PATCH',
      headers:{  
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    fetch(`http://localhost:4000/user/user/${user_id}`,reqData)
    .then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })
  }

  // DataTable_step3
  const Columns =[
    {
      name:"User_id",
      selector:row => row.user_id
      
    },
    {
      name:"User_name",
      selector:row => row.user_name
      
    },
    {
      name:"Date_of_joining",
      selector:row => row.date_of_joining
      
    },
    {
      name:"Password",
      selector:row => row.password
      
    },
    {
      name:"Role",
      selector:row => row.role
      
    },
    {
      name:"Contact",
      selector:row => row.contact
      
    },
    {
      name: "Update",
       cell:row => {return(<Button variant="primary"  onClick={()=>{ handleShow();submitData(row.user_id,row.user_name,row.date_of_joining,row.password,row.role,row.contact);}}><EditIcon/></Button>)}
    },
    {
      name: "Delete",
       cell:row => {return (<Button variant="danger" onClick={()=>{deleteData(row.user_id)}}><DeleteIcon/></Button>)}
    }
  ]


  function deleteData(user_id){
    let reqData={
      method:'DELETE'
    }
    fetch(`http://localhost:4000/user/user/${user_id}`,reqData)
    .then((res)=>{
      if(res.status===200){
        console.warn(200);
      }
    })
  }
 

  useEffect(() => {
    let result = data.filter(value => {
      return value.user_name.toLowerCase().match(search.toLowerCase());
      
    })
    setFilterUser_name(result);
  }, [search])
  
  return (
    <>
    <div className='table-container'>
    <Row>
        <Col xs={6}>Add_User</Col>
        <Col style={{paddingLeft:"440px",fontSize:"20px",listStyle:"none"}} xs={6}><Link to="/add_User"><AddCircleIcon/></Link></Col>
     
      </Row>
    <DataTable
      // title="View_offer"
      columns={Columns}
      data= {filtereduser_name}
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
              <label>User_id</label>
              <input className="form-control" placeholder=" " type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
             
              <label>User_name</label>
              <input className="form-control" placeholder=" " type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} />
             
              <label>Date_of_joining</label>
              <input className="form-control" placeholder=" " type="text" value={date_of_joining} onChange={(e) => setDate_of_joining(e.target.value)} />
             
              <label>Password</label>
              <input className="form-control" placeholder=" " type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
             
              <label>Role</label>
              <input className="form-control" placeholder=" " type="text" value={role} onChange={(e) => setRole(e.target.value)} />
             
              <label>Contact</label>
              <input className="form-control" placeholder=" " type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
             
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
