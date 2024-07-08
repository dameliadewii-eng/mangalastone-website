import React from "react";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
const AdminHeader = () =>{
    let nevigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem('token');
        nevigate('/admin');
    }
    return(
        <>
        {/*<!-- ======= Header ======= */}
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
        <a href="#" className=""><img src={logo} width="125px" height="70px" alt=""/></a>
        <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" onClick={(event) =>{
                    event.preventDefault();
                    nevigate('/career');
                }}>Careers</a></li>
                <li><a className="nav-link scrollto" onClick={(event)=>{
                    event.preventDefault();
                    nevigate('/enrolls');
                }} >Enroll</a></li> 
                <li><a className="nav-link scrollto" onClick={(event)=>{
                    event.preventDefault();
                    nevigate('/contacts');
                }} >Contacts</a></li>
                <li><a className="nav-link scrollto" onClick={(event)=>{
                    event.preventDefault();
                    nevigate('/orders');
                }} > Order</a></li>
                <li><a className="nav-link scrollto" onClick={(event)=>{
                    event.preventDefault();
                 logout();  
                }} >Logout</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    </div>
    </header>
    </>
    )
}

export default AdminHeader;