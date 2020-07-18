import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import FormComponent from "../../components/Form";
import JumbotronComponent from "../../components/Jumbotron";

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="mt-5">
            <FormComponent />
            <Row className="text-center justify-content-center mt-5">
                {isLoading ? (
                    <Spinner animation="border" color="black" />
                ) : (
                    <>
                        <Col>
                            <JumbotronComponent
                                label="Com FaleMais:"
                                value="45,00"
                            />
                        </Col>
                        <Col>
                            <JumbotronComponent
                                label="Sem FaleMais:"
                                value="51,00"
                            />
                        </Col>
                    </>
                )}
            </Row>
        </div>
    );
};

export default Home;
