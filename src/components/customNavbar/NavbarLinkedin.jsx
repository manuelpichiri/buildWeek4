import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import "./NavBarLinkedin.css";

import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  UserCircle,
} from "lucide-react";

import { LayoutGrid } from "lucide-react";

import { Dropdown } from "react-bootstrap";

const NavBarLinkedin = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="navbar-custom shadow-sm"
      sticky="top"
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#">
          <img
            className="img-fluid linkedin-logo"
            src="data:image/png;base64,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"
            alt="linkedin"
          />
        </Navbar.Brand>
        <Form className="search-container d-flex align-items-center">
          <span className="search-icon">🔍</span>
          <FormControl
            type="search"
            placeholder="Cerca"
            className="search-input"
          />
        </Form>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu" className="justify-content-end">
          <Nav className="container-items align-items-center">
            <Link
              to={`/`}
              className="d-flex flex-column align-items-center navbar-item"
            >
              <Home size={22} />
              <span>Home</span>
            </Link>
            <Nav.Link eventKey="/Rete" className="navbar-item" href="#">
              <Users size={22} />
              <span>Rete</span>
            </Nav.Link>
            <Nav.Link eventKey="/Lavoro" className="navbar-item" href="#">
              <Briefcase size={22} />
              <span>Lavoro</span>
            </Nav.Link>
            <Nav.Link eventKey="/messaggi" className="navbar-item" href="#">
              <MessageSquare size={22} />
              <span>Messaggi</span>
            </Nav.Link>
            <Nav.Link eventKey="/notifiche" className="navbar-item" href="#">
              <Bell size={22} />
              <span>Notifiche</span>
            </Nav.Link>

            <Link
              to={`/PaginaProfilo`}
              className="d-flex flex-column align-items-center navbar-item"
            >
              <UserCircle size={22} />
              <span>Tu</span>
            </Link>
          </Nav>
          <Dropdown eventKey="/aziende" className="navbar-item">
            <Dropdown.Toggle
              variant="link"
              className="p-0 d-flex flex-column align-items-center"
            >
              <LayoutGrid size={30} />
              <span>Per le aziende</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Prodotti</Dropdown.Item>
              <Dropdown.Item href="#">Servizi</Dropdown.Item>
              <Dropdown.Item href="#">Soluzioni Aziendali</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="link-navbar" href="#">
            Prova Premium per 0 EUR
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLinkedin;
