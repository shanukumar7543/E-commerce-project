import React from 'react';
import './sidebar.css'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Add_Shop from '../shops/Add_Shop'
import View_Shop from '../shops/View_Shop';
import Add_Category from '../Product/Category/Add_Category'
import View_category from '../Product/Category/View_Category'
import Add_SubCategory  from '../Product/Sub_category/Add_SubCategory.jsx'
import View_SubCategory from '../Product/Sub_category/View_SubCategory'
import Add_offer from '../Offer/Add_Offer'
import View_offer from '../Offer/View_Offer'
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Home from '../Home/Home';
import About from '../About/About';
import Logout from '../LogOut/Logout';
function Sidebar() {
  return (
    <>
    <Navbar/>
      <div className='side'>
    {/* <Router> */}
      <div className='sidebar'>
        <li>Shop</li>
        <ul>
          <li><Link to="/Add_shop">Add_shop</Link></li>
          <li><Link to="/View_shop">View_shop</Link></li>
        </ul>
        <li>Product</li>
        <ul>
          <li>Category</li>
          <ul>
            <li><Link to="/add_product">Add_Category</Link></li>
            <li><Link to="/View_Product">View_Category</Link></li>
          </ul>
          <li>Sub_Category</li>
          <ul>
            <li><Link to="/add_productcategory">Add_SubCategory</Link></li>
            <li><Link to="/view_productcategory">View_SubCategory</Link></li>
          </ul>
        </ul>
        <li>Offer</li>
        <ul>
        <li><Link to="/add_offer">Add_offer</Link></li>
        <li><Link to="/view_offer">View_offer</Link></li>
        </ul>
        <li>User_management</li>
        <ul>
        <li><Link to="/User_management">User_management</Link></li>
        </ul>

      </div>
      
      <div className='route'>
        <Routes>
          <Route path="/Add_shop" element={<Add_Shop/>} />
          <Route path="/View_shop" element={<View_Shop/>} />
          <Route path="/add_product" element={<Add_Category />} />
          <Route path="/View_Product" element={<View_category />} />
          <Route path="/add_productcategory" element={<Add_SubCategory />} />
          <Route path="/view_productcategory" element={<View_SubCategory />} />
          <Route path="/add_offer" element={<Add_offer />} />
          <Route path="/view_offer" element={<View_offer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes> 
      </div>
      
      {/* </Router> */}
      </div>
      </>
      
      
    


  )
}


export default Sidebar;
