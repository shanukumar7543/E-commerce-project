import React, { useState } from 'react';
import './Sidebar.css'
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import CategoryIcon from '@mui/icons-material/Category';
// import RequestPageIcon from '@mui/icons-material/RequestPage';
// import ShopIcon from '@mui/icons-material/Shop';




import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    // FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        // {
        //     path:"/about",
        //     name:"About",
        //     icon:<FaUserAlt/>
        // },
        // {
        //     path:"/analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // },
        // {
        //     path:"/Shop",
        //     name:"Shop",
        //     icon:<ShopIcon/>
        // },
        // {
        //     path:"/view",
        //     name:"View",
        //     // icon:<FaThList/>
        // },
        {
            path:"/user",
            name:"User",
            // icon:<VerifiedUserIcon/>
        },
        // {
        //     path:"/bank",
        //     name:"Bank",
        //     // icon:<FaThList/>
        // },
        {
            path:"/bank",
            name:"Bank",
            // icon:<AccountBalanceIcon/>
        },
        {
            path:"/productinventory",
            name:"Product_Invent",
            // icon:<InventoryIcon/>
        },
        {
            path:"/productspecif",
            name:"Product_specif",
            // icon:<CategoryIcon/>
        },
        // {
        //     path:"/offer",
        //     name:"Offer",
        //     icon:<FaThList/>
        // },
        {
            path:"/request",
            name:"Request",
            // icon:<RequestPageIcon/>
        },
        // {
        //     path:"/Product_update",
        //     name:"Product_Update",
        //     // icon:<FaThList/>
        // },
        // {
        //     path:"/Product_delete",
        //     name:"Product_Delete",
        //     // icon:<FaThList/>
        // }
        
    ]
    return (
        <div >
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Shop</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaUserAlt onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};



export default Sidebar;