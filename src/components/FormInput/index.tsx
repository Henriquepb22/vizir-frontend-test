import React from "react";
import Form from "react-bootstrap/Form";

const FormInput: React.FC = () => {
    return (
        <Form.Group controlId="minutesControl">
            <Form.Label>Tempo falado:</Form.Label>
            <Form.Control type="text" placeholder="Em Minutos" />
        </Form.Group>
    );
};

export default FormInput;
