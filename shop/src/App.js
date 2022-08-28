import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
// import Login from './Login/Login';
import { Routes,Route } from 'react-router-dom';
// import Shop from './Shop/Shop';
// import { FaBootstrap } from 'react-icons/fa';

// import User from './User/User';
// import Bank from './Bank/Bank';
// import Request from './Request/Request';
// import Productspecif from './Product_specif/Productspecif';
// import Productinventory from './Product_invent/Productinventory';
// import Add from './Bank/Add_bank';
// import Add_User from './User/Add_user';
// import Add_productenv from './Product_invent/Add_productinv';
// import Add_productspeci from './Product_specif/Add_product_speci';

function App() {
  return (
    <>
    <Navbar/>
     <Sidebar/>
<div style={{marginLeft:"220px",}}>
    <Routes>
    {/* <Route path="/login" element={<Login />} /> */}
    {/* <Route path="/shop" element={<Shop />} /> */}
    {/* <Route path="/user" element={<User />} /> */}
    {/* <Route path="/bank" element={<Bank />} /> */}
    {/* <Route path="/request" element={<Request />} /> */}
    {/* <Route path="/productspecif" element={<Productspecif />} /> */}
    {/* <Route path="/Productinventory" element={<Productinventory />} /> */}
    {/* <Route path="/add" element={<Add />} /> */}
    {/* <Route path="/add_User" element={<Add_User />} /> */}
    {/* <Route path="/add_productenv" element={<Add_productenv />} /> */}
    {/* <Route path="/add_productspeci" element={<Add_productspeci />} /> */}
    </Routes>

    </div>
     </>

  );
}

export default App;
