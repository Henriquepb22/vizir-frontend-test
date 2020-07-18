import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FormLocation: React.FC = () => {
    return (
        <Form.Group controlId="dddControl">
            <Form.Label>DDD:</Form.Label>
            <InputGroup>
                <Form.Control as="select">
                    <option hidden>Origem</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                </Form.Control>
                <Form.Control as="select">
                    <option hidden>Destino</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                </Form.Control>
            </InputGroup>
        </Form.Group>
    );
};

export default FormLocation;
