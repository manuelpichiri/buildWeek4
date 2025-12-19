import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import { Search } from "lucide-react";
import "./NavBarLinkedin.css";

import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  UserCircle,
  Grip
} from "lucide-react";

import { Dropdown } from "react-bootstrap";
import { useState } from "react";

const NavBarLinkedin = () => {

  const [isOpenSearchInput, setIsOpenSearchInput] = useState(false)

  const handleSearchInputVisibility = () => {

    setIsOpenSearchInput(!isOpenSearchInput)

  }

  return (

    <Navbar
      bg="light"
      sticky="top"
      className="navbar-custom border-bottom shadow-sm py-0"
    >
      <Container className="d-flex align-items-center justify-content-between flex-nowrap">
        <div className={`d-flex align-items-center ${isOpenSearchInput ? "flex-grow-1" : ""}`}>
          <Navbar.Brand
            as={Link}
            to={`/`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0a66c2" className="mercado-match" width="40" height="40" focusable="false">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Navbar.Brand>
          <Form className={`search-container d-flex align-items-center ${isOpenSearchInput ? "flex-grow-1" : ""}`}>
            <div className="position-relative w-100 d-flex align-items-center">
              <Search
                className="search-icon-inside"
                onClick={handleSearchInputVisibility}
                size={18}
                color="rgba(0, 0, 0, 0.6)"
              />
              <FormControl
                type="search"
                placeholder="Cerca"
                className={`search-input d-none d-md-block ${isOpenSearchInput ? "d-block w-100" : ""}`}
                autoFocus={isOpenSearchInput}
              />
            </div>
          </Form>
        </div>
        <div className={`${isOpenSearchInput ? "d-none" : "d-flex"} d-md-flex align-items-center ms-auto`}>
          <Nav className="container-items d-flex flex-row align-items-center">
            <Nav.Link
              as={Link}
              to={`/`}
              className="navbar-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              <span
                className="d-none d-lg-block"
              >Home</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Rete"
              className="navbar-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              <span
                className="d-none d-lg-block"
              >Rete</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Lavoro"
              className="navbar-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <span
                className="d-none d-lg-block"
              >Lavoro</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/messaggi"
              className="navbar-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <span
                className="d-none d-lg-block"
              >Messaggi</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/notifiche"
              className="navbar-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <span
                className="d-none d-lg-block"
              >Notifiche</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={`/PaginaProfilo`}
              className="navbar-item"
            >
              <UserCircle size={22} />
              <span
                className="d-none d-lg-block"
              >Tu</span>
            </Nav.Link>
          </Nav>
          <Dropdown
            className="navbar-item"
          >
            <div className="d-flex flex-column align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <Dropdown.Toggle
                variant="link"
                className="p-0 d-flex align-items-center text-decoration-none shadow-none text-secondary d-none d-lg-block"
              >
                <span className="text-nowrap">Per le aziende</span>
              </Dropdown.Toggle>
            </div>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Prodotti</Dropdown.Item>
              <Dropdown.Item href="#">Servizi</Dropdown.Item>
              <Dropdown.Item href="#">Soluzioni Aziendali</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="link-navbar" href="#">
            Prova Premium per 0 EUR
          </a>
        </div>
      </Container>
    </Navbar>

  );
};

export default NavBarLinkedin;
