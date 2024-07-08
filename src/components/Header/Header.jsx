import React from 'react';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import { scroller } from 'react-scroll';
const  Header = () => {
  let navigate = useNavigate();
  const handleScrollToComponent = (component) => {
    scroller.scrollTo(component, {
      smooth: true,
      offset: -50, // Optional: you can provide an offset to adjust the scroll position
    });
  };
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <a onClick={(event) =>{ 
          event.preventDefault();
          navigate('/');
        }} className=""><img src={logo} height="70px" width="125px" alt="" /></a>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link  active" onClick={(event)=>{
              event.preventDefault();
              navigate('/');
            }}>Home</a></li>
            <li><a className="nav-link" onClick={(event)=>{
              event.preventDefault();
              handleScrollToComponent('services');
            }}>Services</a></li>
            <li><a className="nav-link" onClick={(event)=>{
              event.preventDefault();
              handleScrollToComponent('team');
            }}>Team</a></li>
            <li><a className="nav-link" onClick={(event)=>{
              handleScrollToComponent('contact');
            }}>Contact Us</a></li>
            <li><a className="nav-link" onClick={(event) =>{
              event.preventDefault();
              navigate('/portfolio');
            }}>Portfolio</a></li>
            <li><a className="nav-link" onClick={(event) =>{
              event.preventDefault();
              navigate('/careers');
            }}>Careers</a></li>
            <li><a className="nav-link" onClick={(event) =>{
              event.preventDefault();
              navigate('/order');
            }}>Order Now</a></li>
            <li><a className="nav-link" onClick={(event) =>{
              event.preventDefault();
              navigate('/enroll')
            }}>Enroll Now</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* .navbar */}

      </div>
    </header>
  );
}

export default Header;
