import React from "react";
import Form from "react-bootstrap/Form";

const FormPlans: React.FC = () => {
    return (
        <Form.Group controlId="plansControl">
            <Form.Label>Plano:</Form.Label>
            <Form.Control as="select">
                <option>FaleMais 30</option>
                <option>FaleMais 60</option>
                <option>FaleMais 120</option>
            </Form.Control>
        </Form.Group>
    );
};

export default FormPlans;
