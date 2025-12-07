import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import { scroller } from 'react-scroll';

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('Home');

  const handleScrollToComponent = (component) => {
    scroller.scrollTo(component, {
      smooth: true,
      offset: -50,
    });
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') setActiveLink('Home');
    else if (currentPath === '/portfolio') setActiveLink('Portfolio');
    else if (currentPath === '/andesite') setActiveLink('Andesite Stone');
    else if (currentPath === '/palm-sandstone') setActiveLink('Palem Sandstone');
    else if (currentPath === '/wall-cladding') setActiveLink('Wall Cladding');
  }, []);

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a
          onClick={(event) => {
            event.preventDefault();
            navigate('/');
          }}
          className=""
        >
          <img src={logo} height="70px" width="125px" alt="Logo" />
        </Link>

        {/* Navbar */}
        <nav id="navbar" className="navbar blue" style={{ cursor: 'pointer' }}>
          <ul>
            <li>
              <a
                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick('Home');
                  navigate('/');
                }}
              >
                Home
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="dropdown">
              <a
                className={`nav-link ${[
                  'Andesite Stone',
                  'Palm Sandstone',
                  'Wall Cladding',
                ].includes(activeLink)
                  ? 'active'
                  : ''}`}
                onClick={(e) => e.preventDefault()}
              >
                Products <i className="bi bi-chevron-down"></i>
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <a
                    onClick={() => {
                      handleLinkClick('Andesite Stone');
                      navigate('/andesite');
                    }}
                    className={activeLink === 'Andesite Stone' ? 'active' : ''}
                  >
                    Andesite Stone
                  </Link>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleLinkClick('Palm Sandstone');
                      navigate('/palm-sandstone');
                    }}
                    className={activeLink === 'Palm Sandstone' ? 'active' : ''}
                  >
                    Palm Sandstone
                  </Link>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleLinkClick('Wall Cladding');
                      navigate('/wall-cladding');
                    }}
                    className={activeLink === 'Wall Cladding' ? 'active' : ''}
                  >
                    Wall Cladding
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a
                className={`nav-link ${activeLink === 'Services' ? 'active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick('Services');
                  handleScrollToComponent('services');
                }}
              >
                Services
              </Link>
            </li>

            <li>
              <a
                className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick('Contact Us');
                  handleScrollToComponent('contact');
                }}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <a
                className={`nav-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick('Portfolio');
                  navigate('/portfolio');
                }}
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;





