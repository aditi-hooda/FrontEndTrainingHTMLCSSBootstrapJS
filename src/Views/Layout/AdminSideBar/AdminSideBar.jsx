import React,{ useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './AdminSideBar.scss'

const AdminSideBar =()=>{

    const location = useLocation();

    useEffect(() => {

        var menuItems = document.querySelectorAll("nav .menu li");
        var currentUrl = window.location.href;
        for (var i = 0; i < menuItems.length; i++) {          
                       
            if (menuItems[i].children[0].href === currentUrl) {
                menuItems[i].classList.add("active");
            }else{
                menuItems[i].classList.remove("active");
            }           
                       
        }
        if(location.pathname==='/admin/leave-balance'||location.pathname==='/admin/leave-request'){
            document.querySelector(".submenu-list").classList.add('active')
        }else{
            document.querySelector(".submenu-list").classList.remove('active')
        }
        
        
    });



    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="sidebar">
            <div className="logo">
                <Link to="admin"></Link>
            </div>
            <div className="menulist">
                <nav>
                    <ul className="menu">
                        <li className="menu-item active"><Link to="admin" className="menu">Dashboard</Link></li>
                        <li className="menu-item "><Link to="admin/employee" className="menu">Employees</Link></li>
                        <li className="submenu-list" >
                            <Link to="admin/leave-request" onClick={() => setIsOpen(!isOpen)}>Leave management</Link>
                            
                                <div className="submenu" style={{display: isOpen===true ? 'block':'none'}}>
                                    <div><Link to="admin/leave-request" >Leave request</Link></div>
                                    <div><Link to="admin/leave-balance">Leave Balance</Link></div>
                                </div>
                                                        
                        </li>

                        <li className="menu-item"><Link to="admin/holiday" className="link">Holiday</Link></li>
                        <li className="menu-item"><Link to="admin/attendance" className="link">Attendance</Link></li>
                    </ul>
                </nav>
                
            </div>
        </div>
        </>
    )
}

export default AdminSideBar;