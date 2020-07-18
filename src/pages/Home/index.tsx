import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormComponent from "../../components/Form";
import JumbotronComponent from "../../components/Jumbotron";

const Home: React.FC = () => {
    return (
        <div className="mt-5">
            <FormComponent />
            <Row>
                <Col>
                    <JumbotronComponent label="Com Plano:" value="45,00" />
                </Col>
                <Col>
                    <JumbotronComponent label="Sem  Plano:" value="51,00" />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
