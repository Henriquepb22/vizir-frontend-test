import React from "react";
import Container from "react-bootstrap/Container";

import Header from "../Header";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Container fluid="sm">{children}</Container>
        </>
    );
};

export default Layout;
