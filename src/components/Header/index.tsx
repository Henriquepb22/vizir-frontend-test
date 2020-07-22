import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header>
            <Navbar bg="light" variant="light" expand="md">
                <Navbar.Brand as={NavLink} to="/">
                    Telzir Telefonia
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ml-auto" activeKey={location.pathname}>
                        <Nav.Link as={NavLink} exact to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/planos">
                            Planos e Tarifas
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/sobre">
                            Sobre Nós
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
