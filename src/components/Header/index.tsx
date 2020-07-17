import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <Navbar bg="light" variant="light" expand="md">
            <Link to="/">
                <Navbar.Brand href="/">Telzir</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="ml-auto" activeKey={location.pathname}>
                    <Link to="/">
                        <Nav.Link href="/">Inicio</Nav.Link>
                    </Link>
                    <Link to="/planos">
                        <Nav.Link href="/planos">Planos</Nav.Link>
                    </Link>
                    <Link to="/sobre">
                        <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
