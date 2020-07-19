import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header>
        <Navbar bg="light" variant="light" expand="md">
                <Navbar.Brand as={Link} to="/">Telzir</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="ml-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to="/" href="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/planos" href="/planos">Planos</Nav.Link>
                        <Nav.Link as={Link} to="/sobre" href="/sobre">Sobre Nós</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </header>
    );
};

export default Header;
